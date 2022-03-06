const requestURL = "https://rodell1983.github.io/wdd230/chamber/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const businesses = jsonObject["business"];
    businesses.forEach(displayBusiness);
    loadSettings();
  });

function displayBusiness(business) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let image = document.createElement("img");
  let name = document.createElement("p");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let website = document.createElement("a");
  let webText = document.createElement("p")

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
  image.setAttribute("src", business.logourl);
  image.setAttribute("alt", `${business.name} logo`);
  image.setAttribute("loading", "lazy");

  // Change the textContent property of the h2 element to contain the prophet's full name
  name.textContent = business.name;

  address.textContent = business.address;

  phone.textContent = business.phone;

  let linkText = document.createTextNode(business.website);
  website.appendChild(linkText);
  website.title = business.name;
  website.href = business.website;
  website.target = "_blank";

  webText.appendChild(website);

  // Add/append the section(card) with the h2 element
  card.appendChild(image);
  card.appendChild(name);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(webText);

  card.classList.add("card");

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.business-cards").appendChild(card);
}

function listView() {
  const cards = document.querySelectorAll(".card");

  for (const c of cards) {
    c.classList.add("card-list");
    c.classList.remove("card-grid");
    c.classList.remove("block");
    c.classList.remove("shadow");
  }

  let frame = document.querySelector(".business-cards");
  frame.classList.remove("grid");
  frame.classList.add("list");
  frame.classList.add("shadow");

  localStorage.setItem("view", "list");
}

function gridView() {
  const cards = document.querySelectorAll(".card");

  for (const c of cards) {
    c.classList.remove("card-list");
    c.classList.add("card-grid");
    c.classList.add("block");
    c.classList.add("shadow");
  }

  let frame = document.querySelector(".business-cards");
  frame.classList.add("grid");
  frame.classList.remove("list");
  frame.classList.remove("shadow");

  localStorage.setItem("view", "grid");
}

function loadSettings() {
  //Load Local Storage
  const v = localStorage.getItem("view");

  // Display welcome message based on last visit day
  if (v === null) {
    listView();
  } else {
    if (v === "list") {
      listView();
    } else {
      gridView();
    }
  }
}

document.querySelector(".list-view-button").addEventListener("click", listView);
document.querySelector(".grid-view-button").addEventListener("click", gridView);
