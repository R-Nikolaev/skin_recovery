import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper_hero", {
  slidesPerView: "auto",
  loop: "true",

  pagination: {
    el: ".hero-pagination",
  },
  navigation: {
    nextEl: ".hero-next",
    prevEl: ".hero-prev",
  },
});
const swiperStock = new Swiper(".swiper_stock", {
  slidesPerView: 4,

  breakpoints: {
      0: {
          slidesPerView: 3,
      },
      785: {
          slidesPerView: 3.5,
      },
      928: {
          slidesPerView: 4,
          spaceBetween: 20,
      },
  },

});
const swiperService = new Swiper(".swiper_service", {
  loop: "true",
  slidesPerView: 3,
  spaceBetween: 10,

  breakpoints: {
    0: {
        slidesPerView: 2,
    },
    785: {
        slidesPerView: 2,
    },
    928: {
        slidesPerView: 3,
    },
},
  navigation: {
    nextEl: ".service-next",
    prevEl: ".service-prev",
  },
});
const swiperResult = new Swiper(".swiper_result", {
  slidesPerView: 4,
  spaceBetween: 10,

  breakpoints: {
    0: {
        slidesPerView: 3,
    },
    785: {
        slidesPerView: 3,
    },
    928: {
        slidesPerView: 4,
    },
},
});
