// Frederika Kmeťová
// ITW druhý projekt
// 2023/2024
// .js file

function toggleMenuVisibility() {
    var menuContent = document.querySelector('.menu_content');
    var menuIcon = document.querySelector('.menu');

    var menuRightValue = menuContent.style.right;
    if (menuRightValue === '' || menuRightValue === '-200px') {
        menuContent.style.right = '0';
        menuContent.classList.add('opened'); 
        menuIcon.classList.add('opened'); 
    } else {
        closeMenu(); // Close the menu when already open
    }
}

function closeMenu() {
    var menuContent = document.querySelector('.menu_content');
    var menuIcon = document.querySelector('.menu');
    menuContent.style.right = '-200px';
    menuContent.classList.remove('opened'); 
    menuIcon.classList.remove('opened'); 
}

document.addEventListener('click', function(event) {
    var menuContent = document.querySelector('.menu_content');
    var menuIcon = document.querySelector('.menu');

    var isClickInsideMenu = menuIcon.contains(event.target) || menuContent.contains(event.target);

    if (!isClickInsideMenu) {
        closeMenu();
    }
});

var menuIcon = document.querySelector('.menu');
menuIcon.addEventListener('click', toggleMenuVisibility);

// Add event listener to the menu content to close the menu when clicked
var menuContent = document.querySelector('.menu_content');
menuContent.addEventListener('click', function(event) {
    closeMenu();
    event.stopPropagation(); // Prevent the event from bubbling up and closing the menu immediately
});

// Close the menu when the window is scrolled
window.addEventListener('scroll', function() {
    if (menuContent.classList.contains('opened')) {
        closeMenu();
    }
});

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
    var loaders = document.querySelectorAll(".loader, .coffee-loader");
    loaders.forEach(function(loader) {
        loader.style.display = "block";
    });

    document.querySelector("body").style.backgroundImage = "none";
    var container = document.querySelector(".container");
    container.style.display = "none";
    container.style.opacity = "0"; 
    var footer = document.querySelector(".footer");
    footer.style.display = "none";
    footer.style.opacity = "0"; 

    setTimeout(function() {
        loaders.forEach(function(loader) {
            loader.style.display = "none"; 
        });

        container.style.display = "block";
        footer.style.display = "block";
        document.querySelector("body").style.backgroundImage = "url('img/satin_wallpaper2.jpg')"; 

        container.style.animation = "fadeIn 1s ease-in-out"; 
        container.style.opacity = "1"; 
        footer.style.animation = "fadeIn 1s ease-in-out"; 
        footer.style.opacity = "1"; 
        document.body.style.animation = "fadeIn 1s ease-in-out"; 
        document.body.style.opacity = "1"; 
    }, 1); // TODO 3800 seconds are top
});


window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;
const gridContainer = document.querySelector(".grid-container");

// Function to add a new grid item
const addGridItem = () => {
    // Create a new grid item
    const newGridItem = document.createElement("div");
    newGridItem.classList.add("grid-item");

    // Create an image element and set its attributes
    const img = document.createElement("img");
    img.src = `https://source.unsplash.com/random/${Math.floor(Math.random() * 1000)}`;
    img.alt = "Random Image";

    // Append the image to the grid item
    newGridItem.appendChild(img);

    // Append the grid item to the grid container
    gridContainer.appendChild(newGridItem);

    // Add event listener for expanding grid item on click
    newGridItem.addEventListener("click", () => {
        newGridItem.classList.toggle("card--expanded");
    });
};

// Event listener for adding a new grid item
document.querySelector(".js-add-card").addEventListener("click", addGridItem);

// Initialize the grid with existing grid items
animateCSSGrid.wrapGrid(gridContainer, {
    duration: 350,
    stagger: 10,
    onStart: elements => console.log(`started animation for ${elements.length} elements`),
    onEnd: elements => console.log(`finished animation for ${elements.length} elements`)
});