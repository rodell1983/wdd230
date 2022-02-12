
// Load date string for header

let date = new Date(document.lastModified);
let dateString = `Last Updated: ${date.toLocaleString()}`;

document.getElementById("current-year").textContent = date.getFullYear();
document.getElementById("current-date").textContent = dateString;


// Display Banner on Mon & Tue
const day = date.getDay()
if (day == 1 || day == 2) {
	document.querySelector(".banner").style.display = 'block';
}else{
	document.querySelector(".banner").style.display = 'none';
}

// Configure Hamburger menu

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldateUK}</em>`;
