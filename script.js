// Frederika Kmeťová
// ITW druhý projekt
// 2023/2024
// .js file

// toggle the visibility of the menu
function toggleMenuVisibility() {
    var menuContent = document.querySelector('.menu-content');
    var menuIcon = document.querySelector('.menu');

    var menuRightValue = menuContent.style.right;
    if (menuRightValue === '' || menuRightValue === '-200px') {
        menuContent.style.right = '0';
        // open both icon and menu
        menuContent.classList.add('opened'); 
        menuIcon.classList.add('opened'); 
    } else {
        closeMenu();
    }
}

// closing menu
function closeMenu() {
    var menuContent = document.querySelector('.menu-content');
    var menuIcon = document.querySelector('.menu');
    // closing, by setting the right property
    menuContent.style.right = '-200px';
    menuContent.classList.remove('opened'); 
    menuIcon.classList.remove('opened'); 
}

// event listener for clicks outside the menu
document.addEventListener('click', function(event) {
    var menuContent = document.querySelector('.menu-content');
    var menuIcon = document.querySelector('.menu');

    // checking where click happened
    var isClickInsideMenu = menuIcon.contains(event.target) || menuContent.contains(event.target);

    if (!isClickInsideMenu) {
        closeMenu();
    }
});

// event listener for opening menu
var menuIcon = document.querySelector('.menu');
menuIcon.addEventListener('click', toggleMenuVisibility);

// event listener for closing menu when clicked
var menuContent = document.querySelector('.menu-content');
menuContent.addEventListener('click', function(event) {
    closeMenu();
    event.stopPropagation(); // prevent the event from closing the menu
});

// event listener for closing menu when scrolling
window.addEventListener('scroll', function() {
    if (menuContent.classList.contains('opened')) {
        closeMenu();
    }
});

// flipping cards
function flipCard(card) {
    card.classList.toggle("card-flipped");
}

// showing content behind flipped cards
function toggleDropdown(card, event) {
    var dropdownContent = card.querySelector('.dropdown-content');
    if (dropdownContent && !dropdownContent.contains(event.target)) {
        card.classList.toggle('card-flipped');
    }
}

// loading of the page
document.addEventListener("DOMContentLoaded", function() {
  // display loaders
  var loaders = document.querySelectorAll(".loader, .coffee-loader");
  loaders.forEach(function(loader) {
      loader.style.display = "block";
  });

  // hide the main website
  document.querySelector("body").style.backgroundImage = "none";
  var container = document.querySelector(".container");
  container.style.display = "none";
  container.style.opacity = "0"; 
  var footer = document.querySelector(".footer");
  footer.style.display = "none";
  footer.style.opacity = "0"; 

  // show the main website after 2.8 seconds
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
  }, 2800); // delay for 2.8 seconds 
});

// end of script.js ----------------------------------------------------------------------------


// Part of my website (portfolio) not the project itself, that i want to re-implement again after the end of semester
// Back to top button found online by CodyHouse
// (function() {
//     var backTop = document.getElementsByClassName('js-back-to-top')[0];
//     if( backTop ) {
//       var dataElement = backTop.getAttribute('data-element');
//       var scrollElement = dataElement ? document.querySelector(dataElement) : window;
//       var scrollOffsetInit = parseInt(backTop.getAttribute('data-offset-in')) || parseInt(backTop.getAttribute('data-offset')) || 0, //show back-to-top if scrolling > scrollOffset
//         scrollOffsetOutInit = parseInt(backTop.getAttribute('data-offset-out')) || 0, 
//         scrollOffset = 0,
//         scrollOffsetOut = 0,
//         scrolling = false;
  
//       var targetIn = backTop.getAttribute('data-target-in') ? document.querySelector(backTop.getAttribute('data-target-in')) : false,
//         targetOut = backTop.getAttribute('data-target-out') ? document.querySelector(backTop.getAttribute('data-target-out')) : false;
  
//       updateOffsets();
      
//       backTop.addEventListener('click', function(event) {
//         event.preventDefault();
//         if(!window.requestAnimationFrame) {
//           scrollElement.scrollTo(0, 0);
//         } else {
//           dataElement ? scrollElement.scrollTo({top: 0, behavior: 'smooth'}) : window.scrollTo({top: 0, behavior: 'smooth'});
//         } 
//         moveFocus(document.getElementById(backTop.getAttribute('href').replace('#', '')));
//       });
      
//       checkBackToTop();
//       if (scrollOffset > 0 || scrollOffsetOut > 0) {
//         scrollElement.addEventListener("scroll", function(event) {
//           if( !scrolling ) {
//             scrolling = true;
//             (!window.requestAnimationFrame) ? setTimeout(function(){checkBackToTop();}, 250) : window.requestAnimationFrame(checkBackToTop);
//           }
//         });
//       }
  
//       function checkBackToTop() {
//         updateOffsets();
//         var windowTop = scrollElement.scrollTop || document.documentElement.scrollTop;
//         if(!dataElement) windowTop = window.scrollY || document.documentElement.scrollTop;
//         var condition =  windowTop >= scrollOffset;
//         if(scrollOffsetOut > 0) {
//           condition = (windowTop >= scrollOffset) && (window.innerHeight + windowTop < scrollOffsetOut);
//         }
//         backTop.classList.toggle('back-to-top--is-visible', condition);
//         scrolling = false;
//       }
  
//       function updateOffsets() {
//         scrollOffset = getOffset(targetIn, scrollOffsetInit, true);
//         scrollOffsetOut = getOffset(targetOut, scrollOffsetOutInit);
//       }
  
//       function getOffset(target, startOffset, bool) {
//         var offset = 0;
//         if(target) {
//           var windowTop = scrollElement.scrollTop || document.documentElement.scrollTop;
//           if(!dataElement) windowTop = window.scrollY || document.documentElement.scrollTop;
//           var boundingClientRect = target.getBoundingClientRect();
//           offset = bool ? boundingClientRect.bottom : boundingClientRect.top;
//           offset = offset + windowTop;
//         }
//         if(startOffset && startOffset) {
//           offset = offset + parseInt(startOffset);
//         }
//         return offset;
//       }
  
//       function moveFocus(element) {
//         if( !element ) element = document.getElementsByTagName("body")[0];
//         element.focus();
//         if (document.activeElement !== element) {
//           element.setAttribute('tabindex','-1');
//           element.focus();
//         }
//       };
//     }
//   }());