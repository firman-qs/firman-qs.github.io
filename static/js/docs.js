// Native details controls remain usable with JavaScript disabled.
const docsMenu = document.querySelector(".docs-menu");
if (docsMenu) {
  const wideScreen = window.matchMedia("(min-width: 1100px)");
  const syncDocsMenu = () => { docsMenu.open = wideScreen.matches; };
  syncDocsMenu();
  wideScreen.addEventListener("change", syncDocsMenu);
}
