'use strict';

// process.env tells node to look in the Environment for any variables
// I can export environment variables with `export VARNAME=VALUE`
// || is a Short circuit
const PORT = process.env.PORT || 3000;
const express = require('express');
const cors = require('cors');

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
  // require does NOT take 1 million years
  const geoData = require('./data/geo.json');
  console.log(geoData);
  const firstGeoDataResult = geoData.results[0];
  console.log(firstGeoDataResult);
  const geometry = firstGeoDataResult.geometry;
  console.log(geometry);
  const location = geometry.location;
  console.log(location);

  res.send({location : {
    'search_query': 'seattle',
    'formatted_query': 'Seattle, WA, USA',
    'latitude': '47.606210',
    'longitude': '-122.332071'
  } });
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
