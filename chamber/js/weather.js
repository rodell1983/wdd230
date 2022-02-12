let temp = parseInt(document.getElementById("weather-temp").innerText);
let windSpeed = parseFloat(
  document.getElementById("weather-windspeed").innerText
);

document.getElementById("weather-windchill").innerText = windChill(
  temp,
  windSpeed
);

function windChill(t, s) {
  if (t <= 50 && s > 3) {
    chill =
      35.74 +
      0.6215 * t -
      35.75 * Math.pow(s, 0.16) +
      0.4275 * t * Math.pow(s, 0.16);
    return Number(chill).toFixed(1);
  } else {
    return "N/A";
  }
}
