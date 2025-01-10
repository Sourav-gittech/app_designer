// On Scroll Function
function navMenu() {
    let navBar = document.querySelector('.navbar-sticky');
    let scrollTopButton = document.querySelector('#scrollUp');

    window.onscroll = function () {
        let scroll = document.documentElement.scrollTop;
        if (scroll >= 120) {
            navBar.classList.add('navbar-sticky-moved-up');
        }
        else {
            navBar.classList.remove('navbar-sticky-moved-up');
        }

        // Apply Transition
        if (scroll >= 250) {
            navBar.classList.add('navbar-sticky-transitioned');
            scrollTopButton.classList.add('scrollActive');
        }
        else {
            navBar.classList.remove('navbar-sticky-transitioned');
            scrollTopButton.classList.remove('scrollActive');
        }

        // Sticky ON
        if (scroll >= 500) {
            navBar.classList.add('navbar-sticky-on');
        }
        else {
            navBar.classList.remove('navbar-sticky-on');
        }
    }
}

navMenu();

// Counter Design
document.addEventListener('DOMContentLoaded', () => {
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
    counter('count1', 0, 10, 2000);
    counter('count2', 100, 20, 3000);
    counter('count3', 0, 30, 4000);
    counter('count4', 0, 10, 2000);
});

// app screenshots
const swiper = new Swiper(".app-screen", {
    effect: "coverflow",
    loop: true,
    autoplaySpeed: 3000,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    paginationClickable: true,
    coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 150,
        modifier: 1.5,
        slideShadows: false
    }
});

// Side Navigation Bar Close while Clicking On Navigation Link
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})