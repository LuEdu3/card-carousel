const swiper = new Swiper('.swipwer', {
    direction:'vertical',
    loop: true,
    spaceBetween: 3,

    pagination: {
        el: '.swipwr-pagination',
        clickable: true,
        dynamicBullets: true
    },
    navegation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
})