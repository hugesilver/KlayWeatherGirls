const swipergallery = new Swiper('.swiper-gallery', {
    speed:2500,
    loop:true,
    spaceBetween:40,
    slidesPerView:4.5,
    freemode:true,
    centeredSlides:true,
    centeredSlidesBounds:true,
    autoplay:{
        delay:1,
        disableOnInteraction:false,
    },
    breakpoints:{
        1281:{
            slidesPerView:4.5,
        },
        981:{
            slidesPerView:3.5,
        },
        761:{
            slidesPerView:2.5,
        },
        0:{
            slidesPerView:1.5,
        }
    }
});

const swipertrailer = new Swiper('.swiper-trailer', {
    speed:700,
    loop:true,
    slidesPerView:1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});