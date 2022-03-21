// Load date string for header

let modDate = new Date(document.lastModified);
let date = new Date();
let dateString = `Last Updated: ${modDate.toLocaleString()}`;

document.getElementById("current-year").textContent = date.getFullYear();
document.getElementById("current-date").textContent = dateString;

// Configure Hamburger menu

const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

// Display Banner on Mon & Tue
const day = date.getDay();

if (day === 1 || day === 2) {
  document.querySelector(".banner").style.display = "block";
} else {
  document.querySelector(".banner").style.display = "none";
}




// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldateUK}</em>`;

//Test for join page them load date
let joinDateEl = document.getElementById("join-date");
if (joinDateEl) {
  joinDateEl.value = now;
}
