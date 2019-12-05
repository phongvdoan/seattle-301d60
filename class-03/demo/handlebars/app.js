'use strict';

// first i need the data, it exists somewhere as an array
//done neighborhoodDataSet
// define a constructor that has the properties
// done
/*
  {
    name:        'Fremont',
    city:        'Seattle',
    population:  '23,566',
    founded:     '1820',
    body:        '<p>This is example text to show you how <strong>HTML</strong> can be escaped using <em>Handlebars</em>.</p>'
  },
  */
// define a prototype method that renders it to the page
/*
  select something for cloning
  modifying the old properties into the new ones
  put it on the page
    finding a place for it on the page and appending it

*/
// iterate through my objects and call the render method
// self-explanatory

// take in one object as parameter


// global vars
const neighborhoods = [];

const myTemplate = Handlebars.compile($('#neighborhood-template').html());
const dogTemplate = Handlebars.compile($('#dog-template').html());

function Neighborhood (neighborhoodIshObject){
  this.name = neighborhoodIshObject.name;
  this.city = neighborhoodIshObject.city;
  this.population = neighborhoodIshObject.population;
  this.founded = neighborhoodIshObject.founded;
  this.body = neighborhoodIshObject.body;
}

Neighborhood.prototype.renderWithJquery = function(){
  const clone = $('#neighborhood-template').clone();
  clone.find('h2').text(this.name);
  clone.find('h3').text(this.city);

  const descriptionString = `${this.name} was founded on ${this.founded} and has a population of ${this.population}`;
  clone.find('p:nth-child(3)').text(descriptionString);

  console.log(clone);
  $('#neighborhoods').append(clone);

};

Neighborhood.prototype.renderWithHandlebars = function(){
  const myHtml = myTemplate(this);
  console.log(myHtml);
  $('#neighborhoods').append(myHtml);
};

neighborhoodDataSet.forEach(neighborhoodObj => {
  neighborhoods.push(new Neighborhood(neighborhoodObj));
});

neighborhoods.forEach(neighborhood => {
  neighborhood.renderWithHandlebars();
});


// dogs

function Dog(){
  this.name = 'fido';
  this.loves = 'you';
  this.age = Math.random()*10000;
}

Dog.prototype.render = function(){
  $('#dogs').append(dogTemplate(this));
};

const doggies = [new Dog(), new Dog(), new Dog()];

doggies.forEach(dog => {
  dog.render();
});


