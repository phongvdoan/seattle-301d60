'use strict';

const express = require('express');
let ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (request, response) =>{
  //ejs's render method takes in a string and an object as its args
  // the object has keys which will be the mad lib fill ins for the rendering (placeholders)
  // if I want to access 'rocky road' from the ejs, I can type <%= iceCreams[1] %>
  // < !--things that run have no = after the <% -->
  //   < !--things we want to print have an = <%= -->
  response.render('index', {
    iceCreams : ['pistachio', 'rocky road', 'pralines and cream'],
    sauces : [{flavor: 'chocolate'}, {flavor: 'fudge'}, {flavor: 'caramel'}]
  });
});

app.get('/other-page', (req, res) => {
  res.render('payment', {monies: 9999999});
});

app.listen(3000, () => {
  console.log('app is upp');
});



const people = ['geddy', 'neil', 'alex'];
const html = ejs.render('<%= people.join(", "); %>', { people: people });
console.log(html);

