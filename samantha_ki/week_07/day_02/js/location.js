var baseLocationURL = "http://api.open-notify.org/iss-now.json";

var locationTimer = null;

// Map Function
var displayMap = function (latitude, longitude) {

  var currentLocation = {lat: latitude, lng: longitude};
  // return currentLocation;
  console.log(currentLocation);

  var map = new google.maps.Map(document.getElementById('map'), {
    center: currentLocation,
    zoom: 4
  });

  // Marker
  var marker = new google.maps.Marker({
    position: currentLocation,
    map: map,
    icon: "doge.png"
  });

};


// Display Function
var displayLocation = function ( data ) {

  var longitude = data.iss_position.longitude;
  longitude = parseFloat(longitude);
  console.log(longitude);

  var latitude = data.iss_position.latitude;
  latitude = parseFloat(latitude);
  console.log(latitude);

  var $spaceplace = $("p#space-place");
  $spaceplace.text("Currently located at latitude: " + latitude + " longitude: " + longitude);

  displayMap(latitude, longitude);
};


var getLocationInformation = function () {
  console.log("Fetching Location info...");

  $.ajax({
    url: baseLocationURL,
    type: "GET",
    dataType: "JSONP"
  }).done(displayLocation);

};

$(document).ready(function() {

  getLocationInformation();

  locationTimer = window.setInterval(function () {
    getLocationInformation();
  }, 2000);

});
