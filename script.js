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

