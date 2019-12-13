'use strict';

const Person = function(name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.getName = function() { return this.name; };

let person = new Person('Fred', 51);

function upperLowerUpperCase(string){
  return string.toUpperCase().toLowerCase().toUpperCase();
}

function sayName(person) {
  const name = person.getName();

  return person.age > 50 ? upperLowerUpperCase(name) : name.toLowerCase();
}

console.log(sayName(person));
