const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5506956&appid=ca6d3a3994d6211dbf7bfd04bd2903b4&lang=en&units=imperial";

fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // Set Variables
    let temp = jsonObject.main.temp;
    let windSpeed = jsonObject.wind.speed;
    let chill = windChill(temp, windSpeed);

    let weatherDesc = jsonObject.weather[0].main.toLowerCase();
    let weatherDescText = jsonObject.weather[0].description;

    let sky = document.createElement("div");
    let weatherImg = document.createElement("img");
    let weatherTemp = document.createElement("span");
    let weatherDT = document.createElement("span");
    let weatherSpeedChill = document.createElement("dl");

    weatherTemp.innerHTML = `${Math.round(temp)}<sup>°F</sup>`;
    weatherTemp.classList.add("temp")

    weatherDT.innerHTML = weatherDescText;

    let mph = "mph";
    if (chill === "N/A"){
      mph = "";
    }
    weatherSpeedChill.innerHTML = `<dt>Wind Speed:</dt><dd>${Math.round(
      windSpeed
    )} mph</dd><dt>Wind Chill:</dt><dd>${chill} ${mph}</dd>`;

    //Weather Icon Image
    weatherImg.src = `images/weather/${weatherDesc}.png`;
    weatherImg.alt = weatherDesc;
    weatherImg.addEventListener("error", function (event) {
      event.target.src = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
      event.onerror = null;
    });

    sky.appendChild(weatherImg);
    sky.appendChild(weatherTemp);

    weatherBlock = document.querySelector(".weather");

    weatherBlock.appendChild(sky);
    weatherBlock.appendChild(weatherDT);
    weatherBlock.appendChild(weatherSpeedChill);
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
