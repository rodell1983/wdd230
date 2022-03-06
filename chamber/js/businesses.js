const requestURL =
  "https://rodell1983.github.io/wdd230/chamber/data/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const businesses= jsonObject["business"];
    businesses.forEach(displayBusiness);
  });


function displayBusiness(business) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let image = document.createElement("img");


  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${business.name}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
  image.setAttribute("src", business.imageurl);


  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.classList.add("card");

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}
