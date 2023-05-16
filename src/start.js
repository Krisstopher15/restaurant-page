import { pizza } from "./img/pizza.jpg";

function start() {
  const home = document.createElement("div");
  const homeImg = document.createElement("img");
  homeImg.src = "./img/pizza";
  home.appendChild(homeImg);

  home.classList.add("home");
  homeImg.classList.add("home-img");

  return home;
}

export { start };
