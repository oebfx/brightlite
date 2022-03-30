//меню  
// const trigger = document.querySelector('.trigger');
// const nav = document.querySelector('.full-screen-nav');
// const backdrop = document.querySelector('.backdrop');

// trigger.addEventListener('click', () => nav.classList.add('open-nav'));
// backdrop.addEventListener('click', () => nav.classList.remove('open-nav'));


//слайдер

const swiper = new Swiper('.main_slider', {
    spaceBetween: 30,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        700: {
            slidesPerView: 2,

        },
        1140: {
            slidesPerView: 3,

        }

    },



    // Navigation arrows
    navigation: {

        prevEl: '.main_slider_arrow-prev',
        nextEl: '.main_slider_arrow-next',

    },

});