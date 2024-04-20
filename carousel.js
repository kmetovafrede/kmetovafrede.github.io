// Frederika Kmeťová
// ITW druhý projekt
// 2023/2024
// .js file

// slideshow for carousel going through images 
document.addEventListener("DOMContentLoaded", function() {
    const slideshow = document.querySelector('.slideshow');
    //debug if slideshow is not found
    if (!slideshow) {
        console.error('Slideshow element not found.');
        return;
    }
    
    // getting all the slides
    const slides = document.querySelectorAll('.slideshow input[type="radio"]');
    let slideIndex = 0;

    // showing the next slide
    function showNextSlide() {
        slides[slideIndex].checked = false;
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].checked = true;
    }
    // setting the interval for 5 seconds
    setInterval(showNextSlide, 5000);
});

// end of carousel.js ----------------------------------------------------------------------------
