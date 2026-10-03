// Start expanded beside the content and collapsed on narrow screens.
// Once initialized, the reader can toggle the native details control freely.
const contents = document.querySelector(".page-toc details");
if (contents) {
  const desktop = window.matchMedia("(min-width: 1100px)");
  const syncContents = () => { contents.open = desktop.matches; };
  syncContents();
  desktop.addEventListener("change", syncContents);

  const sections = Array.from(contents.querySelectorAll('a[href^="#"]'))
    .map((link) => ({
      link,
      heading: document.getElementById(decodeURIComponent(link.hash.slice(1))),
    }))
    .filter(({ heading }) => heading);

  const selectSection = (selected) => {
    for (const { link } of sections) {
      if (link === selected) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  };
  const updateSection = () => {
    let selected = null;
    for (const { link, heading } of sections) {
      if (heading.getBoundingClientRect().top > 48) break;
      selected = link;
    }
    // The final section may be too short to reach the top of the viewport.
    if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      selected = sections.at(-1)?.link ?? null;
    }
    selectSection(selected);
  };
  let scheduled = false;
  const scheduleUpdate = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      updateSection();
    });
  };
  for (const { link } of sections) {
    link.addEventListener("click", () => selectSection(link));
  }
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("hashchange", scheduleUpdate);
  window.addEventListener("load", scheduleUpdate);
  scheduleUpdate();
}
