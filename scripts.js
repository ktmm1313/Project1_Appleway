// ---------- BEGIN BASIC PAGE ----------

// const navBurger = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.main-nav');

//     burger.addEventListener('click', () => {
//         nav.classList.toggle('.main-nav-active')
//     });
// }

// navSlide();

// ---------- END BASIC PAGE ----------

// ---------- CAROUSEL FLOW ----------

const carouselSlide = document.querySelector('.carousel-slide')
const carouselImage = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

// Image Counter
let counter = 1;
const size = carouselImage[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listeners

nextButton.addEventListener('click',() => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';    
});

prevButton.addEventListener('click',()=>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';    
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';    
    };
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';    
    };
});



