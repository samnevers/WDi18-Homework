var basePeopleURL = "http://api.open-notify.org/astros.json";

// Display Function
var displayPeople = function (data) {
  var numberPeople = data.number;
  var $spacepeople = $("p#space-people");
  $spacepeople.text(numberPeople + " people in space right now!");

};

var getPeopleInformation = function () {
  console.log("Fetching peeps...");

  $.ajax({
    url: basePeopleURL,
    type: "GET",
    dataType: "JSONP",
  }).done(displayPeople);
};


$(document).ready(function () {

  $(".people button").on("click", function () {
    getPeopleInformation();
  });

});
