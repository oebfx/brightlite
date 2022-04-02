//меню 
const mobile_menu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.nav-items');
const toggleMenu = function () {
    menu.classList.toggle('active');
}


mobile_menu.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleMenu();
});


document.addEventListener('click', function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == mobile_menu;
    const menu_is_active = menu.classList.contains('active');

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }


});


//соцсети
const footer_social_mobile = document.querySelector('.footer-social-mobile');
const social = document.querySelector('.footer-social__items');
const toggleSocial = function () {
    social.classList.toggle('active');
    footer_social_mobile.classList.toggle('active');
}


footer_social_mobile.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleSocial();
});

document.addEventListener('click', function (e) {
    const targets = e.target;
    const its_social = targets == social || social.contains(targets);
    const its_footer_social = targets == footer_social_mobile;
    const footer_social_is_active = social.classList.contains('active');

    if (!its_social && !its_footer_social && footer_social_is_active) {
        toggleSocial();
    }
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



    // стрелки навигации
    navigation: {

        prevEl: '.main_slider_arrow-prev',
        nextEl: '.main_slider_arrow-next',

    },

});