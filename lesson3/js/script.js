let date = new Date(document.lastModified);
let dateString = `Last Updated: ${date.toLocaleString()}`;

document.getElementById("current-year").textContent = date.getFullYear();
document.getElementById("current-date").textContent = dateString;
