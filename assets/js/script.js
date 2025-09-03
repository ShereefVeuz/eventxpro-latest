//// loader
document.addEventListener('DOMContentLoaded', function() {
      const loader = document.querySelector('.loader');

      window.addEventListener('load', function() {
          // Keep loader for 1.5s
          setTimeout(() => {
              loader.classList.add('fade-out'); // start fading
              
              // Remove completely after fade finishes
              loader.addEventListener('transitionend', () => {
                  loader.remove(); // ensures it's gone from DOM
              }, { once: true });

          }, 1500);
      });
  });
//// END loader

//// mobile header
const menuButton = document.querySelector('.menu-button');
const menuOverlay = document.querySelector('.menu-overlay');
const menuItems = document.querySelectorAll('.menu a');
const html = document.documentElement;
const body = document.body;
 
let isOpen = false;
 
// Function to check if it's mobile view
function isMobileView() {
  return window.innerWidth <= 992;
}
 
// Function to open the menu
function openMenu() {
  html.classList.add('no-scroll');
  body.classList.add('no-scroll');
 
  // Slide in menu from right
  gsap.to(menuOverlay, {
    duration: 0.5,
    right: '0%',
    ease: 'power3.out'
  });
 
  // Animate menu links
  gsap.fromTo(menuItems, {
    opacity: 0,
    x: 20
  }, {
    duration: 0.5,
    opacity: 1,
    x: 0,
    stagger: 0.1,
    delay: 0.2,
    ease: 'power3.out'
  });
}
 
// Function to close the menu
function closeMenu() {
  html.classList.remove('no-scroll');
  body.classList.remove('no-scroll');
 
  // Animate links out
  gsap.to(menuItems, {
    duration: 0.3,
    opacity: 0,
    x: 20,
    stagger: -0.1
  });
 
  // Slide out menu to the right
  gsap.to(menuOverlay, {
    duration: 0.5,
    right: isMobileView() ? '-100%' : '-50%',
    delay: 0.3,
    ease: 'power3.in'
  });
}
 
// Toggle menu on button click
menuButton.addEventListener('click', () => {
  if (!isOpen) {
    openMenu();
  } else {
    closeMenu();
  }
  isOpen = !isOpen;
  menuButton.classList.toggle('open', isOpen);
});


const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    
    const parent = toggle.closest('.menu-dropdown');

    // Close all other dropdowns
    document.querySelectorAll('.menu-dropdown').forEach(item => {
      if (item !== parent) {
        item.classList.remove('open');
      }
    });

    // Toggle the clicked one
    parent.classList.toggle('open');
  });
});


// navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".main-header");
  if (window.scrollY > 200) {
      navbar.classList.add("fixed");
  } else {
      navbar.classList.remove("fixed");
  }
});



// testimonials
$('.testimonial-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    992: {
      items: 1
    },
    1000: {
      items: 2
    }
  }
});

$('.client-carousel').owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    375: {
      items: 2
    },
    600: {
      items: 3
    },
    800: {
      items: 4
    }
  }
});

// innovative feature
$('.innovative-carousel').on('initialized.owl.carousel changed.owl.carousel', function(event) {
  if (!event.namespace) {
    return;
  }
  var carousel = event.relatedTarget;
  var current = carousel.relative(carousel.current()) + 1; // current index (1-based)
  var total = carousel.items().length; // total items
  $('.item-counter').text(current.toString().padStart(2, '0') + ' / ' + total.toString().padStart(2, '0'));
}).owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  // navText: [
  //     "<i class='fa fa-arrow-left'></i>",
  //     "<i class='fa fa-arrow-right'></i>"
  //   ],
  responsive: {
    0: {
      items: 1
    },
    375: {
      items: 2
    },
    600: {
      items: 3
    },
    800: {
      items: 4
    }
  }
});


$('.empower-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    450: {
      items: 2
    },
    700: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
});


// anim-btn-1
$(function () {
  $('.anim-btn-1')
    .on('mouseenter', function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('span').css({
        top: relY,
        left: relX
      });
    })
    .on('mouseout', function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find('span').css({
        top: relY,
        left: relX
      });
    });
});

// events
const track = document.querySelector('.gallery-track');
const leftBtn = document.querySelector('.gallery-btn.left');
const rightBtn = document.querySelector('.gallery-btn.right');
const slides = document.querySelectorAll('.gallery-slide');
let currentIndex = 0;

function goToSlide(index) {
  gsap.to(track, {
    x: -index * window.innerWidth,
    duration: 1,
    ease: "power2.inOut"
  });
}

rightBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  goToSlide(currentIndex);
});

leftBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  goToSlide(currentIndex);
});


