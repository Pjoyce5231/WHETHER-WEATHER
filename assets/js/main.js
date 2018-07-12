$(document).ready(function () {


  // submit button

  function submitButton() {

    $(".btn").on("click", function () {
      var userInput = $("#cityState").val().trim();
      // console.log("Ive been clicked!")
      // console.log(userInput);
      grabEvents(userInput);


    });
  };

  submitButton();

  function grabEvents(cityEvent) {
    
    var queryURL1 = "https://app.ticketmaster.com/discovery/v2/events.json?city=" + cityEvent + "&startDateTime=2018-07-12T01:00:00Z&endDateTime=2018-07-18T01:00:00Z&apikey=DUZG0wZZTxPGg5l7FOQEp6cBtgvkAlkR";
    $.ajax({
        url: queryURL1,
        method: "GET"
      })

      .then(function (data) {
        // console.log( queryURL1 )
        // console.log(data);

        var APIKey = "420abb5e06629c9bad292e81f7b5df9c";
        // modify the following queryURL to include the city AND date
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityEvent + "&mode=json&units=imperial&appid=420abb5e06629c9bad292e81f7b5df9c"
        $.ajax({
            url: queryURL,
            method: "GET"
          })
          // We store all of the retrieved data inside of an object called "response"
          .then(function (response) {

            // console.log(queryURL);
            console.log(response);

            $("#eventsTableBody").empty();
            for (var i = 0; i < data._embedded.events.length; i++) {
             
              var event = data._embedded.events[i];

              var eventTime = moment(event.dates.start.localDate + "T" + event.dates.start.localTime);
             
              console.log( response.list);  
              var StartTime = eventTime.unix();
              var weather = response.list[i].dt;
              var weatherTimePlus3 = weather + 10800000;
              // you will use the below code for when you have the conditions by 3 hour intervals for the queried dayy
              // var weatherDescription;
              // if (StartTime >= weather && StartTime < weatherTimePlus3) {
                var weatherDescription = response.list[i].weather[0].description;
                var weatherTemp =  response.list[i].main.temp
                var weatherHumidity = response.list[i].main.humidity

                // var dateConverter = moment([event.dates.start.localDate]);
                // console.log(dateConverter)
              // }
              $("#eventsTableBody").append(`
                <tr>
                  <td>${event.dates.start.localDate}</td>
                  <td>${eventTime.format('LT')}</td>
                  <td>${event.name}</td>
                  <td>${event._embedded.venues[0].name}</td>
                  <td>${weatherDescription}</td>
                  <td>${weatherTemp}</td>
                  <td>${weatherHumidity}</td>
                </tr>
              `);
              
            }

          })

      });

  };

});