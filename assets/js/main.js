// function eventInfo({
$(document).ready(function(){

var val = "Atlanta"

var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=DUZG0wZZTxPGg5l7FOQEp6cBtgvkAlkR";


function grabEvents() {


  $.ajax({
    url: queryURL,
    method: "GET"
  })

  .then(function(response) {
    console.log(response);
  })

};

grabEvents();




// submit button

// function submit(){

// $(".btn").on("click", function () {
//   // console.log("i have been clicked")
//   grabEvents()
//   console.log(response)
// });
// }


// });


  // $.ajax()({
  //     url: 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=DUZG0wZZTxPGg5l7FOQEp6cBtgvkAlkR',
  //     method: 'GET'


  //   })

  //   .done(function (data) {
  //     console.log("Data: ", data);
      
  //     return data;

  //   })
  //   .fail(function (error) {
  //     console.log("error", error);
  //   });






// weather
//  $.ajax({
//    url: "",
//    method: "GET"
//  }).then(function (response) {
//    console.log(response);
//  });
});