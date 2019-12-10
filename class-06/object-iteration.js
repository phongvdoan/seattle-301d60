'use strict';

// array iterations: loops and forEach (built in prototype method of arrays)

// Objects can be iterated over too

const nichsFam = {
  bestPerson: 'nicholas',
  bestPersonsPartner: 'joy',
  daughterOne: 'Ginger',
  olderDaughter: 'Snowdrop'
  // brothers: ['aaron', 'jason']
};

const nums = [99, 107, 132, 222];

// Object.keys
// object.keys is a method on the Object constructor (not a prototype method);
// it takes in an object as its arguments
// returns an array of strings of the keys of the object

const keys = Object.keys(nichsFam);
keys;

for(let i = 0; i < keys.length; i++){
  nichsFam[keys[i]]/*?*/;
}

nichsFam['bestPerson']/*? */;

// Object.values
// method on the Object constructor
// argument is an object
// returns an array of the values stored in the keys;

const values = Object.values(nichsFam);
values;

values.forEach(value => {
  console.log(value);
});

// Object.entries
// returns an array with the key value pairs of the object inside of it

const entries = Object.entries(nichsFam);
entries;


for(let i in nums){
  console.log(i);
}

// for in sets the declared variable equal to the keys of the object
for(let i in nichsFam){
  console.log(i);
}

for(let thing of nums){
  console.log(thing);
}

const treats = {
  iceCream : ['honey lavendar', 'chocolate fudge', 'double full vanilla', 'papas'],
  cookies: ['oreo', 'sandies', 'salmon', 'snickerdoodle'],
  chips: true,
  marshmallows: 99,
  skittles: {regular: ['red', 'yellow', 'green'], sour: ['blue', 'purple', 'green'], berry: ['berry']}
};

for(let treat in treats){
  treats[treat];
  if(typeof treats[treat] === 'object'){
    Object.keys(treats[treat]).forEach(key => {
      console.log(treats[treat][key]);
    });
  }
}
