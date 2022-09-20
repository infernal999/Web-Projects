    // Tabs
    import tabs from './modules/tabs';
     //Modal
    import modal from './modules/modal';
     // Timer
    import timer from './modules/timer';
     // Cards
    import cards from './modules/cards';
     // Calc
    import calc from './modules/calc';
     // Forms
    import forms from './modules/forms';
     // Slider
    import slider from './modules/slider';
    // openmodal
    import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-09-30');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        slide: '.offer__slide',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

    
    // Используем классы для создание карточек меню



    // Forms

 

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({name: 'Alex'}),
    //     headers: {
    //         'Content-type': 'application/json'
    //     }
    // })
    // .then(response => response.json()) // response into object
    // .then(json => console.log(json));

    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(res => console.log(res));


//slider

// my method(bad)
// const prev = document.querySelector('.offer__slider-prev'),
//     next = document.querySelector('.offer__slider-next'),
//     total = document.querySelector('#total'),
//     current = document.querySelector('#current');
    
// let sliderImage = document.querySelector('.offer__slider-wrapper');


// let sliderCounter = 1;

//     prev.addEventListener('click', prevSlider);
//     next.addEventListener('click', nextSlider);

// function changeSliderImage() {
//     if (sliderCounter === 1) {
//         sliderImage.innerHTML = `<div class="offer__slide">
//         <img src="img/slider/food-12.jpg" alt="pepper">
//     </div>`;
//     } else if (sliderCounter === 2) {
//         sliderImage.innerHTML = `<div class="offer__slide">
//         <img src="img/slider/olive-oil.jpg" alt="oil">
//     </div>`;
//     } else if (sliderCounter === 3) {
//         sliderImage.innerHTML = `<div class="offer__slide">
//         <img src="img/slider/paprika.jpg" alt="paprika">
//     </div>`;
//     } else if (sliderCounter === 4) {
//         sliderImage.innerHTML = `<div class="offer__slide">
//         <img src="img/slider/pepper.jpg" alt="pepper">
//     </div>`;
//     }
// }
// function prevSlider() {
//     if (sliderCounter !== 1) {
//         sliderCounter--;
//     } else {
//         sliderCounter = 4;
//     }
//     if (sliderCounter < 10 && sliderCounter !== 0) {
//         current.innerHTML = `0${sliderCounter}`;
//     } else if (sliderCounter !== 0) {
//         current.innerHTML = `${sliderCounter}`;
//     }
//     changeSliderImage();
// }
// function nextSlider() {
//     if (sliderCounter !== 4) {
//         sliderCounter++;
//     } else {
//         sliderCounter = 1;
//     }
//     if (sliderCounter < 10 && sliderCounter !== 0) {
//         current.innerHTML = `0${sliderCounter}`;
//     } else if (sliderCounter !== 0) {
//         current.innerHTML = `${sliderCounter}`;
//     }
//     changeSliderImage();
// }

//masters method slider


    
    
// showSlides(slideIndex);

// if (slides.length < 10) {
//     total.textContent =  `0${slides.length}`;
// } else {
//     total.textContent = slides.length;
// }

// function showSlides(n) {
//     if (n > slides.length) {
//         slideIndex = 1;
//     } else if (n < 1) {
//         slideIndex = slides.length;
//     }

//     slides.forEach(item => item.style.display = 'none');
//     slides[slideIndex - 1].style.display = 'block';

//     if (slides.length < 10) {
//         current.textContent =  `0${slideIndex}`;
//     } else {
//         current.textContent = slideIndex;
//     }
// }
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// prev.addEventListener('click', () => {
//     plusSlides(-1);
// });
// next.addEventListener('click', () => {
//     plusSlides(1);
// });

    // Calc


});