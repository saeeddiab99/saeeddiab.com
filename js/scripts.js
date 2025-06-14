
let currentImageIndex = 0;
const images = ["2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg"];

function showImage(index) {
  const img = document.getElementById("gallery-image");
  const dots = document.querySelectorAll(".dot");
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  img.src = "images/" + images[index];
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
  currentImageIndex = index;
}

function nextImage() {
  showImage(currentImageIndex + 1);
}

function prevImage() {
  showImage(currentImageIndex - 1);
}

document.addEventListener("DOMContentLoaded", () => {
  showImage(currentImageIndex);
});
