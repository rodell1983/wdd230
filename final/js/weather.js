const apiURL =
  "https://api.openweathermap.org/data/2.5/onecall?lat=38.98&lon=-77.10&appid=ca6d3a3994d6211dbf7bfd04bd2903b4&lang=en&units=imperial";

fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // load alerts
    loadWeatherAlerts(jsonObject);
    // load weather card
    loadWeatherCard(jsonObject);
  });

function capWords(str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
}

function getDaily(day) {
  let dayName = new Date(day.dt * 1000).toLocaleDateString("en", {
    weekday: "short",
  });

  let weatherDesc = day.weather[0].main;
  let weatherImg = document.createElement("img");

  weatherImg.src = `images/weather/${weatherDesc.toLowerCase()}.png`;
  weatherImg.alt = weatherDesc;
  weatherImg.addEventListener("error", function (event) {
    event.target.src = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
    event.onerror = null;
  });

  let temp = day.temp.day.toFixed(0);

  dailyBlock = document.createElement("div");
  tempSpan = document.createElement("span");
  tempSpan.innerHTML = `${temp}<sup>°F</sup>`;

  daySpan = document.createElement("span");
  daySpan.innerHTML = dayName;

  dailyBlock.appendChild(weatherImg);
  dailyBlock.appendChild(daySpan);
  dailyBlock.appendChild(tempSpan);
  dailyBlock.classList.add("weather-daily");

  return dailyBlock;
}

function loadWeatherAlerts(jsonObject) {
  // load alerts
  if ("alerts" in jsonObject) {
    jsonObject.alerts.forEach((wa) => {
      let weatherAlert = document.createElement("div");
      let weatherAlertText = document.createElement("p");
      weatherAlertText.textContent = `Weather Alert: ${wa}`;
      weatherAlert.classList.add("weather-alert");

      let btnRemove = document.createElement("button");
      btnRemove.textContent = "X";
      btnRemove.ariaLabel = "Remove Alert";

      weatherAlert.appendChild(weatherAlertText);
      weatherAlert.appendChild(btnRemove);

      btnRemove.addEventListener("click", function () {
        document.querySelector("body").removeChild(weatherAlert);
      });

      document.querySelector("body").prepend(weatherAlert);
    });
  }
}

function loadWeatherCard(jsonObject) {
  // Set Variables
  let temp = jsonObject.current.temp;
  let rh = jsonObject.current.humidity;

  let weatherDescText = jsonObject.current.weather[0].description;
  let weatherDesc = jsonObject.current.weather[0].main;

  let sky = document.createElement("div");
  sky.classList.add("weather-sky");
  let weatherImg = document.createElement("img");
  weatherImg.classList.add("weather-img");
  let weatherTemp = document.createElement("span");
  let weatherDT = document.createElement("span");
  let weatherRH = document.createElement("span");

  weatherTemp.innerHTML = `Temp ${Math.round(temp)}<sup>°F</sup>`;
  weatherTemp.classList.add("temp");

  weatherDT.innerHTML = capWords(weatherDescText);

  weatherRH.innerHTML = `Humidity ${Math.round(rh)}<sup>%</sup>`;
  weatherRH.classList.add("rh");

  //Weather Icon Image
  weatherImg.src = `images/weather/${weatherDesc.toLowerCase()}.png`;
  weatherImg.alt = weatherDesc;
  weatherImg.addEventListener("error", function (event) {
    event.target.src = `https://openweathermap.org/img/w/${current.weather[0].icon}.png`;
    event.onerror = null;
  });

  sky.appendChild(weatherImg);
  sky.appendChild(weatherTemp);
  sky.appendChild(weatherRH);
  sky.appendChild(weatherDT);

  let forecast = document.createElement("div");
  forecast.classList.add("weather-forecast");

  forecast.appendChild(getDaily(jsonObject.daily[1]));
  forecast.appendChild(getDaily(jsonObject.daily[2]));
  forecast.appendChild(getDaily(jsonObject.daily[3]));

  weatherBlock = document.querySelector(".weather");
  weatherBlock.appendChild(sky);
  weatherBlock.appendChild(forecast);
}

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
