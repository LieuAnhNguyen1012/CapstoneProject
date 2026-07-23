const counters = document.querySelectorAll(".counter");
const aboutStats = document.querySelector(".about-stats");

function runCounter() {
    counters.forEach(function (counter) {
        const target = Number(counter.dataset.target);
        let current = 0;
        const step = Math.ceil(target / 100);

        const timer = setInterval(function () {
            current += step;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            counter.innerText = current;
        }, 20);
    });
}

const observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
        runCounter();
    } else {
        counters.forEach(function (counter) {
            counter.innerText = 0;
        });
    }
});

observer.observe(aboutStats);

$(document).ready(function () {
    $(".testimonials-carousel").owlCarousel({
        items: 2,
        margin: 30,
        loop: true,
        nav: false,
        dots: true,
        autoplay: false,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            980: {
                items: 1
            },
            981: {
                items: 2
            }
        }
    });
});

// Lấy nút Back to Top
const moveTopButton = document.getElementById("movetop");

// Kiểm tra vị trí cuộn trang
window.addEventListener("scroll", function () {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        moveTopButton.style.display = "block";
    } else {
        moveTopButton.style.display = "none";
    }
});

// Cuộn lên đầu trang
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}