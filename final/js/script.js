// Load date string for header

let modDate = new Date(document.lastModified);
let date = new Date();
let dateString = `Last Updated: ${modDate.toLocaleString()}`;

document.getElementById("current-year").textContent = date.getFullYear();
document.getElementById("current-date").textContent = dateString;

