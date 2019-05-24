import Config from '../../config.js';




// all imports at top, import config to access api key



// create an instance of the Config class
let config = new Config();




// render the navbar into the header
$.get('../../components/header.html', function(res) {
  $('#nav').html(res);
})

/*The above configuration steps have been completed for you.
Your only task before creating the functionality for each section below is to add 
your API key from http://openweathermap.org*/


// global variables






// TODO: create a function that logs the city entered in the form
$("#button-sub").click(
  function searchCity() {
    let city = $('#search-city').val()
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${config.getKey()}&units=imperial`;
    $.get(url, function(result){
      console.log(result.main);
      console.log(result.weather[0].main) // Forecast
      console.log(result.main.temp);
      console.log(result.main.temp_max);
      console.log(result.main.temp_min);
      console.log(result.main.humidity);
      console.log(result.main.pressure);

      let currentTemp = result.main.temp;
      let forecast = result.weather[0].main;
      let high = result.main.temp_max;
      let low = result.main.temp_min;
      let humidity = result.main.humidity;

      $('#current-location').append(city);
      $('#current-temp').append(currentTemp);
      $('#high').append(high);
      $('#low').append(low);
      $('#forecast').append(forecast);
      $('#humidity').append(humidity);
      $('input').val('');
      $('input').empty();
    });
})
  


$(document).keypress(function(e){
    if(e.which == 13) {
      // alert("Enter pressed");
      let city = $('#search-city').val();
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${config.getKey()}&units=imperial`;
      $.get(url, function(result){
        console.log(result.main);
        console.log(result.weather[0].main) // Forecast
        console.log(result.main.temp);
        console.log(result.main.temp_max);
        console.log(result.main.temp_min);
        console.log(result.main.humidity);
        console.log(result.main.pressure);

        let currentTemp = result.main.temp;
        let forecast = result.weather[0].main;
        let high = result.main.temp_max;
        let low = result.main.temp_min;
        let humidity = result.main.humidity;

        $('#current-location').append(city);
        $('#current-temp').append(currentTemp);
        $('#high').append(high);
        $('#low').append(low);
        $('#forecast').append(forecast);
        $('#humidity').append(humidity);
        $('input').val('');
        $('input').empty();
    });
    e.preventDefault() // prevents from refreshing
  }
})

  // TODO: add AJAX call to weather API and display info

  // Callback functions for the API call
 




//TODO: check to see if the submit button is pressed, if it is, stop the event from refreshing the page, and call searchCity()



// TODO: make search information not appear until they submit a city
// HINT: You will need to use CSS and JQuery to do this