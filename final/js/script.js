// Load date string for header

let modDate = new Date(document.lastModified);
let date = new Date();
let dateString = `Last Updated: ${modDate.toLocaleString()}`;

document.getElementById("current-year").textContent = date.getFullYear();
document.getElementById("current-date").textContent = dateString;

// Configure Hamburger menu

const hambutton = document.querySelector(".nav-ham");
const mainnav = document.querySelector(".main-menu");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);
