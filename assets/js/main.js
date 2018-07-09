// api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

// function eventInfo({


$(document).ready(function () {

  
  // submit button

  function submitButton() {

    $(".btn").on("click", function () {
      var userInput = $("#cityState").val().trim();
      // console.log("Ive been clicked!")
      console.log(userInput);
      grabWeather(userInput);
      grabEvents();
      
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

 

  function grabWeather( cityName ) {
    var APIKey = "420abb5e06629c9bad292e81f7b5df9c";
   
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&mode=json&appid=420abb5e06629c9bad292e81f7b5df9c"
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
        $(".date").text("Date: " + response.list[0].dt_txt);
        $(".city").text("City: " + response.city.name);
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.list[0].main.humidity);
        $(".tempmax").text("Max Temperature (F) " + response.main.temp);

        // logging data in console
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.list["0"].main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });


  };

});


  
