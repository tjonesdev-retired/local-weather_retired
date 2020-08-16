var fahrenheit;
var celsius;

function localWeather() {
  // Get Weather Underground API (weather)
  $.getJSON(
    "http://api.wunderground.com/api/c24bd0b9d29075cd/conditions/q/autoip.json",
    function(data) {
      // Pull variables
      var city = data.current_observation.display_location.city;
      var state = data.current_observation.display_location.state;
      var country = data.current_observation.display_location.country;
      fahrenheit = Math.round(data.current_observation.temp_f);
      celsius = Math.round(data.current_observation.temp_c);
      var description = data.current_observation.weather;

      // Default to F/C depending on country
      if (country === "US") {
        $("#location span").html(city + ", " + state);
        $("#tempNum").html(fahrenheit + "&deg;");
        $("#tempF").addClass("selected");
      } else {
        $("#location span").html(city + ", " + country);
        $("#tempNum").html(celsius + "&deg;");
        $("#tempC").addClass("selected");
      }

      // Set icon & background based on description
      $("#description span").html(description);
      switch (description) {
        // RAIN
        case "Drizzle":
        case "Light Drizzle":
        case "Heavy Drizzle":
        case "Rain":
        case "Light Rain":
        case "Heavy Rain":
        case "Mist":
        case "Light Mist":
        case "Heavy Mist":
        case "Spray":
        case "Light Spray":
        case "Heavy Spray":
        case "Rain Mist":
        case "Light Rain Mist":
        case "Heavy Rain Mist":
        case "Rain Showers":
        case "Light Rain Showers":
        case "Heavy Rain Showers":
          $("i").addClass("wi wi-sprinkle");
          $("body").css(
            "background-image",
            "url(https://images.pexels.com/photos/27472/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb)"
          );
          break;
        // SNOW
        case "Snow":
        case "Light Snow":
        case "Heavy Snow":
        case "Snow Grains":
        case "Light Snow Grains":
        case "Heavy Snow Grains":
        case "Low Drifting Snow":
        case "Light Low Drifting Snow":
        case "Heavy Low Drifting Snow":
        case "Blowing Snow":
        case "Light Blowing Snow":
        case "Heavy Blowing Snow":
        case "Snow Showers":
        case "Light Snow Showers":
        case "Heavy Snow Showers":
        case "Snow Blowing Snow Mist":
        case "Light Snow Blowing Snow Mist":
        case "Heavy Snow Blowing Snow Mist":
          $("i").addClass("wi wi-snow");
          $("body").css(
            "background-image",
            "url(https://images.pexels.com/photos/30276/pexels-photo.jpg?w=1260&h=750&auto=compress&cs=tinysrgb)"
          );
          break;
        // HAIL
        case "Ice Crystals":
        case "Light Ice Crystals":
        case "Heavy Ice Crystals":
        case "Ice Pellets":
        case "Light Ice Pellets":
        case "Heavy Ice Pellets":
        case "Hail":
        case "Light Hail":
        case "Heavy Hail":
        case "Ice Pellet Showers":
        case "Light Ice Pellet Showers":
        case "Heavy Ice Pellet Showers":
        case "Hail Showers":
        case "Light Hail Showers":
        case "Heavy Hail Showers":
        case "Small Hail Showers":
        case "Light Small Hail Showers":
        case "Heavy Small Hail Showers":
        case "Freezing Drizzle":
        case "Light Freezing Drizzle":
        case "Heavy Freezing Drizzle":
        case "Freezing Rain":
        case "Light Freezing Rain":
        case "Heavy Freezing Rain":
        case "Small Hail":
          $("i").addClass("wi wi-hail");
          $("body").css(
            "background-image",
            "url(https://images.pexels.com/photos/230461/pexels-photo-230461.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)"
          );
          break;
        // FOG
        case "Fog":
        case "Light Fog":
        case "Heavy Fog":
        case "Fog Patches":
        case "Light Fog Patches":
        case "Heavy Fog Patches":
        case "Freezing Fog":
        case "Light Freezing Fog":
        case "Heavy Freezing Fog":
        case "Patches of Fog":
        case "Shallow Fog":
        case "Partial Fog":
          $("i").addClass("wi wi-fog");
          $("body").css(
            "background-image",
            "url(https://images.pexels.com/photos/337540/pexels-photo-337540.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"
          );
          break;
        // THUNDERSTORMS
        case "Thunderstorm":
        case "Light Thunderstorm":
        case "Heavy Thunderstorm":
        case "Thunderstorms and Rain":
        case "Light Thunderstorms and Rain":
        case "Heavy Thunderstorms and Rain":
        case "Thunderstorms and Snow":
        case "Light Thunderstorms and Snow":
        case "Heavy Thunderstorms and Snow":
        case "Thunderstorms and Ice Pellets":
        case "Light Thunderstorms and Ice Pellets":
        case "Heavy Thunderstorms and Ice Pellets":
        case "Thunderstorms with Hail":
        case "Light Thunderstorms with Hail":
        case "Heavy Thunderstorms with Hail":
        case "Thunderstorms with Small Hail":
        case "Light Thunderstorms with Small Hail":
        case "Heavy Thunderstorms with Small Hail":
          $("i").addClass("wi wi-storm-showers");
          $("body").css(
            "background-image",
            "url(https://images.pexels.com/photos/53459/lightning-storm-weather-sky-53459.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)"
          );
          break;
        // SAND & DUST
        case "Sand":
        case "Light Sand":
        case "Heavy Sand":
        case "Sandstorm":
        case "Light Sandstorm":
        case "Heavy Sandstorm":
        case "Low Drifting Sand":
        case "Light Low Drifting Sand":
        case "Heavy Low Drifting Sand":
        case "Blowing Sand":
        case "Light Blowing Sand":
        case "Heavy Blowing Sand":
        case "Widespread Dust":
        case "Light Widespread Dust":
        case "Heavy Widespread Dust":
        case "Dust Whirls":
        case "Light Dust Whirls":
        case "Heavy Dust Whirls":
        case "Low Drifting Widespread Dust":
        case "Light Low Drifting Widespread Dust":
        case "Heavy Low Drifting Widespread Dust":
        case "Blowing Widespread Dust":
        case "Light Blowing Widespread Dust":
        case "Heavy Blowing Widespread Dust":
          $("i").addClass("wi wi-sandstorm");
          $("body").css(
            "background-image",
            "url(https://images.pexels.com/photos/60703/fog-tree-desert-sky-60703.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)"
          );
          break;
        // SMOKE
        case "Smoke":
        case "Light Smoke":
        case "Heavy Smoke":
        case "Volcanic Ash":
        case "Light Volcanic Ash":
        case "Heavy Volcanic Ash":
        case "Haze":
        case "Light Haze":
        case "Heavy Haze":
          $("i").addClass("wi wi-smoke");
          $("body").css(
            "background-image",
            "url(https://images.pexels.com/photos/192642/pexels-photo-192642.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)"
          );
          break;
        // CLOUDY
        case "Overcast":
        case "Partly Cloudy":
        case "Mostly Cloudy":
        case "Scattered Clouds":
        case "Squalls":
          $("i").addClass("wi wi-cloudy");
          $("body").css(
            "background-image",
            "url(https://images.pexels.com/photos/26301/pexels-photo-26301.jpg?w=1260&h=750&auto=compress&cs=tinysrgb)"
          );
          break;
        // TORNADO
        case "Funnel Cloud":
          $("i").addClass("wi wi-tornado");
          $("body").css(
            "background-image",
            "url(https://cdn.pixabay.com/photo/2017/02/27/08/50/cyclone-2102397_960_720.jpg)"
          );
          break;
        // CLEAR
        case "Clear":
          $("i").addClass("wi wi-cloud");
          $("body").css(
            "background-image",
            "url(https://images.pexels.com/photos/206926/pexels-photo-206926.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)"
          );
          break;
        // UNKNOWN & DEFAULT
        case "Unknown Precipitation":
        case "Unknown":
        default:
          $("i").addClass("wi wi-na");
          $("body").css(
            "background-image",
            "url(https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)"
          );
      }

      // Get Weather Underground API (time)
      $.getJSON(
        "http://api.wunderground.com/api/c24bd0b9d29075cd/astronomy/q/autoip.json",
        function(data2) {
          // Pull variables
          var currentHour = Math.round(data2.moon_phase.current_time.hour);
          var currentMinute = Math.round(data2.moon_phase.current_time.minute);
          var sunriseHour = Math.round(data2.moon_phase.sunrise.hour);
          var sunriseMinute = Math.round(data2.moon_phase.sunrise.minute);
          var sunsetHour = Math.round(data2.moon_phase.sunset.hour);
          var sunsetMinute = Math.round(data2.moon_phase.sunset.minute);

          // DAYTIME
          if (currentHour === sunriseHour) {
            if (currentMinute >= sunriseMinute) {
              // White background
              $("#currentTemp").css(
                "background-color",
                "rgba(255,255,255,0.6)"
              );

              // Sunny icon
              switch (description) {
                // CLEAR, UNKNOWN, & DEFAULT
                case "Clear":
                case "Unknown Precipitation":
                case "Unknown":
                  $("i").removeClass();
                  $("i").addClass("wi wi-day-sunny");
              }
            }
            // DAYTIME
          } else if (currentHour > sunriseHour && currentHour < sunsetHour) {
            // White background
            $("#currentTemp").css("background-color", "rgba(255,255,255,0.6)");

            // Sunny icon
            switch (description) {
              // CLEAR, UNKNOWN, & DEFAULT
              case "Clear":
              case "Unknown Precipitation":
              case "Unknown":
                $("i").removeClass();
                $("i").addClass("wi wi-day-sunny");
            }
            // NIGHTTIME
          } else if (currentHour === sunsetHour) {
            if (currentMinute >= sunsetMinute) {
              // Change backgrounds to black & font colors to grey
              $("#currentTemp").css("background-color", "rgba(0,0,0,0.6)");
              $("#currentTemp").css("color", "rgba(255,255,255,0.5)");
              $(".container").css("color", "rgba(255,255,255,0.5)");
              $(".container").css("background-color", "rgba(0,0,0,0.6)");

              // Moon icon
              switch (description) {
                // CLEAR, UNKNOWN, & DEFAULT
                case "Clear":
                case "Unknown Precipitation":
                case "Unknown":
                  $("i").removeClass();
                  $("i").addClass("wi wi-night-clear");
                  $("body").css(
                    "background-image",
                    "url(https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)"
                  );
              }
            }
            // NIGHTTIME
          } else {
            // Change backgrounds to black & font colors to grey
            $("#currentTemp").css("background-color", "rgba(0,0,0,0.6)");
            $("#currentTemp").css("color", "rgba(255,255,255,0.5)");
            $(".container").css("color", "rgba(255,255,255,0.5)");
            $(".container").css("background-color", "rgba(0,0,0,0.6)");

            // Moon icon
            switch (description) {
              // CLEAR, UNKNOWN, & DEFAULT
              case "Clear":
              case "Unknown Precipitation":
              case "Unknown":
                $("i").removeClass();
                $("i").addClass("wi wi-night-clear");
                $("body").css(
                  "background-image",
                  "url(https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)"
                );
            }
          }
}
        
      );
    }
  );
}

$(document).ready(function() {
  localWeather();
  if (window.location.protocol === "https:") {
    alert(
      "It looks like you are on an HTTPSecure connection (https://), and unfortunately this app only works on HTTP (http://). If you would like to view this app, please correct this."
    );
  }

  // Change F/C by clicking
  var tempF = document.getElementById("tempF");
  var tempC = document.getElementById("tempC");
  tempF.onclick = function() {
    $("#tempNum").html(fahrenheit + "&deg;");
  };
  tempC.onclick = function() {
    $("#tempNum").html(celsius + "&deg;");
  };
  $("button").on("click", function() {
    $("button").removeClass("selected");
    $(this).addClass("selected");
  });
});
