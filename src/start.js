function start() {
  const home = document.createElement("div");
  home.classList.add("home");

  const restaurantName = document.createElement("h1");
  const resturantDesc = document.createElement("p");
  const restaurantInfo = document.createElement("div");
  restaurantInfo.classList.add("restaurant-info");
  restaurantName.classList.add("restaurant-name");
  resturantDesc.classList.add("restaurant-desc");

  restaurantName.textContent = "Slice Haven";
  resturantDesc.textContent =
    "Welcome to Slice Haven, the ultimate destination for pizza lovers! We pride ourselves on crafting mouthwatering pizzas that will satisfy your cravings and leave you wanting more. Our commitment to quality starts with our freshly sourced ingredients, ensuring every bite is bursting with flavor. At Slice Haven, we believe that pizza is an art form. Our skilled chefs masterfully create each pizza, from hand-tossed dough to the perfect blend of toppings. Whether you're a fan of classic Margherita, adventurous with our specialty BBQ chicken pizza, or craving a vegetarian delight, we have a wide range of options to please every palate.";

  restaurantInfo.appendChild(restaurantName);
  restaurantInfo.appendChild(resturantDesc);
  home.appendChild(restaurantInfo);

  return home;
}

export { start };
