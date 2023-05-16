import { foodList } from "./foodList";

function menu() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  foodList.forEach((food) => {
    const menu = document.createElement("div");
    const img = document.createElement("img");
    const foodName = document.createElement("p");
    const desc = document.createElement("p");
    const price = document.createElement("p");

    foodName.classList.add("food-name");
    desc.classList.add("food-desc");
    price.classList.add("food-price");

    foodName.textContent = food.name;
    desc.textContent = food.description;
    price.textContent = food.price;
    img.src = food.img;

    menu.classList.add("menu");
    img.classList.add("menu-img");

    menu.appendChild(foodName);
    menu.appendChild(img);
    menu.appendChild(desc);
    menu.appendChild(price);

    menuContainer.appendChild(menu);
  });
  return menuContainer;
}

export { menu };
