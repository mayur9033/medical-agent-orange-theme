// aos animation
AOS.init({
    duration: 1200,
});

// ============= navbar ==============
document.addEventListener("DOMContentLoaded", function () {

    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
            everydropdown.addEventListener('hidden.bs.dropdown', function () {
                // after dropdown is hidden, then find all submenus
                this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
                    // hide every submenu as well
                    everysubmenu.style.display = 'none';
                });
            })
        });

        document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
            element.addEventListener('click', function (e) {

                let nextEl = this.nextElementSibling;
                if (nextEl && nextEl.classList.contains('submenu')) {
                    // prevent opening link if link needs to open dropdown
                    e.preventDefault();

                    if (nextEl.style.display == 'block') {
                        nextEl.style.display = 'none';
                    } else {
                        nextEl.style.display = 'block';
                    }

                }
            });
        })
    }
    // end if innerWidth
});
// ============ mobile in dropdown
document.addEventListener("DOMContentLoaded", function () {
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    })
});
// DOMContentLoaded  end

// scrollnav
window.addEventListener('scroll', function () {
    let navbar = document.querySelector('nav');
    if (window.pageYOffset > 25) {
        navbar.classList.add('scroll-nav');
    }
    else {
        navbar.classList.remove('scroll-nav');
    }
});


// client slider
new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 120
      }
    }
  });
// service slider
new Swiper('.service-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 120
      }
    }
  });
// testimonial slider
new Swiper('.testimonial-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    },
    navigation: {
        nextEl: '.testimonial-slider .swiper-btn-next',
        prevEl: '.testimonial-slider .swiper-btn-prev',
    }
  });

//   =============== counter ==================

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 100, 3000);
    counter("count2", 100, 10, 2500);
    counter("count3", 0,8, 3000);
    counter("count4", 0,99, 3000);
   });