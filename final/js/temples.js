const requestURL = "https://rodell1983.github.io/wdd230/final/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    let temples = jsonObject["temple"];

    let t = document.getElementsByClassName("temple-cards");
    if (t.length > 0) {
      temples.forEach(displayTemples);
    }

    let s = document.getElementsByClassName("spotlight");
    if (s.length > 0) {
      temples = temples.sort(() => Math.random() - 0.5);
      displaySpotlight(temples[0]);
    }
  });

function getTemplePic(temple) {
  let templePicture = document.createElement("picture");

  let templeImage = document.createElement("img");
  templeImage.setAttribute("src", temple.image);
  templeImage.setAttribute("alt", `Exterior view of the ${temple.name}`);
  templeImage.setAttribute("loading", "lazy");

  templePicture.appendChild(templeImage);
  return templePicture;
}

function getHeart(temple) {
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

  return svg;
}

function getAddressBlock(temple){
  let templeAddressBlock = document.createElement("div");
  templeAddressBlock.classList.add("temple-address");

  temple.address.forEach((element) => {
    let templeAddress = document.createElement("span");

    templeAddress.innerHTML += `${element} <br>`;
    templeAddressBlock.appendChild(templeAddress);
  });

  let templePhone = document.createElement("span");
  templePhone.innerHTML = `${temple.phone}<br> <a href="${temple.email}">Email Temple</a>`;
  templeAddressBlock.appendChild(templePhone);

  return templeAddressBlock;
}

function getCardBody(temple) {
  let cardBody = document.createElement("section");
  cardBody.classList.add("temple-card-body");

  let templeTitle = document.createElement("h2");
  templeTitle.textContent = temple.name;
  cardBody.appendChild(templeTitle);

  cardBody.appendChild(getAddressBlock(temple));

  let templeHistoryT = document.createElement("h3");
  templeHistoryT.textContent = "History";
  cardBody.appendChild(templeHistoryT);

  let templeHistory = document.createElement("p");
  templeHistory.textContent = temple.history;
  cardBody.appendChild(templeHistory);

  let templeServicesT = document.createElement("h3");
  templeServicesT.textContent = "Services";
  cardBody.appendChild(templeServicesT);

  let serviceList = document.createElement("ul");
  for (let i in temple.services) {
    item = document.createElement("li");
    item.textContent = temple.services[i];

    serviceList.appendChild(item);
  }
  cardBody.appendChild(serviceList);

  let templeOrdinanceSchedT = document.createElement("h3");
  templeOrdinanceSchedT.textContent = "Ordinance Schedule";
  cardBody.appendChild(templeOrdinanceSchedT);

  let templeOrdinanceSched = document.createElement("p");
  templeOrdinanceSched.textContent = temple.ordinanceSched;
  cardBody.appendChild(templeOrdinanceSched);

  let templeSessionSchedT = document.createElement("h3");
  templeSessionSchedT.textContent = "Session Schedule";
  cardBody.appendChild(templeSessionSchedT);

  let templeSessionSched = document.createElement("p");
  templeSessionSched.textContent = temple.sessionSched;
  cardBody.appendChild(templeSessionSched);

  return cardBody;
}

function getCard(temple) {
  let card = document.createElement("div");
  card.classList.add("temple-card");
  card.classList.add("shadow");
  card.classList.add("block");

  card.appendChild(getTemplePic(temple));
  card.appendChild(getHeart(temple));
  card.appendChild(getCardBody(temple));

  return card;
}

function displayTemples(temple) {
  // Add card to temple cards
  document.querySelector(".temple-cards").appendChild(getCard(temple));
}

function displaySpotlight(temple) {
  let card = document.createElement("div");
  card.classList.add("temple-card");

  let cardBody = document.createElement("section");
  cardBody.classList.add("temple-card-body");

  let templeTitle = document.createElement("h2");
  templeTitle.textContent = temple.name;
  cardBody.appendChild(templeTitle);

  cardBody.appendChild(getAddressBlock(temple));

  card.appendChild(getTemplePic(temple));
  card.appendChild(getHeart(temple));
  card.appendChild(cardBody);

  // Add card to temple cards
  document.querySelector(".spotlight").appendChild(card);
}
