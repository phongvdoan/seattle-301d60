'use strict';

// Array.prototype.reduce
// takes in a single argument - a callback function
const nums = [5,4,3,2,1];

nums.reduce((previous, current) => {
  return previous + current;
});/*?*/

const multiply = (a, b) => a * b;

let a = 5;
let b = 4;
a = multiply(a, b); /*?*/
b = 3;
a = multiply(a, b);/*?*/
b = 2;
a = multiply(a, b);/*?*/
b = 1;
a = multiply(a, b);/*?*/

['I ', 'Wish ', 'I ', 'Was ', 'A ', 'Sentence'].reduce((previous, current) => {
  return previous + current;
}) /*?*/;

// to take the nums and add all the evens together, and all the odds together

function oddAndEven (accumulator, current){
  if(current % 2){
    accumulator.odd += current;
  } else {
    accumulator.even += current;
  }
  return accumulator;
}
// const nums = [{odd: 0, even : 0}, 5, 4, 3, 2, 1];
nums.reduce(oddAndEven, {odd: 0, even : 0});/*?*/

let accumulator = { odd: 0, even: 0 };/*?*/
let current = nums[0];
accumulator = oddAndEven(accumulator, current);/*?*/
current = nums[1];/*?*/
accumulator = oddAndEven(accumulator, current);/*?*/
current = nums[2];/*?*/
accumulator = oddAndEven(accumulator, current);/*?*/
current = nums[3];/*?*/
accumulator = oddAndEven(accumulator, current);/*?*/
current = nums[4];/*?*/
accumulator = oddAndEven(accumulator, current);/*?*/


const nums2 = [5,4,3,2,1];

nums2.reduce(multiply);/*?*/

const multiply2 = (a, b) => a * b;

let a2 = 5;
let b2 = 4;
a2 = multiply2(a2, b2); /*?*/
b2 = 3;
a2 = multiply2(a2, b2);/*?*/
b2 = 2;
a2 = multiply2(a2, b2);/*?*/
b2 = 1;
a2 = multiply2(a2, b2);/*?*/

// const nums2 = [10, 5,4,3,2,1];

nums2.reduce(multiply, 10);/*?*/
multiply(10, 5);


const keys = ['name', 'age', 'profession', 'isCool'];

keys.reduce(combine, {});/*?*/

function combine(starting, next){
  starting[next] = 'sample string';
  return starting;
}

nums.reduce((accumulator, current) => {
  if(accumulator < 10) return accumulator + current;

  return 0;
});/*?*/

