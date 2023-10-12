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


// object destructing

const { name, openingHours, categories} =restaurant;
console.log(name,openingHours,categories);

// object destructing and giving different name to the values
const { name: restaurantName, openingHours: restaurantOpeningHours} = restaurant;

console.log(restaurantName,restaurantOpeningHours);

// what if we are not sure about the properties , in that case, we can assign a default value first,

// const { menu:[] ,name: restaurantName, openingHours: restaurantOpeningHours} = restaurant;

let a = 111;
let b =999;
// to assign it to variables
const obj = {a: 23,b: 7,c:  14};
(  {a,b} = obj);  // updates the values as values extracted from the map
console.log(a,b);

const {
  fri: {open: o, close: c},
} = openingHours

console.log(o,c)

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];

add(...x);  // passing it as add(x) does not work as expected