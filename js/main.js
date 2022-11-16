let swiperCards = new Swiper(".gallery__cards", {
    loop: true,
    loopedSlides:4,
    cssMode: true,
    effect: 'fade',
});

let swiperThumbs = new Swiper(".gallery__thumbs", {
    loop: true,
    loopedSlides:4,
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

swiperThumbs.controller.control = swiperCards
