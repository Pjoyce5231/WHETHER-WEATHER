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
      grabEvents(userInput);


    });
  };

  submitButton();

  function grabEvents(cityEvent) {
    var queryURL1 = "https://app.ticketmaster.com/discovery/v2/events.json?city=" + cityEvent + "&startDateTime=2018-07-09T01:00:00Z&endDateTime=2018-07-15T01:00:00Z&apikey=DUZG0wZZTxPGg5l7FOQEp6cBtgvkAlkR";
    $.ajax({
        url: queryURL1,
        method: "GET"
      })

      .then(function (data) {
        // console.log( queryURL1 )
        console.log(data);
        
        for ( var i = 0; i < data._embedded.events.length; i++ ) {

          var event = data._embedded.events[i];

          var eventRow = $("<tr>");
          var dateTd = $("<td>");
          var timeTd = $("<td>");
          var nameTd = $("<td>");
          var venueTd = $("<td>");


          dateTd.text(event.dates.start.localDate);
          timeTd.text(event.dates.start.dateTime)
          nameTd.text(event.name);
          venueTd.text(event._embedded.venues[0].name);

          eventRow.append( dateTd, timeTd, nameTd, venueTd );

          $("#eventsTableBody").append(eventRow);

        }

      })




  };



  function grabWeather(cityName) {
    var APIKey = "420abb5e06629c9bad292e81f7b5df9c";

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&mode=json&appid=420abb5e06629c9bad292e81f7b5df9c"
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // We store all of the retrieved data inside of an object called "response"
      .then(function (response) {

         console.log(queryURL);
        console.log(response);

        

   
      });


  };

});

            // hard code for events
//  // // Transfer content to HTML
        // $(".cityEvent").text("City: " + data._embedded.events[key]._embedded.venues[key].city.name)

        // $(".displayDate").text("Date: " + data._embedded.events[0].dates.start.localDate);
        // $(".displayVenue").text("Venue: " + data._embedded.events[0]._embedded.venues[0].name);


        // //  // Log the data in the console as well
        // console.log("City: " + data._embedded.events[0]._embedded.venues[0].city.name);
        // console.log("Event: " + data._embedded.events[0].name);
        // console.log("Date: " + data._embedded.events[0].dates.start.localDate);

        // hard code for the weather

     // // Transfer content to HTML
        // $(".date").text("Date: " + response.list[0].dt_txt);
        // $(".city").text("City: " + response.city.name);
        // $(".wind").text("Wind Speed: " + response.list[0].wind.speed);
        // $(".humidity").text("Humidity: " + response.list[0].main.humidity);
        // $(".tempmax").text("Max Temperature (F) " + response.list[0].main.temp);

        // // logging data in console
        // console.log("Wind Speed: " + response.wind.speed);
        // console.log("Humidity: " + response.list[0].main.humidity);
        // console.log("Temperature (F): " + response.main.temp);