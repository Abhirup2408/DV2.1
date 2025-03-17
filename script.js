// Change button color on click
const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", function () {
  this.style.backgroundColor =
    this.style.backgroundColor === "rgb(76, 175, 80)" ? "#3498db" : "#4CAF50";
});

// Animate box on click
const animatedBox = document.getElementById("animatedBox");
animatedBox.addEventListener("click", function () {
  this.style.transform = "rotate(360deg)";
  setTimeout(() => {
    this.style.transform = "rotate(0deg)";
  }, 500);
});

// Form validation and greeting message
document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    if (name.trim() !== "") {
      document.getElementById(
        "greeting"
      ).innerText = `Hello, ${name}! Welcome to our interactive page.`;
      document.getElementById("name").value = "";
    }
  });

// Carousel functionality
// Carousel functionality
const carousel = document.getElementById("imageCarousel");
const container = carousel.querySelector(".carousel-container");
const slides = carousel.querySelectorAll(".carousel-slide");
const prevButton = carousel.querySelector(".prev");
const nextButton = carousel.querySelector(".next");

let currentIndex = 0;

function showSlide(index) {
  container.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Auto-rotate carousel
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);

// Click counter
let clickCount = 0;
const counterButton = document.getElementById("counterButton");
const clickCountDisplay = document.getElementById("clickCount");
counterButton.addEventListener("click", function () {
  clickCount++;
  clickCountDisplay.textContent = clickCount;
  this.style.transform = "scale(0.95)";
  setTimeout(() => {
    this.style.transform = "scale(1)";
  }, 100);
});

// Color picker
const colorPicker = document.getElementById("colorPicker");
const selectedColor = document.getElementById("selectedColor");
colorPicker.addEventListener("input", function () {
  const color = this.value;
  selectedColor.textContent = color;
  document.body.style.backgroundColor = color;
});
