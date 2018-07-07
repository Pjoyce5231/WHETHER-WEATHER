// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

// function eventInfo({


$(document).ready(function () {

  var val = "Atlanta"

  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=DUZG0wZZTxPGg5l7FOQEp6cBtgvkAlkR";
  var queryURL2 = "https://api.darksky.net/forecast/b5b135379552a0ca13982b1d50cd28cf/42.3601,-71.0589"

  function grabEvents() {

    $.ajax({
        url: queryURL,
        method: "GET"
      })

      .then(function (response) {
   
  
      })

  };


  grabEvents();



  // This is our API key
  var APIKey = "420abb5e06629c9bad292e81f7b5df9c";

  // Here we are building the URL we need to query the database
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=Atlanta,Atlanta&units=imperial&appid=" + APIKey;

  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);

      // // Transfer content to HTML
      $(".city").text("City: " + response.name);
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".temp").text("Temperature (F) " + response.main.temp);

      // Log the data in the console as well
      // console.log("Wind Speed: " + response.wind.speed);
      // console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + response.main.temp);
    });




  // submit button

  // function submit(){

  // $(".btn").on("click", function () {
  //   // console.log("i have been clicked")
  //   grabEvents()
  //   console.log(response)
  // });
  // }


  // });

});