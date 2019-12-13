'use strict';

const Store = require('./store.js');
const utils = require('./util.js');

Store.stores = [];

const pike = new Store('Pike Place', 5, 10, 2.5);

console.log(pike);

console.log(utils);
console.log(utils.randomNumberBetween(10,12));
