//меню  
// тут мы вешаем на кнопку МЕНЮ событие которое при клике на кнопку
// добавляет menu_mobile некий класс, в данном случае это active

document.querySelector('.mobile-menu').addEventListener('click touchstart ', () => {

    document.querySelector('.nav-items').classList.toggle('active');

});




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
