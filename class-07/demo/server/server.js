'use strict';

// process.env tells node to look in the Environment for any variables
// I can export environment variables with `export VARNAME=VALUE`
// || is a Short circuit
const PORT = process.env.PORT || 3000;
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');

const app = express();
// dotenv is configuration
require('dotenv').config();

// cors is middleware, we USE middleware
app.use(cors());


// make a route so I can be talked to
// the name of the route is going to be '/puppy' BECAUSE my client says so
app.get('/puppy', (request, response) => {
  // send sends it argument to the front end in the body property
  response.send('Ginger is a puppy');
});

function Yoda (name, url){
  this.name = name;
  this.image_url = url;
}

app.get('/yoda', (request, response) => {
  const y = new Yoda('I\'m yoda', 'https://cnet2.cbsistatic.com/img/WbIDMaD6bPQgqHrwITUe5HBx5lo=/756x567/2019/11/19/2eddb56d-56a3-4569-874e-32cd61180d6a/babyyoda2.jpg');

  response.send(y);
});

app.get('/location', (req, res) => {
  // if i want the data from the front end, check (console.log) req.query

  // if I want to visit google, get an api key and use superagent to visit the google api

  // superagent returns a promise therefore you need to add a .then to send the data back to the front end


  // require does NOT take 1 million years
  // req contains data from the front end
  console.log(req.query.data);

  superagent.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.data}&key=${process.env.GEOCODING_API_KEY}`).then(response => {
    // console.log('body', response.body);

    // response.body === require('geodata.json');
    const firstGeoDataResult = response.body.results[0];
    const geometry = firstGeoDataResult.geometry;
    const location = geometry.location;

    res.send({
      location: {
        'search_query': 'Seattle',
        'formatted_query': 'Seattle, WA, USA',
        'latitude': location.lat,
        'longitude': location.lng
      }
    });

  });


});


app.get('/unicorn', handleUnicornRequest);

app.listen(PORT, () => {
  console.log(`app is up on PORT: ${PORT}`);
});


function handleUnicornRequest(request, response){
  const unicorn = new Unicorn();
  response.send({unicorn: unicorn});
}

function Unicorn(){
  this.legs = 3 + Math.round(Math.random());
  this.magical = true;
  this.children = [{horns : 1}];

}
