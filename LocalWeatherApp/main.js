$(document).ready(function(){

  var latitude;
  var longitude;
  var celsius;
  var fahrenheit;
  var tempStatus = true;

// Get geolocation of the user
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      getLocalWeather(latitude, longitude);
    });
  } else {
    console.log("Geolocation not available.");
  }

// request data from Weather API and apply it to the DOM
  function getLocalWeather(lat, lon) {

    $.ajax({
      url: "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" +  lon,
      success: function(data) {
        $('#cityCountry').text(data.name + ", " + data.sys.country);
        $('#temp').text(data.main.temp + '°C');
        $('.weatherBox').html('<p><strong>Weather:</strong></p><p id="weather"></p>');
        $('#weather').text(data.weather[0].description);
        $('.windBox').html('<p><strong>Wind:</strong></p><p id="wind"></p>');
        $('#wind').text(data.wind.speed + ' m/s');
        $('.humidBox').html('<p><strong>Humidity:</strong></p><p id="humidity"></p>')
        $('#humidity').text(data.main.humidity + "%");
        celsius = (data.main.temp).toFixed(1);
        fahrenheit = (celsius * 9 / 5 + 32).toFixed(1);
        var weather = data.weather[0].id;
        // considering the id for weather it gets changes animated icon and background image of header
        if (weather >= 200 && weather <= 232) {
          $('#weatherIcon').html('<div class="icon thunder-storm"><div class="cloud"></div><div class="lightning"><div class="bolt"></div><div class="bolt"></div></div></div>');
          $('#banner').addClass('stormDay');
        } else if (weather >= 300 && weather <= 331) {
          $('#weatherIcon').html('<div class="icon sun-shower"><div class="cloud"></div><div class="sun"><div class="rays"></div></div><div class="rain"></div></div>');
          $('#banner').addClass('rainSunDay');
        } else if (weather >= 500 && weather <= 531) {
          $('#weatherIcon').html('<div class="icon rainy"><div class="cloud"></div><div class="rain"></div></div>');
          $('#banner').addClass('rainyDay');
        } else if (weather >= 600 && weather <= 622) {
          $('#weatherIcon').html('<div class="icon flurries"><div class="cloud"></div><div class="snow"><div class="flake"></div><div class="flake"></div></div></div>');
          $('#banner').addClass('snowing');
        } else if (weather === 800) {
          $('#weatherIcon').html('<div class="icon sunny"><div class="sun"><div class="rays"></div></div></div>');
          $('#banner').addClass('sunnyDay');
        } else if (weather >= 700 && weather <= 781) {
          $('#weatherIcon').html('<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>');
          $('#banner').addClass('cloudyDay');
        } else if (weather >= 801 && weather <= 804) {
          $('#weatherIcon').html('<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>');
          $('#banner').addClass('cloudyDay');
        }
      }
    });
  }

// click button to change from Celsius to Fahrenheit or F to C
  $('#tempButton').on('click', function() {
    if (tempStatus) {
      $('#tempButton').text("Show in Celsius");
      $('#temp').text(fahrenheit+'°F');
      tempStatus = false;
    } else {
      $('#tempButton').text("Show in Fahrenheit");
      $('#temp').text(celsius+'°C');
      tempStatus = true;
    }
  });

});
