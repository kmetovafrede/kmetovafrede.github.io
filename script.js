// Frederika Kmeťová
// ITW druhý projekt
// 2023/2024
// .js file

// Function to handle click events
function toggleMenu(event) {
    var menu = document.querySelector('.menu_content');
    var menuButton = document.querySelector('.menu_button');

    // Check if the clicked element is inside the menu or the menu button
    var isClickInsideMenu = menu.contains(event.target) || menuButton.contains(event.target);

    // If the click is not inside the menu or menu button, close the menu
    if (!isClickInsideMenu) {
        menu.style.right = '-200px';
    }
}

// Event listener for click events
document.addEventListener('click', toggleMenu);

// Function to toggle the menu when clicked
function toggleMenuVisibility() {
    var menu = document.querySelector('.menu_content');
    menu.style.right = menu.style.right === '-200px' ? '0' : '-200px';
}

// Event listener for click events on the menu button
var menuButton = document.querySelector('.menu_button');
menuButton.addEventListener('click', toggleMenuVisibility);

function flipCard(card) {
    card.classList.toggle("card-flipped");
}

function toggleDropdown(card, event) {
    var dropdownContent = card.querySelector('.dropdown-content');
    if (dropdownContent && !dropdownContent.contains(event.target)) {
        card.classList.toggle('card-flipped');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Show the loaders
    var loaders = document.querySelectorAll(".loader, .coffee-loader");
    loaders.forEach(function(loader) {
        loader.style.display = "block";
    });

    // Hide the entire page content, including background image and footer initially
    document.querySelector("body").style.backgroundImage = "none";
    var container = document.querySelector(".container");
    container.style.display = "none";
    container.style.opacity = "0"; 
    var footer = document.querySelector(".footer");
    footer.style.display = "none";
    footer.style.opacity = "0"; 

    // Hide the loaders and smoothly reveal the webpage content after 2 seconds (to match coffee loader animation duration)
    setTimeout(function() {
        loaders.forEach(function(loader) {
            loader.style.display = "none"; // Hide the loaders
        });

        container.style.display = "block";
        footer.style.display = "block";
        document.querySelector("body").style.backgroundImage = "url('img/background.jpg')"; // Show the background image

        // Trigger CSS animation to fade in the content
        container.style.animation = "fadeIn 1s ease-in-out"; // Smooth transition with ease-in-out timing function
        container.style.opacity = "1"; // Set opacity to 1 after animation
        footer.style.animation = "fadeIn 1s ease-in-out"; 
        footer.style.opacity = "1"; 
        document.body.style.animation = "fadeIn 1s ease-in-out"; 
        document.body.style.opacity = "1"; 
    }, 1); // TODO 3800 seconds are top
});

