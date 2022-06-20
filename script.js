'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`)
  }
};

// JS SPREAD OPERATOR

// What if you have an array, and what to add more items to the front
// Here is the old way of doing it

const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

// THE NEW WAY OF DOING IT --
// ... means write them all out

//note that all elements are taken out of the array
const newArr = [1, 2, ...arr];
console.log(newArr);

// LOOK HOW SPREAD OPERATOR TAKES INDIVIDUAL ELEMENTS OUT OF ARRAY
console.log(...newArr);

// HOW TO PRINT THE MAINMENU WITH GONOCCI ADDED AT THE END
// remember we are creating a brand new array here

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// YOU CAN ONLY USE ... WHERE YOU WOULD NORMALLY HAVE VALUES SEPARATED BY COMMAS

// HOW TO CREATE SHALLOW COPIES OF ARRAYS

// Copy
const mainMenuCopy =[...restaurant.mainMenu];

// HOW TO JOIN 2 ARRAY

const theNewMenu = [...restaurant.mainMenu, ...restaurant.starterMenu]

// ES6 SPREAD OPERATOR WORKS ON ALL ITTERABLES
// ITTERABLES - ALL ARRAYS, STRINGS, MAPS, OR SETS -- BUT NOT OBJECTS

// It works because this is a place where you would normally have values separated by commas
const str = 'Jonas';
const letters = [...str, '', 'S.']
// it spells out Jonas letter by letter
console.log(letters);

// SPREAD OPERATOR ONLY WORKS WHEN BUILDING AN ARRAY OR WHEN PASSING VALUES INTO A FUNCTION
// THEY DO NOT WORK IN TEMPLATE LITERALS

// HOW TO USE SPREAD OPERATOR IN FUNCTIONS --- made orderPasta function

// const ingredients =
//     [prompt("Let's make pasta! Ingredient 1?"),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3?'),
//     ]
//
// console.log(ingredients)

// THIS IS ES6 - 2015

// the old way
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// the new way (ES6)
restaurant.orderPasta(...ingredients)

// ES9 OR ES2018 CAN DO SPREAD OPERATOR ON OBJECTS

const newRestaurant = {foundedIn: 1998 ,...restaurant, founder: 'Guiseppe'}
console.log(newRestaurant)

// YOU CAN MAKE EASY COPIES OF THINGS and they are real SHADOW COPIES refering to a different SLOT in
// in the HEAP MEMORY

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma'

