+++
title = "PBuM - Usulan Novelty Artikel Pertemuan 6"
date = "2025-10-10"
description = "Teknik analisis masalah berbasis data"

[taxonomies]
tags = ["FMIA258001", "kuliah"]

[extra]
comment = true
+++

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Oops — Page error</title>
  <style>
    :root{
      --bg:#0f1724; /* dark navy */
      --card:#0b1220;
      --accent:#7c3aed; /* violet */
      --muted:#94a3b8;
      --glass: rgba(255,255,255,0.04);
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;
      font-family:Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      background: radial-gradient(1200px 600px at 10% 20%, rgba(124,58,237,0.12), transparent),
                  radial-gradient(1000px 500px at 90% 80%, rgba(6,182,212,0.06), transparent),
                  var(--bg);
      color:#e6eef8;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:48px;
      gap:24px;
    }

    .card{
      width:100%;
      max-width:920px;
      background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      border-radius:16px;
      padding:28px;
      box-shadow: 0 8px 30px rgba(2,6,23,0.6);
      display:grid;
      grid-template-columns: 1fr 380px;
      gap:20px;
      align-items:center;
      border:1px solid rgba(255,255,255,0.03);
    }

    .left{
      padding-right:8px;
    }

    h1{
      margin:0 0 8px 0;
      font-size:clamp(28px,4.2vw,42px);
      letter-spacing:-0.02em;
      line-height:1.02;
    }
    p.lead{
      margin:0 0 18px 0;
      color:var(--muted);
      font-size:15px;
    }

    .meta{
      display:flex;
      gap:10px;
      flex-wrap:wrap;
      margin-bottom:18px;
    }
    .codebox{
      background:var(--glass);
      padding:10px 12px;
      border-radius:10px;
      font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace;
      color:#dbeafe;
      font-size:13px;
      border:1px solid rgba(255,255,255,0.03);
    }

    .actions{display:flex;gap:12px;align-items:center}
    .btn{
      appearance:none;
      border:0;
      padding:10px 14px;
      border-radius:10px;
      font-weight:600;
      cursor:pointer;
      background:linear-gradient(180deg,var(--accent), #5b21b6);
      color:white;
      box-shadow: 0 6px 18px rgba(92,33,182,0.28);
    }
    .btn.ghost{
      background:transparent;
      border:1px solid rgba(255,255,255,0.06);
      color:var(--muted);
      font-weight:600;
      box-shadow:none;
    }

    .right{
      display:flex;
      align-items:center;
      justify-content:center;
    }

    .illustration{
      width:320px;
      height:220px;
      background:linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      border-radius:12px;
      display:flex;
      align-items:center;
      justify-content:center;
      position:relative;
      overflow:hidden;
      border:1px solid rgba(255,255,255,0.03);
    }
    .planet{position:absolute; border-radius:50%; opacity:0.95}
    .p1{width:160px;height:160px; background:linear-gradient(180deg,#4f46e5,#7c3aed); right:-20px; top:-30px; filter:blur(18px) saturate(120%); transform:rotate(18deg)}
    .p2{width:260px;height:260px; background:linear-gradient(180deg,#06b6d4,#7c3aed); left:-90px; bottom:-80px; filter:blur(28px) saturate(110%); opacity:0.12}

    .robot{
      position:relative;
      width:120px;height:120px; z-index:2; pointer-events:none; opacity:0.98;
      transform-origin:center bottom;
      animation: bob 3s ease-in-out infinite;
    }
    @keyframes bob{0%{transform:translateY(0)}50%{transform:translateY(-8px)}100%{transform:translateY(0)}}

    footer.note{margin-top:14px;color:var(--muted);font-size:13px}

    @media (max-width:860px){
      .card{grid-template-columns:1fr;}
      .right{order:-1}
      .illustration{width:100%;height:180px}
    }
  </style>
</head>
<body>
  <main class="card" role="main" aria-labelledby="error-title">
    <section class="left">
      <h1 id="error-title">Uh-oh — something went wrong.</h1>
      <p class="lead">We couldn't load the page you requested. This might be temporary — try one of the options below.</p>

      <div class="meta">
        <div class="codebox" id="status">Error code: <strong id="errcode">500</strong></div>
        <div class="codebox" id="when">When: <span id="timestamp">—</span></div>
        <div class="codebox" id="trace">Ref: <span id="ref">n/a</span></div>
      </div>

      <div class="actions">
        <button class="btn" id="retryBtn" title="Retry">Retry</button>
        <button class="btn ghost" id="homeBtn" title="Go home">Home</button>
        <button class="btn ghost" id="copyBtn" title="Copy error details">Copy details</button>
      </div>

      <footer class="note">If the problem persists, please contact the site admin or try again later.</footer>
    </section>

    <aside class="right" aria-hidden="false">
      <div class="illustration" role="img" aria-label="Friendly error illustration">
        <div class="planet p1"></div>
        <div class="planet p2"></div>
        <!-- simple robot SVG -->
        <svg class="robot" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
            <rect x="6" y="18" width="52" height="36" rx="6" fill="#0b1220" stroke="#1f2937"/>
            <rect x="20" y="8" width="24" height="20" rx="4" fill="#111827" stroke="#374151"/>
            <circle cx="32" cy="18" r="4" fill="#e6eef8"/>
            <path d="M26 34h12" stroke="#94a3b8" stroke-width="2"/>
            <path d="M18 44h28" stroke="#0ea5a4" stroke-width="1.5"/>
            <rect x="28" y="26" width="8" height="6" rx="2" fill="#94a3b8" opacity="0.15"/>
          </g>
        </svg>
      </div>
    </aside>
  </main>

  <script>
    // Small script to make the page interactive. Zola: you can set these values via shortcodes or leave JS to fill them.
    (function(){
      function nowISO(){return new Date().toLocaleString()}
      var codeEl = document.getElementById('errcode')
      var tsEl = document.getElementById('timestamp')
      var refEl = document.getElementById('ref')

      // If you want to let Zola inject variables, replace these lines with template variables.
      var injected = {
        code: (window.ERROR_CODE || 500),
        ref: (window.ERROR_REF || '-')
      }

      codeEl.textContent = injected.code
      tsEl.textContent = nowISO()
      refEl.textContent = injected.ref

      document.getElementById('retryBtn').addEventListener('click', function(){
        // a soft reload that tries to preserve POST -> GET fallback
        if (navigator.onLine){
          location.reload(true)
        } else {
          alert('You appear offline — check your connection.')
        }
      })

      document.getElementById('homeBtn').addEventListener('click', function(){
        location.href = '/'
      })

      document.getElementById('copyBtn').addEventListener('click', function(){
        var details = 'Error: ' + injected.code + '\nTime: ' + new Date().toISOString() + '\nRef: ' + injected.ref
        if (navigator.clipboard){
          navigator.clipboard.writeText(details).then(function(){
            alert('Error details copied to clipboard')
          })
        } else {
          prompt('Copy the error details:', details)
        }
      })

      // For accessibility: focus first actionable control
      document.getElementById('retryBtn').focus()
    })()
  </script>
</body>
</html>


<!-- Nama: Firman Qashdus Sabil\
NIM: 250321830676

Anda dapat mendownload:
- pdf usulan novelty Artikel: [disini $\rightarrow$ drive usulan novelty artikel pertemuan 5](https://drive.google.com/file/d/10fhO94zuMFTE4rtgbYztvNNBDfIo-vTZ/view?usp=sharing)

# Usulan novelty: Teknik analisis masalah berbasis data
<iframe src="https://drive.google.com/file/d/10fhO94zuMFTE4rtgbYztvNNBDfIo-vTZ/preview" width="100%" height="600" allow="autoplay" frameborder="0"></iframe> -->
