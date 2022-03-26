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

  let templeImage = document.createElement("img");
  templeImage.setAttribute("src", temple.image);
  templeImage.setAttribute("alt", temple.name);
  templeImage.setAttribute("loading", "lazy");

  let templeLike = document.createElement("div");
  templeLike.classList.add("temple-like");
  templeLike.textContent = "&#10084;";

  let cardBody = document.createElement("div");
  cardBody.classList.add("temple-card-body");

  let templeTitle = document.createElement("h2");
  templeTitle.textContent = temple.name;
  cardBody.appendChild(templeTitle);

  let templeAddress = document.createElement("p");
  templeAddress.innerHTML = `${temple.address} ${temple.phone} ${temple.email}`;
  cardBody.appendChild(templeAddress);

  let templeHistoryT = document.createElement("h3");
  templeHistoryT.textContent = "History";
  cardBody.appendChild(templeHistoryT);

  let templeHistory = document.createElement("p");
  templeHistory.textContent = temple.history;
  cardBody.appendChild(templeHistory);

  card.appendChild(templeImage);
  card.appendChild(templeLike);
  card.appendChild(cardBody);

  // Add card to temple cards
  document.querySelector("div.temple-cards").appendChild(card);

  // LocalStorage settings
  function loadSettings() {}
}
