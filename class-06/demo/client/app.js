'use strict';

$('#yoda').on('click', () => {
  $.get(`${__API_URL__}/yoda`).then(response => {
    // cannot read property image_url of undefined was our error
    console.log(response);
    $('#yodas').append(`
    <img src="${response.image_url}">
    <p>${response.name}</p>
    `);
  });
});


$('#search-form').on('submit', (e) => {
  e.preventDefault();
  $.get(`${__API_URL__}/location`, {question: this.cityname}).then(response => {
    displayMap(response.location);
  });
})
;


function displayMap(location) {
  $('#map').removeClass('hide');

  $('#map').attr('src', `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude}%2c%20${location.longitude}&zoom=13&size=600x300&maptype=roadmap
  &key=${GEOCODE_API_KEY}`);
}

$('#getstuff').on('click', () => {
  $.get(`${__API_URL__}/unicorn`).then(response => {
    if(response.unicorn.legs === 4) console.log('4 legs');
    else console.log('wheres my legs');

    if(response.unicorn.magical === true) console.log('so magical');
    else console.log('so sad');

    if(response.unicorn.children[0].horns === 0){
      console.log('ur moms a horse');
    } else {
      console.log('what a unihorned baby you are');
    }
  });
})
;
