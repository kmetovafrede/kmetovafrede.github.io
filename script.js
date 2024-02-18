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
