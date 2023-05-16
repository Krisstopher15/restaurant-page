import { header } from "./header.js";
import { start } from "./start.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
import "./style.css";

const container = document.querySelector(".container");

container.appendChild(header());
container.appendChild(start());

document.getElementById("btn-start").addEventListener("click", () => {
  container.replaceChild(start(), container.lastChild);
});

document.getElementById("btn-menu").addEventListener("click", () => {
  container.replaceChild(menu(), container.lastChild);
});

document.getElementById("btn-about").addEventListener("click", () => {
  container.replaceChild(about(), container.lastChild);
});
