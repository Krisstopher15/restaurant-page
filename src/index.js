import { Header } from "./header.js";
import { start } from "./start.js";
import { menu } from "./menu.js";

const container = document.querySelector(".container");

container.appendChild(Header());
container.appendChild(start());

document.getElementById("btn-start").addEventListener("click", () => {
  container.replaceChild(start(), document.querySelector(".menu"));
});

document.getElementById("btn-menu").addEventListener("click", () => {
  console.log("Hola");
  container.replaceChild(menu(), document.querySelector(".home"));
});
