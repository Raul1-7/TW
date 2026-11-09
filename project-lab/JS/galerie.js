"use strict";
const images = [
    "../MEDIA/g1.jpg",
    "../MEDIA/g2.jpg",
    "../MEDIA/g3.jpg"
];
const mainImage = document.getElementById("carousel-image");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const counter = document.getElementById("imageCounter");
if (!mainImage)
    throw new Error("Elementul 'carousel-image' nu a fost gasit!");
let currentIndex = 0;
function updateImage(index) {
    currentIndex = index;
    mainImage.classList.add("fade-out");
    setTimeout(() => {
        mainImage.src = images[currentIndex];
        mainImage.classList.remove("fade-out");
    }, 150);
    if (counter) {
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
    }
}
function showNextImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    updateImage(nextIndex);
}
function showPrevImage() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(prevIndex);
}
let autoSlide = setInterval(showNextImage, 3000);
if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        clearInterval(autoSlide);
        showNextImage();
        autoSlide = setInterval(showNextImage, 3000);
    });
}
if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        clearInterval(autoSlide);
        showPrevImage();
        autoSlide = setInterval(showNextImage, 3000);
    });
}
