// Pass by Value, Pass by Reference
'use strict';

// pass by value
// in js when I assign a primitive to a variable it makes a copy / new primitive
// our primitives are numbers, strings, booleans, undefined, null
let name = 'nicholas';

let santa = name;
santa += 'is secretly santa';

santa;
name;

// pass by reference
// we pass a reference to where the original thing lives in memory
let reindeer = ['dasher', 'dancer', 'prancer', 'vixen'];
let otherReindeer = reindeer;

otherReindeer.push('redNose');

otherReindeer;
reindeer;

let rudolf = {
  name: 'redNose',
  nose: 'red',
  sad: true
};

let santasReindeer = [rudolf];
let sadReindeer = rudolf;

rudolf.name = 'rudolf';
sadReindeer.sad = false;
santasReindeer[0].awesome = 'reallly really';

rudolf;
sadReindeer;
santasReindeer;

let vixen = {...rudolf};
vixen.name = 'vixen';
vixen;
rudolf;

let obj = {};
obj.name = rudolf.name;
obj.sad = rudolf.sad;

let arr1 = [1,2,3];
let arr2 = [...arr1];
let arr3 = arr1.slice(0);
arr1.push(5);
arr1;
arr2;
arr3;
