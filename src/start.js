function start() {
  const home = document.createElement("div");

  const homeImg = new Image();
  homeImg.src = "./img/pizza.jpg";
  home.appendChild(homeImg);

  home.classList.add("home");
  homeImg.classList.add("home-img");

  return home;
}

export { start };
