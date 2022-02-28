const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  });

function ordinal(n) {
  let s = ["th", "st", "nd", "rd"];
  let v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let image = document.createElement("img");
  let dob = document.createElement("p");
  let pob = document.createElement("p");

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${prophet.name} ${prophet.lastname}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
  image.setAttribute("src", prophet.imageurl);

  // Format order
  let order = ordinal(prophet.order);

  image.setAttribute(
    "alt",
    `Portrait of ${prophet.name} ${prophet.lastname} - ${order} Latter-day President`
  );
  image.setAttribute("loading", "lazy");

  dob.textContent = `Date of Birth: ${prophet.birthdate}`;

  pob.textContent = `Place of Birth: ${prophet.birthplace}`;

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(dob);
  card.appendChild(pob);
  card.appendChild(image);
  card.classList.add("card");

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}
