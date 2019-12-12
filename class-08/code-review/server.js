'use strict';

// dependencies
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');
require('dotenv').config();

// global variables
const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.get('/location', getLocation);

app.get('/weather', getWeather);

app.get('/events', getEvents);

function getLocation(req, res){
  const whatTheUserSearchedFor = req.query.data;

  superagent.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${whatTheUserSearchedFor}&key=${process.env.GEOCODING_API_KEY}`).then(response => {
    // console.log(response.body);


    res.send({ // TODO: make this a constructor later
      'search_query': whatTheUserSearchedFor,
      'formatted_query': response.body.results[0].formatted_address,
      'latitude': response.body.results[0].geometry.location.lat,
      'longitude': response.body.results[0].geometry.location.lng
    });
  });



}

function getWeather(req, res) {
  res.send([
    {
      'forecast': 'Partly cloudy until afternoon.',
      'time': 'Mon Jan 01 2001'
    },
    {
      'forecast': 'Mostly cloudy in the morning.',
      'time': 'Tue Jan 02 2001'
    }

  ]);
}


function getEvents(req, res){
  console.log(req.query);
  // go to eventful, get data and get it to look like this
  superagent.get(`http://api.eventful.com/json/events/search?app_key=kcbDf9m2gZnd2bBR&keywords=football&location=${req.query.data.formatted_query}&date=Future`).then(response => {
    console.log(JSON.parse(response.text).events.event[0]);
    const firstEvent = JSON.parse(response.text).events.event[0];
    const allEvents = JSON.parse(response.text).events.event;

    const allData = allEvents.map(event => {
      return {
        'link': event.url,
        'name': event.title,
        'event_date': event.start_time,
        'summary': event.description
      };
    });
    // console.log(allData);

    res.send(allData);

  });

}

app.listen(PORT, () => console.log(`up on port ${PORT}`));
