$(document).ready(function () {

  function submitButton() {

    $(".btn").on("click", function () {
      var userInput = $("#cityState").val().trim();
      grabEvents(userInput);


    });
  };

  submitButton();

  function grabEvents(city) {

    var currDate = moment();
    var fiveDaysFromNow = moment().add(5, 'days');
    var isoStartDate = "&startDateTime=" + currDate.format()
    var isoEndDate = "&endDateTime=" + fiveDaysFromNow.format()

    var queryURL1 = "https://app.ticketmaster.com/discovery/v2/events.json?city=" + city + isoStartDate + isoEndDate + "&apikey=DUZG0wZZTxPGg5l7FOQEp6cBtgvkAlkR";
    $.ajax({
        url: queryURL1,
        method: "GET"
      })

      .then(function (data) {
        console.log(moment().format("MMDDYYYY"))

        var APIKey = "420abb5e06629c9bad292e81f7b5df9c";
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&mode=json&units=imperial&appid=420abb5e06629c9bad292e81f7b5df9c"
        $.ajax({
            url: queryURL,
            method: "GET"
          })
      
          .then(function (response) {
            $("#eventsTableBody").empty();
            for (var i = 0; i < data._embedded.events.length; i++) {

              var event = data._embedded.events[i];
              var eventTime = moment(event.dates.start.dateTime);
                         
              for (var j = 0; j < response.list.length; j++) {
                var weather = moment(response.list[j].dt * 1000);
                var weatherTimePlus3 = moment(response.list[j].dt * 1000).add(3, "h");

                if (eventTime.unix() >= weather.unix() && eventTime.unix() < weatherTimePlus3.unix()) {              
                  var weatherDescription = response.list[j].weather[0].description;
                  var weatherTemp = response.list[j].main.temp
                  var weatherHumidity = response.list[j].main.humidity
                  
                }
              }
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