"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get("/fortune", displayFortune);
}

function displayFortune(results) {

    // console.log(results);

    $('#fortune-text').html(results);
}

// var randomFortune = 
$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var testForecast = $.get("/weather.json", forecast);

    console.log(testForecast);

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    // .val returns value in text box

    console.log(url);

    // TODO: request weather with that URL and show the forecast in #weather-info

   }

function forecast(results) {

        results = results[forecast]; 

        $('#weather-info').html(results);
    }


$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


