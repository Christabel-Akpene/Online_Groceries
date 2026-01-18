import type { ItemSection } from "../interfaces";

export const sectionedData: ItemSection[] = [
  {
    title: "Exclusive Offer",
    data: [
      {
        id: "banana",
        name: "Bananas",
        price: 4.99,
        scale: "7 pcs",
        image: require("@/assets/images/banana.png"), 
      },
      {
        id: "spaghetti",
        name: "Spaghetti",
        price: 2.49,
        scale: "500g",
        image: require("@/assets/images/spagetti.png"),
      },
      {
        id: "sprite",
        name: "Sprite",
        price: 1.99,
        scale: "1L",
        image: require("@/assets/images/sprite.png"),
      },
      {
        id: "tomato",
        name: "Tomato",
        price: 3.49,
        scale: "1kg",
        image: require("@/assets/images/tomato.png"),
      },
    ],
  },
  {
    title: "Best Selling",
    data: [
      {
        id: "ginger",
        name: "Ginger",
        price: 5.99,
        scale: "500g",
        image: require("@/assets/images/ginger.png"),
      },
      {
        id: "bell_pepper",
        name: "Bell Pepper",
        price: 2.99,
        scale: "3 pcs",
        image: require("@/assets/images/bell_pepper.png"),
      },
      {
        id: "diet_coke",
        name: "Diet Coke",
        price: 1.99,
        scale: "1L",
        image: require("@/assets/images/diet_coke.png"),
      },
      {
        id: "apple",
        name: "Apple",
        price: 4.99,
        scale: "1kg",
        image: require("@/assets/images/apple.png"),
      },
    ],
  },
  {
    title: "New Arrivals",
    data: [
      {
        id: "beef",
        name: "Beef Bone",
        price: 9.99,
        scale: "1kg",
        image: require("@/assets/images/beef.png"),
      },
      {
        id: "chicken",
        name: "Broiler Chicken",
        price: 7.49,
        scale: "1.2kg",
        image: require("@/assets/images/chicken.png"),
      },
      {
        id: "mayonnaise",
        name: "Mayonnaise",
        price: 3.99,
        scale: "500ml",
        image: require("@/assets/images/mayonnaise.png"),
      },
      {
        id: "eggs",
        name: "Eggs",
        price: 2.99,
        scale: "12 pcs",
        image: require("@/assets/images/eggs.png"),
      },
    ],
  },
];

