'use strict';

const randomNumberBetween = require('./random');

const hours = ['7am', '8am', '9am', '10am'];


const Store = function (location, min, max, avg) {
  this.location = location;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerCustomer = avg;
  this.projections = {};
  this.projectSales();
  Store.stores.push(this);
};

Store.prototype.projectSales = function () {
  hours.forEach((hour) => {
    this.projections[hour] = randomNumberBetween(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiesPerCustomer;
  });
};

module.exports = Store;
