const requestURL = "https://rodell1983.github.io/wdd230/chamber/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject["business"];
    let premium = businesses.filter(
      (a) => a.membership == "Gold" || a.membership == "Silver"
    );
    premium = premium.sort(() => Math.random() - 0.5);
    displayBusiness(premium[0]);
    displayBusiness(premium[1]);
    displayBusiness(premium[2]);
  });

function displayBusiness(business) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let imageLogo = document.createElement("img");
  let imageMember = document.createElement("img");
  let memberLink = document.createElement("a");
  let slogan = document.createElement("p");

  slogan.innerText = business.slogan;

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

  // Add elements to card
  card.appendChild(imageLogo);
  card.appendChild(slogan);

  if (
    business.membership.toLowerCase() == "gold" ||
    business.membership.toLowerCase() == "silver"
  ) {
    card.appendChild(memberLink);
  }
  card.classList.add("block");
  card.classList.add("shadow");
  card.classList.add("spotlight");
  // Add card to business cards
  document.querySelector("div.spotlights").appendChild(card);
}
