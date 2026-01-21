import type { ItemSection } from "../interfaces";
import { Categories, ProductData } from "../interfaces";

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
    route: "/(products)/snacks",
  },
  {
    name: "Beverages",
    image: require("@/assets/images/beverages/beverages.png"),
    color: "#edf7fc",
    borderColor: "#8fc4e8",
    route: "/(products)/beverages",
  },
  {
    name: "Fruits & Vegetables",
    image: require("@/assets/images/fruits/fruits.png"),
    color: "#eef7f1",
    borderColor: "#7fc59a",
    route: "/(products)/fruits",
  },
  {
    name: "Meat & Fish",
    image: require("@/assets/images/meat/meat.png"),
    color: "#fde8e4",
    borderColor: "#e38b7a",
    route: "/(products)/meat",
  },
  {
    name: "Diary & Eggs",
    image: require("@/assets/images/dairy/milk.png"),
    color: "#fff8e5",
    borderColor: "#e6c66d",
    route: "/(products)/dairy",
  },
  {
    name: "Cooking Oil & Ghee",
    image: require("@/assets/images/oil/oil.png"),
    color: "#fef6ed",
    borderColor: "#e6b27a",
    route: "/(products)/oil",
  },
];


export const productSections: Record<string, ProductData> = {
  beverages: {
    name: "Beverages",
    data: [
      {
        id: "sprite",
        name: "Sprite",
        price: 1.99,
        scale: "1L",
        image: require("@/assets/images/beverages/sprite.png"),
      },
      {
        id: "diet_coke",
        name: "Diet Coke",
        price: 1.99,
        scale: "1L",
        image: require("@/assets/images/beverages/diet_coke.png"),
      },
      {
        id: "apple_juice",
        name: "Apple Juice",
        price: 2.49,
        scale: "1L",
        image: require("@/assets/images/beverages/apple_juice.png"),
      },
      {
        id: "coca_cola",
        name: "Coca Cola",
        price: 1.99,
        scale: "1L",
        image: require("@/assets/images/beverages/coca_cola.png"),
      },
      {
        id: "orange_juice",
        name: "Orange Juice",
        price: 2.49,
        scale: "1L",
        image: require("@/assets/images/beverages/orange_juice.png"),
      },
      {
        id: "pepsi",
        name: "Pepsi",
        price: 1.99,
        scale: "1L",
        image: require("@/assets/images/beverages/pepsi.png"),
      },
    ],
  },

  dairy: {
    name: "Dairy",
    data: [
      {
        id: "eggs",
        name: "Eggs",
        price: 2.99,
        scale: "12 pcs",
        image: require("@/assets/images/dairy/eggs.png"),
      },
      {
        id: "spaghetti",
        name: "Egg Spaghetti",
        price: 2.49,
        scale: "500g",
        image: require("@/assets/images/dairy/spagetti.png"),
      },
      {
        id: "mayonnaise",
        name: "Mayonnaise",
        price: 3.99,
        scale: "500ml",
        image: require("@/assets/images/dairy/mayonnaise.png"),
      },
    ],
  },

  fruitsAndVegetables: {
    name: "Fruits and Vegetables",
    data: [
      {
        id: "banana",
        name: "Bananas",
        price: 4.99,
        scale: "7 pcs",
        image: require("@/assets/images/fruits/banana.png"),
      },
      {
        id: "tomato",
        name: "Tomato",
        price: 3.49,
        scale: "1kg",
        image: require("@/assets/images/fruits/tomato.png"),
      },
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
        id: "apple",
        name: "Apple",
        price: 4.99,
        scale: "1kg",
        image: require("@/assets/images/fruits/apple.png"),
      },
    ],
  },

  meat: {
    name: "Meat",
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
        id: "red_fish",
        name: "Red Fish",
        price: 6.99,
        scale: "1kg",
        image: require("@/assets/images/meat/red_fish.png"),
      },
      {
        id: "sausage",
        name: "Sausage",
        price: 4.99,
        scale: "500g",
        image: require("@/assets/images/meat/sausage.png"),
      },
      {
        id: "shrimps",
        name: "Shrimps",
        price: 8.99,
        scale: "500g",
        image: require("@/assets/images/meat/shrimps.png"),
      },
      {
        id: "tilapia",
        name: "Tilapia",
        price: 5.99,
        scale: "1kg",
        image: require("@/assets/images/meat/tilapia.png"),
      },
    ],
  },

  oil: {
    name: "Oil",
    data: [],
  },

  snacks: {
    name: "Snacks",
    data: [],
  },
};
