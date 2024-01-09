const carousel = document.querySelector(".single_carousel");
const carouselItems = carousel.querySelectorAll(".single_carousel > div");

let currentIndex = 0;
let intervalId;

function showItem(index) {
  carouselItems.forEach((item, i) => {
    if (i === index) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

function nextItem() {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  showItem(currentIndex);
}

function prevItem() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  showItem(currentIndex);
}

function startCarousel() {
  intervalId = setInterval(nextItem, 2500);
}

function stopCarousel() {
  clearInterval(intervalId);
}

showItem(currentIndex);
startCarousel();
