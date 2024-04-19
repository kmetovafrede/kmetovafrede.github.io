// Frederika Kmeťová
// ITW druhý projekt
// 2023/2024
// .js file

document.addEventListener("DOMContentLoaded", function() {
    const slideshow = document.querySelector('.slideshow');
    if (!slideshow) {
        console.error('Slideshow element not found.');
        return;
    }
    
    const slides = document.querySelectorAll('.slideshow input[type="radio"]');
    let slideIndex = 0;

    function showNextSlide() {
        slides[slideIndex].checked = false;
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].checked = true;
    }
    setInterval(showNextSlide, 5000);
});
