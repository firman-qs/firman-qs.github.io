(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const wave = document.querySelector('.wave-experiment');
  if (wave) {
    const electric = wave.querySelector('[data-em-electric]');
    const magnetic = wave.querySelector('[data-em-magnetic]');
    const particle = wave.querySelector('[data-wave-particle]');
    let origin = 550;
    let frame;
    let started = 0;
    let dragging;
    let holding = false;
    let releasedAt = 0;
    let releasedGain = 1;
    let ignoreClick = false;
    function rest() {
      particle.setAttribute('cy', '55');
      electric.setAttribute('d', 'M0 55 H1100');
      magnetic.setAttribute('d', 'M0 55 H1100');
    }
    function draw(now) {
      const age = (now - started) / 1000;
      const releaseAge = (now - releasedAt) / 1000;
      if ((!holding && releaseAge >= 2.8) || document.hidden || reduced.matches) {
        rest(); holding = false; frame = undefined; return;
      }
      const e = [];
      const b = [];
      const gain = holding ? 1 + 0.3 * Math.min(age / 2, 1) : releasedGain;
      const damping = holding ? 1 : Math.pow(Math.max(0, 1 - releaseAge / 2.8), 2);
      // Both outward waves share one source phase. A rounded distance
      // keeps their slopes continuous where they meet at the particle.
      function displacement(distance) {
        const radius = Math.hypot(distance, 18) - 18;
        const retardedTime = Math.max(0, age - radius / 155);
        const attack = Math.sin(Math.min(1, retardedTime / 0.12) * Math.PI / 2);
        return Math.sin(retardedTime * 8) * 18 * gain * damping * attack;
      }
      particle.setAttribute('cy', (55 - displacement(0)).toFixed(2));
      const samples = Array.from({ length: 551 }, (_, index) => index * 2);
      if (!samples.includes(origin)) samples.push(origin);
      samples.sort((a, b) => a - b);
      for (const x of samples) {
        const amplitude = displacement(x - origin);
        e.push(`${x ? 'L' : 'M'}${x},${(55 - amplitude).toFixed(2)}`);
        b.push(`${x ? 'L' : 'M'}${(x + amplitude * 0.35).toFixed(2)},${(55 + amplitude * 0.4).toFixed(2)}`);
      }
      electric.setAttribute('d', e.join(' '));
      magnetic.setAttribute('d', b.join(' '));
      frame = requestAnimationFrame(draw);
    }
    function moveParticle(clientX) {
      const bounds = wave.getBoundingClientRect();
      origin = clientX === undefined ? 550 : Math.max(0, Math.min(1100, (clientX - bounds.left) / bounds.width * 1100));
      particle.setAttribute('cx', origin.toFixed(2));
    }
    function start(clientX, hold = false) {
      moveParticle(clientX);
      cancelAnimationFrame(frame);
      holding = hold;
      started = performance.now();
      releasedAt = started;
      releasedGain = 1;
      if (reduced.matches) { rest(); holding = false; return; }
      frame = requestAnimationFrame(draw);
    }
    function release() {
      if (!holding) return;
      releasedAt = performance.now();
      releasedGain = 1 + 0.3 * Math.min((releasedAt - started) / 2000, 1);
      holding = false;
    }
    wave.hidden = false;
    wave.addEventListener('click', event => {
      if (ignoreClick || holding) { ignoreClick = false; return; }
      start(event.detail ? event.clientX : undefined);
    });
    wave.addEventListener('pointerdown', event => {
      if (event.button !== 0) return;
      dragging = event.pointerId;
      ignoreClick = true;
      wave.setPointerCapture(event.pointerId);
      start(event.clientX, true);
    });
    wave.addEventListener('pointermove', event => {
      if (dragging === event.pointerId) moveParticle(event.clientX);
    });
    function endDrag() { dragging = undefined; release(); }
    wave.addEventListener('lostpointercapture', endDrag);
    wave.addEventListener('pointerup', endDrag);
    wave.addEventListener('pointercancel', endDrag);
    wave.addEventListener('keydown', event => {
      if (![' ', 'Enter'].includes(event.key)) return;
      event.preventDefault();
      if (event.repeat) return;
      ignoreClick = true;
      start(undefined, true);
    });
    wave.addEventListener('keyup', event => {
      if (![' ', 'Enter'].includes(event.key)) return;
      event.preventDefault();
      release();
      ignoreClick = false;
    });
    wave.addEventListener('blur', release);
    window.addEventListener('blur', endDrag);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) endDrag();
    });
  }

  const flow = document.querySelector('.flow-experiment');
  if (flow) {
    const ns = 'http://www.w3.org/2000/svg';
    const group = flow.querySelector('[data-flow-lines]');
    const lines = Array.from({ length: 12 }, (_, index) => {
      const path = document.createElementNS(ns, 'path');
      path.style.opacity = String(0.13 + Math.pow(Math.sin(index / 11 * Math.PI), 0.8) * 0.25);
      const gradientId = `flow-thread-${index}`;
      const gradient = document.createElementNS(ns, 'linearGradient');
      gradient.id = gradientId;
      gradient.setAttribute('gradientUnits', 'userSpaceOnUse');
      gradient.setAttribute('x1', String(18 + 28 * Math.sin(index * 1.7) ** 2));
      gradient.setAttribute('x2', String(1080 - 35 * Math.cos(index * 1.3) ** 2));
      for (const [offset, opacity] of [['0%', '0'], ['20%', '1'], ['76%', '1'], ['100%', '0']]) {
        const stop = document.createElementNS(ns, 'stop');
        stop.setAttribute('offset', offset);
        stop.setAttribute('stop-color', 'var(--sketch)');
        stop.setAttribute('stop-opacity', opacity);
        gradient.append(stop);
      }
      flow.querySelector('defs').append(gradient);
      path.style.stroke = `url(#${gradientId})`;
      group.append(path);
      return path;
    });
    const stir = { x: 550, y: 115 };
    let lastInput = 0;
    let frame;
    let lastDraw = 0;
    // An illustrative incompressible flow: uniform drift plus smooth vortices.
    // Each vortex is the curl of a Gaussian streamfunction, so its divergence
    // is zero. This is a flow sketch, not a numerical Navier–Stokes solver.
    function velocity(x, y, strength) {
      let u = 1;
      let v = 0;
      const vortices = [
        [390, 105, 0.032, 75], [575, 132, -0.032, 78], [765, 106, 0.026, 83],
        [stir.x, stir.y, 0.048 * strength, 65]
      ];
      for (const [cx, cy, spin, radius] of vortices) {
        const dx = x - cx;
        const dy = y - cy;
        const weight = spin * Math.exp(-(dx * dx + dy * dy) / (radius * radius));
        u -= dy * weight;
        v += dx * weight;
      }
      return [u, v];
    }
    function render(strength) {
      lines.forEach((path, index) => {
        const inset = 18 + 28 * Math.sin(index * 1.7) ** 2;
        const end = 1080 - 35 * Math.cos(index * 1.3) ** 2;
        let x = inset;
        let y = 20 + index * 17;
        const points = [`M${x.toFixed(1)},${y}`];
        for (let step = 0; step < 450; step++) {
          const [u, v] = velocity(x, y, strength);
          const speed = Math.max(0.05, Math.hypot(u, v));
          const h = 3.5 / speed;
          const [mu, mv] = velocity(x + u * h / 2, y + v * h / 2, strength);
          x += mu * h;
          y += mv * h;
          if (x < inset || x > end || y < -40 || y > 270) break;
          points.push(`L${x.toFixed(1)},${y.toFixed(1)}`);
        }
        path.setAttribute('d', points.join(' '));
      });
    }
    function animate(now) {
      if (document.hidden) { render(0); frame = undefined; return; }
      const age = (now - lastInput) / 1000;
      const strength = Math.max(0, 1 - age / 2.5);
      if (now - lastDraw > 32 || strength === 0) {
        render(strength);
        lastDraw = now;
      }
      if (strength > 0) frame = requestAnimationFrame(animate);
      else frame = undefined;
    }
    function disturb(event) {
      const bounds = flow.getBoundingClientRect();
      stir.x = event?.clientX === undefined ? 550 : Math.max(0, Math.min(1100, (event.clientX - bounds.left) / bounds.width * 1100));
      stir.y = event?.clientY === undefined ? 115 : Math.max(0, Math.min(230, (event.clientY - bounds.top) / bounds.height * 230));
      lastInput = performance.now();
      if (reduced.matches) { render(0.8); return; }
      if (frame === undefined) frame = requestAnimationFrame(animate);
    }
    flow.hidden = false;
    render(0);
    flow.addEventListener('pointermove', disturb, { passive: true });
    flow.addEventListener('click', event => disturb(event.detail ? event : undefined));
  }
  const instrument = document.querySelector('.reading-instrument');
  if (instrument) {
    instrument.hidden = false;
    let scheduled = false;
    function update() {
      const article = document.querySelector('.reading-content');
      const top = article.getBoundingClientRect().top + window.scrollY;
      const length = Math.max(1, article.offsetHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, (window.scrollY - top) / length));
      instrument.style.setProperty('--progress', progress * 100);
      instrument.setAttribute('aria-valuenow', String(Math.round(progress * 100)));
      instrument.querySelector('[data-reading-progress]').textContent = `${Math.round(progress * 100)}%`;
      scheduled = false;
    }
    function schedule() { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } }
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('load', schedule);
    document.fonts?.ready.then(schedule);
    update();
  }
})();
