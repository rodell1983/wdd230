let imgFiles = [
  "cedar_city_utah_temple_med.webp",
  "las_vegas_temple_med.webp",
  "salt_lake_temple_med.webp",
  "toronto-temple_flowers_med.webp",
  "los_angeles_temple_med.webp"
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function autoSlides() {
  plusSlides(1);
  setTimeout(autoSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function buildSlide(path){
  let slides = document.createElement("div");
  slides.classList.add("slides");
  let slidePic = document.createElement("picture");
  let slideImg = document.createElement("img");
  slideImg.setAttribute("src", path);
  //slideImg.setAttribute("loading", "lazy");

  slidePic.append(slideImg);
  slides.appendChild(slidePic);

  document.querySelector("div.slide-show").prepend(slides);
}

// Begin code
let slideIndex = 0;

imgFiles = imgFiles.sort(() => Math.random() - 0.5);

for (let i = 0; i < 3; i++) {
  buildSlide(`images/temples/${imgFiles[i]}`);
}
document.querySelector("div.default-slide").remove();

showSlides(slideIndex);
autoSlides();