// events popup
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");
const prevBtn = document.querySelector(".lightbox-btn.prev");
const nextBtn = document.querySelector(".lightbox-btn.next");

let currentImageIndex = 0;
let allImages = [];
// Collect all bg-imgs into an array
allImages = Array.from(document.querySelectorAll(".bg-img"));

// // Open lightbox on click
allImages.forEach((imgWrapper, index) => {
  const innerImg = imgWrapper.querySelector("img");
  imgWrapper.addEventListener("click", () => {
    lightboxImg.src = innerImg.src; 
    lightbox.style.display = "flex";
    currentImageIndex = index;
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Prev image
prevBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
  lightboxImg.src = allImages[currentImageIndex].querySelector("img").src;
});

// Next image
nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % allImages.length;
  lightboxImg.src = allImages[currentImageIndex].querySelector("img").src;
});




// // events scroll after 5 second
// setInterval(() => {
//   rightBtn.click();
// }, 5000);

// image auto scroll
document.addEventListener('DOMContentLoaded', () => {
  let autoScrollId = null;

  function startAutoScroll() {
    if (autoScrollId) return; // don't stack intervals
    autoScrollId = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      goToSlide(currentIndex);
    }, 5000);
  }

  function stopAutoScroll() {
    if (!autoScrollId) return;
    clearInterval(autoScrollId);
    autoScrollId = null;
  }
  // --- Stop/resume ONLY when hovering images ---
  document.querySelectorAll('.gallery-wrapper .bg-img').forEach(img => {
    img.addEventListener('mouseenter', stopAutoScroll);
    img.addEventListener('mouseleave', startAutoScroll);
  });

  // --- Stop when popup is open; resume on close ---
  const popup = document.querySelector('.image-popup'); // your lightbox/modal root
  if (popup) {
    // Generic custom events
    popup.addEventListener('show', stopAutoScroll);
    popup.addEventListener('hide', startAutoScroll);
    // Bootstrap 5 modal events (if you’re using it)
    popup.addEventListener('shown.bs.modal', stopAutoScroll);
    popup.addEventListener('hidden.bs.modal', startAutoScroll);
  }

  // kick off
  startAutoScroll();
});




// // carousel indicator
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carouselExampleIndicators");
  const footerPreview = document.querySelector(".carousel-left-item video");
  const footerTitle = document.querySelector(".carousel-left h6");

  // Collect all carousel items
  const slides = carousel.querySelectorAll(".carousel-item");

  // Collect video sources & titles from each slide
  let slideData = [];
  slides.forEach((slide, i) => {
    const video = slide.querySelector("video source");
    const title = slide.querySelector(".carousel-caption h5")?.innerText || `Slide ${i+1}`;
    slideData.push({ src: video.getAttribute("src"), title: title });
  });

  // Update footer preview
  function updateFooter(nextIndex) {
    footerPreview.src = slideData[nextIndex].src;
    footerPreview.parentElement.querySelector("video").load();
    footerTitle.innerText = slideData[nextIndex].title;
  }

  // On carousel slide event
  carousel.addEventListener("slide.bs.carousel", function (event) {
    const nextIndex = event.to; // upcoming slide index
    updateFooter(nextIndex);
  });

  // Initialize with first next slide
  updateFooter(1 % slideData.length);
});





//// portfolio
//Horizontal Scroll Galleries
if (document.getElementById("portfolio")) {
  const horizontalSections = gsap.utils.toArray(".horiz-gallery-wrapper");

  horizontalSections.forEach(function (sec, i) {
    const pinWrap = sec.querySelector(".horiz-gallery-strip");

    let pinWrapWidth;
    let horizontalScrollLength;

    function refresh() {
      pinWrapWidth = pinWrap.scrollWidth;
      horizontalScrollLength = pinWrapWidth - window.innerWidth;
    }

    refresh();
    // Pinning and horizontal scrolling
    gsap.to(pinWrap, {
      scrollTrigger: {
        scrub: true,
        trigger: sec,
        pin: sec,
        start: "center center",
        // end: () => `+=${pinWrapWidth}`,
        end: () => `+=${pinWrapWidth - window.innerWidth}`,
        invalidateOnRefresh: true
      },
      x: () => -horizontalScrollLength,
      ease: "none"
    });

    ScrollTrigger.addEventListener("refreshInit", refresh);
  });
}





//// loader
// document.addEventListener('DOMContentLoaded', function () {
//   const loader = document.querySelector('.loader');

//   // Hide loader after content loads
//   window.addEventListener('load', function () {
//     setTimeout(() => {
//       loader.style.display = 'none';

//     }, 1500); // Adjust time as needed
//   });
// });
//// END pre loader






