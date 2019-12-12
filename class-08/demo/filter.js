'use strict';

const arr = [1,2,3,4,5];

// callback has an expected ouput of true or false
arr.filter((val, index, arr) => {
  return val % 2;
}); /*?*/
arr;
