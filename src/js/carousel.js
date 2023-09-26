const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const num_slides = document.querySelectorAll('.carousel-slide').length;
console.log("num_slides", num_slides);

let currentIndex = 0;

function updateCarousel() {
    const translateX = -currentIndex * 100 + '%';
    carouselContainer.style.transform = `translateX(${translateX})`;
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === num_slides - 1;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < num_slides-1) { 
        currentIndex++;
        updateCarousel();
    }
});