// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

// function eventInfo({


$(document).ready(function () {


  // submit button

  function submitButton() {

    $(".btn").on("click", function () {

      console.log("Ive been clicked!")
    });
  };

  submitButton();




  function grabEvents() {
    var queryURL1 = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=DUZG0wZZTxPGg5l7FOQEp6cBtgvkAlkR";
    $.ajax({
        url: queryURL1,
        method: "GET"
      })

      .then(function (data) {
        console.log(data);

        //  // // Transfer content to HTML
        $(".cityEvent").text("City: " + data._embedded.events["0"].dates.timezone);
        $(".displayShow").text("Event: " + data._embedded.events["0"].name);
        $(".displayDate").text("Date: " + data._embedded.events["0"].dates.start.localDate);



        //  // Log the data in the console as well
        console.log("City: " + data._embedded.events["0"].dates.timezone);
        console.log("Event: " + data._embedded.events["0"].name);
        console.log("Date: " + data._embedded.events["0"].dates.start.localDate);


      })

  };

  grabEvents();

  function grabWeather() {
    var APIKey = "420abb5e06629c9bad292e81f7b5df9c";

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=Atlanta,Atlanta&units=imperial&appid=" + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // We store all of the retrieved data inside of an object called "response"
      .then(function (response) {

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
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });


  };

  grabWeather();

  // function displayEvent() {

  
  //     $('.giphy_images').empty();
  //     var data = response.data;
  
  //     for (var i = 0; i < data.length; i++) {
  //         var animated = data[i].images.fixed_height.url;
  //         var still = data[i].images.fixed_height_still.url;
  //         var rating = data[i].rating;
  //         var url = still;
  //         //return images
  
  //         // displaying rating and images
  //         $('.giphy_images').prepend( $("<header>").text("Rating: " + rating).prepend());
  //         $('.giphy_images').prepend(createImage(rating, url, still, animated));
          
          
  
  //     }
  
  // };
  // displayEvent();



});