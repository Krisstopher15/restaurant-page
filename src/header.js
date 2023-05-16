function header() {
  const nav = document.createElement("nav");
  const btnStart = document.createElement("button");
  const btnMenu = document.createElement("button");
  const btnAbout = document.createElement("button");

  btnStart.textContent = "START";
  btnMenu.textContent = "MENU";
  btnAbout.textContent = "ABOUT";

  btnMenu.setAttribute("id", "btn-menu");
  btnStart.setAttribute("id", "btn-start");
  btnAbout.setAttribute("id", "btn-about");

  nav.appendChild(btnStart);
  nav.appendChild(btnMenu);
  nav.appendChild(btnAbout);

  return nav;
}

export { header };
