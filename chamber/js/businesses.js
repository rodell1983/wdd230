const requestURL = "https://rodell1983.github.io/wdd230/chamber/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject["business"];
    businesses.forEach(displayBusiness);
    loadSettings();
  });

function displayBusiness(business) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let imageLogo = document.createElement("img");
  let imageMember = document.createElement("img");
  let memberLink = document.createElement("a");
  let name = document.createElement("p");
  let address = document.createElement("p");
  let phone = document.createElement("p");
  let website = document.createElement("a");
  let webText = document.createElement("p");

  // Set values for image logo
  imageLogo.setAttribute("src", business.logourl);
  imageLogo.setAttribute("alt", `${business.name} logo`);
  imageLogo.setAttribute("loading", "lazy");
  imageLogo.classList.add("card-logo");

  // Set values for the Medal Icon
  imageMember.setAttribute(
    "src",
    `images/${String(business.membership).toLowerCase()}.webp`
  );
  imageMember.setAttribute("alt", `${business.membership} Member logo`);
  imageMember.setAttribute("loading", "lazy");
  imageMember.classList.add("card-medal");
  memberLink.href = "join.html";
  memberLink.title = "View Membership Details";
  memberLink.classList.add("card-medal-link");
  memberLink.appendChild(imageMember);

  // Name, address, phone #
  name.textContent = business.name;
  address.textContent = business.address;
  phone.innerHTML = `<strong>${business.phone}</strong>`;

  // Web link
  let linkText = document.createTextNode(business.website);
  website.appendChild(linkText);
  website.title = business.name;
  website.href = business.website;
  website.target = "_blank";
  webText.appendChild(website);

  // Add elements to card
  card.appendChild(imageLogo);
  card.appendChild(name);
  card.appendChild(address);
  card.appendChild(phone);
  if (
    business.membership.toLowerCase() == "gold" ||
    business.membership.toLowerCase() == "silver"
  ) {
    card.appendChild(memberLink);
  }
  card.appendChild(webText);
  card.classList.add("card");

  // Add card to business cards
  document.querySelector("div.business-cards").appendChild(card);
}

// List view button click
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

// Grid view button click
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

// LocalStorage settings
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

// Add events
document.querySelector(".list-view-button").addEventListener("click", listView);
document.querySelector(".grid-view-button").addEventListener("click", gridView);
