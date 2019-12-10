let __API_URL__;
let GEOCODE_API_KEY;

function setEventListeners() {
  $('#url-form').on('submit', function (event) {
    event.preventDefault();
    __API_URL__ = $('#back-end-url').val();
    $('#url-form').addClass('hide');
    manageForms();
  });

  $('#geocode-form').on('submit', function (event) {
    event.preventDefault();
    GEOCODE_API_KEY = $('#api-key').val();
    $('#geocode-form').addClass('hide');
    manageForms();
  });

}

function manageForms() {
  let urlState = $('#url-form').hasClass('hide');
  let keyState = $('#geocode-form').hasClass('hide');

  if (urlState && keyState) { $('#search-form').removeClass('hide'); }
}

setEventListeners();
