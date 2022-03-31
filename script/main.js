//меню  


document.querySelector('.mobile-menu').addEventListener('click', () => {

    document.querySelector('.nav-items').classList.toggle('active');

})
//соцсети
document.querySelector('.footer-social-mobile').addEventListener('click', () => {

    document.querySelector('.footer-social__items').classList.toggle('active');

})




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