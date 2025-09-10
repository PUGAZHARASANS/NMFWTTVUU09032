let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
document.getElementById('totalSlides').textContent = totalSlides;

function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  document.getElementById('currentSlide').textContent = index + 1;
  document.getElementById('prevBtn').disabled = index === 0;
  document.getElementById('nextBtn').disabled = index === totalSlides - 1;
}

function changeSlide(direction) {
  const newIndex = currentSlideIndex + direction;
  if (newIndex >= 0 && newIndex < totalSlides) {
    currentSlideIndex = newIndex;
    showSlide(currentSlideIndex);
  }
}

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') changeSlide(-1);
  if (e.key === 'ArrowRight') changeSlide(1);
});

// Init
showSlide(0);