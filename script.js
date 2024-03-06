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

// Usage: codyhouse.co/license
(function() {
    var backTop = document.getElementsByClassName('js-back-to-top')[0];
    if( backTop ) {
      var dataElement = backTop.getAttribute('data-element');
      var scrollElement = dataElement ? document.querySelector(dataElement) : window;
      var scrollOffsetInit = parseInt(backTop.getAttribute('data-offset-in')) || parseInt(backTop.getAttribute('data-offset')) || 0, //show back-to-top if scrolling > scrollOffset
        scrollOffsetOutInit = parseInt(backTop.getAttribute('data-offset-out')) || 0, 
        scrollOffset = 0,
        scrollOffsetOut = 0,
        scrolling = false;
  
      var targetIn = backTop.getAttribute('data-target-in') ? document.querySelector(backTop.getAttribute('data-target-in')) : false,
        targetOut = backTop.getAttribute('data-target-out') ? document.querySelector(backTop.getAttribute('data-target-out')) : false;
  
      updateOffsets();
      
      backTop.addEventListener('click', function(event) {
        event.preventDefault();
        if(!window.requestAnimationFrame) {
          scrollElement.scrollTo(0, 0);
        } else {
          dataElement ? scrollElement.scrollTo({top: 0, behavior: 'smooth'}) : window.scrollTo({top: 0, behavior: 'smooth'});
        } 
        moveFocus(document.getElementById(backTop.getAttribute('href').replace('#', '')));
      });
      
      checkBackToTop();
      if (scrollOffset > 0 || scrollOffsetOut > 0) {
        scrollElement.addEventListener("scroll", function(event) {
          if( !scrolling ) {
            scrolling = true;
            (!window.requestAnimationFrame) ? setTimeout(function(){checkBackToTop();}, 250) : window.requestAnimationFrame(checkBackToTop);
          }
        });
      }
  
      function checkBackToTop() {
        updateOffsets();
        var windowTop = scrollElement.scrollTop || document.documentElement.scrollTop;
        if(!dataElement) windowTop = window.scrollY || document.documentElement.scrollTop;
        var condition =  windowTop >= scrollOffset;
        if(scrollOffsetOut > 0) {
          condition = (windowTop >= scrollOffset) && (window.innerHeight + windowTop < scrollOffsetOut);
        }
        backTop.classList.toggle('back-to-top--is-visible', condition);
        scrolling = false;
      }
  
      function updateOffsets() {
        scrollOffset = getOffset(targetIn, scrollOffsetInit, true);
        scrollOffsetOut = getOffset(targetOut, scrollOffsetOutInit);
      }
  
      function getOffset(target, startOffset, bool) {
        var offset = 0;
        if(target) {
          var windowTop = scrollElement.scrollTop || document.documentElement.scrollTop;
          if(!dataElement) windowTop = window.scrollY || document.documentElement.scrollTop;
          var boundingClientRect = target.getBoundingClientRect();
          offset = bool ? boundingClientRect.bottom : boundingClientRect.top;
          offset = offset + windowTop;
        }
        if(startOffset && startOffset) {
          offset = offset + parseInt(startOffset);
        }
        return offset;
      }
  
      function moveFocus(element) {
        if( !element ) element = document.getElementsByTagName("body")[0];
        element.focus();
        if (document.activeElement !== element) {
          element.setAttribute('tabindex','-1');
          element.focus();
        }
      };
    }
  }());