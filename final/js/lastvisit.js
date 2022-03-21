// Load the local storage and set the element variable
const lastVisit = localStorage.getItem('lastVisit');
const visitEL = document.querySelector('.last-visit');

// Factor to adjust date string
const FACTOR = 1000 * 60 * 60 * 24;

// Calculate today and last visit day to the day
let lastDay = Math.trunc(lastVisit / FACTOR);
let today = Math.trunc(Date.now() / FACTOR);

let daysBetweenVisits = today - lastDay;


// Display welcome message based on last visit day
if (lastVisit == null){
    visitEL.textContent = "Welcome to the site, Hope you enjoy";

} else {
    visitEL.textContent = `Welcome Back, It's been ${daysBetweenVisits} days since your last visit.`;
}

localStorage.setItem('lastVisit', Date.now());
