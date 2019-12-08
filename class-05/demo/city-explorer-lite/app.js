'use strict';

// constructor to pass the data through

// render the data
// method on the object
// get the data

//shape the data, pass it through the constructor
// put the data where the user can see it

console.log({
  'data': [
    {
      'time': 1567792089082,
      'summary': 'Foggy in the morning.'
    },
    {
      'time': 1567672088082,
      'summary': 'Partly cloudy until afternoon.'
    },
    {
      'time': 1567572088082,
      'summary': 'Partly cloudy throughout the day.'
    },
    {
      'time': 1567472088082,
      'summary': 'Mostly cloudy throughout the day.'
    },
    {
      'time': 1567372088082,
      'summary': 'Light rain in the evening.'
    },
    {
      'time': 1567272088082,
      'summary': 'Rain in the morning and overnight.'
    },
    {
      'time': 1567172088082,
      'summary': 'Light rain in the morning.'
    },
    {
      'time': 1567072088082,
      'summary': 'Mostly cloudy until evening.'
    }
  ]
});

const forecastTemplate = Handlebars.compile($('#forecastTemplate').html());

function Forecast (time, summary){
  this.time = new Date(time);
  this.summary = summary;
}

Forecast.prototype.render = function(){
  // put things on the screen
  const html = forecastTemplate(this);
  // console.log(html);
  $('#weather-container').append(html);

};

$.get('https://codefellows.github.io/code-301-guide/curriculum/class-05/demo/city-explorer-lite/city-weather-data.json').then( response => {
  // response.forEach(a => b);
  console.log(response);
  const myArray = response.data;
  // myArray.forEach;

  // response.data.forEach((val) => { these lines are identical
  myArray.forEach((val) => {
    new Forecast(val.time, val.summary).render();
  });
});











