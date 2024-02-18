// Frederika Kmeťová
// ITW druhý projekt
// 2023/2024
// .js file

document.addEventListener('DOMContentLoaded', () => {
    const menuContent = document.querySelector('.menu_content');
    menuContent.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuContent.style.right = '-200px';
        });
    });
    
    const menuButton = document.querySelector('.menu_button');
    menuButton.addEventListener('click', () => {
        if (menuContent.style.right === '0px') {
            // If menu is open, close it
            menuContent.style.right = '-200px';
        } else {
            // If menu is closed, open it
            menuContent.style.right = '0px';
        }
    });
});

function flipCard(card) {
    card.classList.toggle("card-flipped");
}
function toggleDropdown(card) {
    card.classList.toggle('card-flipped');
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
        body.style.animation = "fadeIn 1s ease-in-out"; 
        body.style.opacity = "1"; 
    }, 3800); // TODO 3800 seconds are top
});

