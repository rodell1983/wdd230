const requestURL = "https://rodell1983.github.io/wdd230/final/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    let temples = jsonObject["temple"];
    temples = temples.sort(() => Math.random() - 0.5);
    displayTemples(temples[0]);
  });

function displayTemples(temple) {
  // Create elements to add to the document
  let card = document.createElement("div");
  card.classList.add("temple-card");

  let templeImage = document.createElement("img");
  templeImage.setAttribute("src", temple.image);
  templeImage.setAttribute("alt", `Exterior view of the ${temple.name}`);
  templeImage.setAttribute("loading", "lazy");

  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");

  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("viewbox", "0 0 36 36");
  svg.setAttribute("width", "36px");
  svg.setAttribute("height", "36px");

  svg.classList.add("heart");

  path1.setAttribute(
    "d",
    "M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2,c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
  );
  svg.appendChild(path1);

  if (localStorage.getItem(temple.name) === "true") {
    svg.setAttribute("fill", "red");
  } else {
    svg.setAttribute("fill", "gainsboro");
  }

  svg.addEventListener("click", function () {
    if (localStorage.getItem(temple.name) === "true") {
      svg.setAttribute("fill", "gainsboro");
      localStorage.setItem(temple.name, "false");
    } else {
      svg.setAttribute("fill", "red");
      localStorage.setItem(temple.name, "true");
    }
  });

  let cardBody = document.createElement("section");
  cardBody.classList.add("temple-card-body")

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
  card.appendChild(svg);
  card.appendChild(cardBody);

  // Add card to temple cards
  document.querySelector(".spotlight").appendChild(card);

}
