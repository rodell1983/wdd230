const requestURL = "https://rodell1983.github.io/wdd230/final/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    let temples = jsonObject["temple"];
      //temples = temples.sort(() => Math.random() - 0.5);
      displayTemples(temples[0]);

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
  templeLike.textContent = "\u2665";

  let cardBody = document.createElement("div");
  cardBody.classList.add("temple-card-body");

  let templeTitle = document.createElement("h2");
  templeTitle.textContent = temple.name;
  cardBody.appendChild(templeTitle);

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
  document.querySelector(".spotlight").appendChild(card);

  // LocalStorage settings
  function loadSettings() {}
}
