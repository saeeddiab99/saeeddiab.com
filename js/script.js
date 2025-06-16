
const images = document.querySelectorAll('.gallery-image');
const dotsContainer = document.querySelector('.dots');
let current = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
  const dots = dotsContainer.querySelectorAll('span');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function createDots() {
  images.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
    dot.addEventListener('click', () => {
      current = i;
      showImage(current);
    });
  });
}

document.querySelector('.next')?.addEventListener('click', () => {
  current = (current + 1) % images.length;
  showImage(current);
});

document.querySelector('.prev')?.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});

if (images.length) {
  createDots();
  showImage(0);
}
