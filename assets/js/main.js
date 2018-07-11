$(document).ready(function () {


  // submit button

  function submitButton() {

    $(".btn").on("click", function () {
      var userInput = $("#cityState").val().trim();
      // console.log("Ive been clicked!")
      console.log(userInput);
      grabEvents(userInput);


    });
  };

  submitButton();

  function grabEvents(cityEvent) {
    var queryURL1 = "https://app.ticketmaster.com/discovery/v2/events.json?city=" + cityEvent + "&startDateTime=2018-07-11T01:00:00Z&endDateTime=2018-07-17T01:00:00Z&apikey=DUZG0wZZTxPGg5l7FOQEp6cBtgvkAlkR";
    $.ajax({
        url: queryURL1,
        method: "GET"
      })

      .then(function (data) {
        // console.log( queryURL1 )
        console.log(data);

        var APIKey = "420abb5e06629c9bad292e81f7b5df9c";

        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityEvent + "&mode=json&units=imperial&appid=420abb5e06629c9bad292e81f7b5df9c"
        $.ajax({
            url: queryURL,
            method: "GET"
          })
          // We store all of the retrieved data inside of an object called "response"
          .then(function (response) {

            console.log(queryURL);
            console.log(response);

            for (var i = 0; i < data._embedded.events.length; i++) {

              var event = data._embedded.events[i];

              var eventRow = $("<tr>");
              var dateTd = $("<td>");
              var timeTd = $("<td>");
              var nameTd = $("<td>");
              var venueTd = $("<td>");


              dateTd.text(event.dates.start.localDate);
              var eventTime = moment(event.dates.start.localDate + "T" + event.dates.start.localTime);
              timeTd.text(eventTime.format('LT'));
              nameTd.text(event.name);
              venueTd.text(event._embedded.venues[0].name);

              eventRow.append(dateTd, timeTd, nameTd, venueTd);

              $("#eventsTableBody").append(eventRow);

              // converted date stamp to unix 
console.log( event.name);
              var StartTime = eventTime.unix();
              for (var j = 0; j < response.list.length; j++) {
                var weather = response.list[i].dt;
                var weatherTimePlus3 = weather + 10800000;
                

console.log( StartTime, weather, weatherTimePlus3 );
console.log( StartTime >= weather && StartTime < weatherTimePlus3 );

                if (StartTime >= weather && StartTime < weatherTimePlus3) {
                  var weatherTd = $("<td>");
                 
                  weatherTd.text(response.list[j].weather["0"].description);
                 
                  eventRow.append(weatherTd);
                  $("#eventsTableBody").append(eventRow);
                  j = 0;
                  break;
                  
                
                }
              }

            }

          })

      });

  };

});