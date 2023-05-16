import chicagoPizza from "./img/chicagoPizza.jpg";
import newyorkPizza from "./img/newyorkPizza.jpg";
import cheesePizza from "./img/cheesepizza.jpg";
import pepperoniPizza from "./img/pepperonipizza.jpg";

export const foodList = [
  {
    id: 1,
    name: "Chicago Style",
    description:
      "The extra-high crust makes space for lots more cheese, tomato sauce, and toppings than pan pies. With a name that references onions, it's no wonder that Chicagoans like their pizza with plenty of flavor. Tomato sauce is much thicker than the sauce on pan pizzas.",
    img: chicagoPizza,
    price: "$18.55",
  },

  {
    id: 2,
    name: "New York Style",
    description:
      "New York–style pizza is pizza made with a characteristically large hand-tossed thin crust, often sold in wide slices to go. The crust is thick and crisp only along its edge, yet soft, thin, and pliable enough beneath its toppings to be folded in half to eat.",
    img: newyorkPizza,
    price: "$17.99",
  },

  {
    id: 3,
    name: "Cheese Pizza",
    description:
      "Our Cheese Pizza starts with a foundation of hand-tossed, freshly made dough that bakes to perfection in our brick oven, creating a thin and crispy crust that will have you coming back for more. We then generously spread a savory tomato sauce made from ripe, juicy tomatoes and seasoned with a blend of aromatic herbs and spices, adding a burst of tangy and vibrant flavors to every bite.",
    img: cheesePizza,
    price: "$9.21",
  },

  {
    id: 4,
    name: "Pepperoni Pizza",
    description:
      "Pepperoni is basically an American version of salami. Pepperoni is a meat mixture of beef and pork that has been cured and seasoned with paprika and chili powder. Pepperoni is characteristically soft, slightly smoky, and bright red in color. Thinly sliced pepperoni is a popular pizza topping in American pizzerias.",
    img: pepperoniPizza,
    price: "$9.99",
  },
];
