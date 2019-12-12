'use strict';

//array.prototype.map
// functional programming
// we aim to have no side effects
// single responsibility principle;

// const arr = [1,2,3,4];
// arr.map(function callback(currentValue[, index[, array]]) {
// Return element for new_array
// }[, thisArg])
// place it lives: an existing instance of an array
// input for .map: callback , the thisArg allows us to bing `this` faghhetaboutit
// returns a new array where each element is the return value of the cllback being called on the original value

// [1,2,3,4]
// callback val => val * 2;
// output of map is always a new array
// [2, 4, 6, 8];

const arr = [9, 7, 5, 4, 3];
function callback (val, index, array){
  return val * index * array.length;
}
arr.map(callback);/*?*/
arr;

const names = ['Dayne', 'Silas', 'Crystal'];

function Person(name){
  this.name = name;
  this.age = Math.floor(Math.random() * 999);
}

let people = names.map(val => new Person(val));

people;

const cupcakes = ['chocolate', 'pumpkin', 'carrot', 'red velvet'];

// my callback needs to return something or my array will have a bunch of undefineds in it
const eatHalf = function(value, index, array){
  return value.slice(value.length / 2);
  // return 'got your cupcake';

};

const newArray = [];

for(let i = 0; i < cupcakes.length; i++){
  newArray.push( eatHalf(cupcakes[i], i, cupcakes));
}

newArray;

arr.map(console.log);/*?*/

arr.map(function(val) {
  if(val % 2) {
    return val;
  } else {
    return val +1;
  }
});/*?*/
