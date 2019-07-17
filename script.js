'use strict';

function getDogImage() {
  fetch('https://api.thecatapi.com/v1/images/search?mime_types=gif', {
  "async": true,
  "crossDomain": true,
  "method": "GET",
  "headers": {
    "x-api-key": "298ffa3c-fb62-416e-a1f0-b3c328c05143",
    "User-Agent": "PostmanRuntime/7.15.0",
    "Accept": "*/*",
    "Cache-Control": "no-cache",
    "Postman-Token": "bab147d3-448c-45ac-9965-7276b6cd8e21,f89c8dd2-506e-4b3d-8243-536fa8eac19a",
    "Host": "api.thecatapi.com",
    "accept-encoding": "gzip, deflate",
    "Connection": "keep-alive",
    "cache-control": "no-cache"
  }})
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson[0]);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson[0].url}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  $('.results-img').replaceWith(
    `<img src="${responseJson[0].url}" class="results-img">`
  )
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});