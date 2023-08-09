/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// scripts.js
// scripts.js
// ... โค้ดต้นทางเหมือนเดิม ...

var animateHeaderImages = function () {
    const headerImage = document.querySelector('#headerImage');
    const headerBg = document.querySelector('#headerBg');
  
    if (headerImage && headerBg) {
      // Calculate the new background-position
      const newPosition = (parseFloat(headerImage.style.backgroundPosition) || 0) - 100;
  
      // Apply the new background-position
      headerImage.style.backgroundPosition = `${newPosition}% 0`;
      headerBg.style.backgroundPosition = `${newPosition}% 0`;
    }
  };
  
  // Animate header images every 3 seconds (3000 milliseconds)
  setInterval(animateHeaderImages, 3000);
  


