/*

a place to store our creature objects from json
    so we can make them into Creature objects
    put them in an array

render our Creature to the page
  display images
  // we will assume the details are handled by whoever designs the html
  Build a constructor
  pass the data in and instantiate objects
  a way to get data from the other file

 link the js to the html (and the css)
 constructor for the data, Creature
 link in jquery, handlebars


  a way to handle switching pages
    // do the least work possible for the front end
    // leave things on the page that i create instead of deleting and rerendering them
    // put the first page on the page with a data attribute of page-1, etc
    // hide and show those two classes
    // what happens when i visit a page twice
    // handle not duplicating the content on the page
    // only draw it once

  a way to sort the images
    // DELETE THEM and rerender them in order

*/

'use strict';

const creatures = [];

function getThings(thePage){

  $.get(thePage, 'json').then(data =>instantiateCreaturesAndRenderThem(data, thePage));
}

getThings('page-1.json');

function instantiateCreaturesAndRenderThem(creaturesArray, page){
  creaturesArray.forEach(creatureObj => {
    const c = new Creature(creatureObj, page);
    creatures.push(c);
    c.render();
  });
}


function Creature(cObj, pageNumber){
  this.image_url = cObj.image_url;
  this.description = cObj.description;
  this.keyword = cObj.keyword;
  this.horns = cObj.horns;
  this.page = pageNumber;
}

Creature.prototype.render = function(){
  // console.log($('#creature-template').html());
  // console.log(typeof $('#creature-template').html());

  const creatureTemplate = Handlebars.compile($('#creature-template').html());
  const newHtml = creatureTemplate(this);
  // console.log(this);
  $('main').append(newHtml);
  // console.log(newHtml);



};


/*
  a way to handle switching pages
    // do the least work possible for the front end
    // leave things on the page that i create instead of deleting and rerendering them
    // put the first page on the page with a data attribute of page-1, etc
    // hide and show those two classes
    // what happens when i visit a page twice
    // handle not duplicating the content on the page
    // only draw it once
*/

let pageWeAreOn = 'page-1.json';

$( '#page2' ).on('click', function(){
  $('div').hide();
  // if the things are on the page already,
  //  dont get new ones
  // show the old ones
  // if($('div (that is a page 1 div'))

  if(pageWeAreOn === 'page-1.json'){

    const divs = $('div[data-page="page-2.json"]');
    console.log(divs);

    if(!divs.length){
      getThings('page-2.json');
    }
    divs.show();
    pageWeAreOn = 'page-2.json';
  } else {
    const divs = $('div[data-page="page-1.json"]');
    console.log(divs);

    if (!divs.length) {
      getThings('page-1.json');
    }
    divs.show();
    pageWeAreOn = 'page-1.json';

  }



});

$('#sort').on('click', function(){
  creatures.sort(function(a,b) {
    // if a's horn count is bigger
    if(a.horns > b.horns) return 1;
    // or smaller
    if(b.horns > a.horns) return -1;
    // or same
    return 0;
  });

  $('div').remove();
  creatures.forEach(creature => creature.render());
  $('div').hide();
  $(`div[data-page="${pageWeAreOn}"]`).show();
});

