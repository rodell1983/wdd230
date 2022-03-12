const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5506956&appid=ca6d3a3994d6211dbf7bfd04bd2903b4&lang=en&units=imperial"

fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    // Set Variables
    let temp = jsonObject.main.temp;
    let windSpeed = jsonObject.wind.speed;
    let chill = windChill(
      temp,
      windSpeed);
    
    let weatherDesc = jsonObject.weather[0].main.toLowerCase();

    //Weather Values
    document.getElementById("weather-temp").textContent = Math.round(temp);
    document.getElementById("weather-windspeed").textContent = Math.round(windSpeed);
    document.getElementById("weather-windchill").textContent = chill;

    //Weather Icon Image
    imgEl = document.getElementById("weather-img");
    imgEl.src = `images/weather/${weatherDesc}.png`;
    imgEl.alt = weatherDesc;
    imgEl.addEventListener("error", function(event) {
      event.target.src = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
      event.onerror = null
    });

  });

function windChill(t, s) {
  if (t <= 50 && s > 3) {
    const chill =
      35.74 +
      0.6215 * t -
      35.75 * Math.pow(s, 0.16) +
      0.4275 * t * Math.pow(s, 0.16);
    return Math.round(chill);
  } else {
    return "N/A";
  }
}
