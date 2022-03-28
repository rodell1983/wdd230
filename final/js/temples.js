const requestURL = "https://rodell1983.github.io/wdd230/final/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject["temple"];
    temples.forEach(displayTemples);
    loadSettings();
  });

function displayTemples(temple) {
  // Create elements to add to the document
  let card = document.createElement("div");
  card.classList.add("temple-card");
  card.classList.add("shadow");

  let templeImage = document.createElement("img");
  templeImage.setAttribute("src", temple.image);
  templeImage.setAttribute("alt", temple.name);
  templeImage.setAttribute("loading", "lazy");

  let templeLike = document.createElement("div");
  templeLike.classList.add("temple-like");
  if(localStorage.getItem(temple.name) === "true"){
    templeLike.classList.add("temple-like-liked");
  }

  templeLike.addEventListener("click", function () {
    if(localStorage.getItem(temple.name) === "true"){
      templeLike.classList.remove("temple-like-liked");
      localStorage.setItem(temple.name,"false");
    }else if(localStorage.getItem(temple.name) === "false"){
      templeLike.classList.add("temple-like-liked");
      localStorage.setItem(temple.name,"true");
    }
    weatherBlock.removeChild(weatherAlert);
  });
  templeLike.textContent = "\u2665";

  let cardBody = document.createElement("div");
  cardBody.classList.add("temple-card-body");

  let templeTitle = document.createElement("h2");
  templeTitle.textContent = temple.name;
  cardBody.appendChild(templeTitle);

  let templeAddress = document.createElement("p");
  templeAddress.innerHTML = `${temple.address}<br>${temple.phone}<br>${temple.email}`;
  cardBody.appendChild(templeAddress);

  let templeHistoryT = document.createElement("h3");
  templeHistoryT.textContent = "History";
  cardBody.appendChild(templeHistoryT);

  let templeHistory = document.createElement("p");
  templeHistory.textContent = temple.history;
  cardBody.appendChild(templeHistory);

  let templeServicesT = document.createElement("h3");
  templeServicesT.textContent = "Services";
  cardBody.appendChild(templeServicesT);


  let serviceList = document.createElement('ul');
  for (let i in temple.services) {
    item = document.createElement("li");
    item.textContent = temple.services[i];

    serviceList.appendChild(item);
  }
  cardBody.appendChild(serviceList);

  card.appendChild(templeImage);
  card.appendChild(templeLike);
  card.appendChild(cardBody);

  // Add card to temple cards
  document.querySelector("div.temple-cards").appendChild(card);

  // LocalStorage settings
  function loadSettings() {}
}
