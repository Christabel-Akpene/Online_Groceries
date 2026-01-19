import type { ItemSection } from "../interfaces";
import { Categories } from "../interfaces";

export const sectionedData: ItemSection[] = [
  {
    title: "Exclusive Offer",
    data: [
      {
        id: "banana",
        name: "Bananas",
        price: 4.99,
        scale: "7 pcs",
        image: require("@/assets/images/fruits/banana.png"), 
      },
      {
        id: "spaghetti",
        name: "Spaghetti",
        price: 2.49,
        scale: "500g",
        image: require("@/assets/images/dairy/spagetti.png"),
      },
      {
        id: "sprite",
        name: "Sprite",
        price: 1.99,
        scale: "1L",
        image: require("@/assets/images/beverages/sprite.png"),
      },
      {
        id: "tomato",
        name: "Tomato",
        price: 3.49,
        scale: "1kg",
        image: require("@/assets/images/fruits/tomato.png"),
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
        image: require("@/assets/images/fruits/ginger.png"),
      },
      {
        id: "bell_pepper",
        name: "Bell Pepper",
        price: 2.99,
        scale: "3 pcs",
        image: require("@/assets/images/fruits/bell_pepper.png"),
      },
      {
        id: "diet_coke",
        name: "Diet Coke",
        price: 1.99,
        scale: "1L",
        image: require("@/assets/images/beverages/diet_coke.png"),
      },
      {
        id: "apple",
        name: "Apple",
        price: 4.99,
        scale: "1kg",
        image: require("@/assets/images/fruits/apple.png"),
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
        image: require("@/assets/images/meat/beef.png"),
      },
      {
        id: "chicken",
        name: "Broiler Chicken",
        price: 7.49,
        scale: "1.2kg",
        image: require("@/assets/images/meat/chicken.png"),
      },
      {
        id: "mayonnaise",
        name: "Mayonnaise",
        price: 3.99,
        scale: "500ml",
        image: require("@/assets/images/dairy/mayonnaise.png"),
      },
      {
        id: "eggs",
        name: "Eggs",
        price: 2.99,
        scale: "12 pcs",
        image: require("@/assets/images/dairy/eggs.png"),
      },
    ],
  },
];


export const categories: Categories[] = [
  {
    name: "Bakery & Snacks",
    image: require("@/assets/images/bakery/bakery.png"),
    color: "#f4ebf7",
    borderColor: "#c9a3d6",
  },
  {
    name: "Beverages",
    image: require("@/assets/images/beverages/beverages.png"),
    color: "#edf7fc",
    borderColor: "#8fc4e8",
  },
  {
    name: "Fruits & Vegetables",
    image: require("@/assets/images/fruits/fruits.png"),
    color: "#eef7f1",
    borderColor: "#7fc59a",
  },
  {
    name: "Meat & Fish",
    image: require("@/assets/images/meat/meat.png"),
    color: "#fde8e4",
    borderColor: "#e38b7a",
  },
  {
    name: "Diary & Eggs",
    image: require("@/assets/images/dairy/milk.png"),
    color: "#fff8e5",
    borderColor: "#e6c66d",
  },
  {
    name: "Cooking Oil & Ghee",
    image: require("@/assets/images/oil/oil.png"),
    color: "#fef6ed",
    borderColor: "#e6b27a",
  },
];

