// $(document).ready(function() {
//     $(".num").counterUp({
//         delay: 10,
//         time: 1200
//     });
// });
let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);

    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;

        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});


const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});
