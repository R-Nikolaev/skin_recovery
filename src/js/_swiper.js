import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  loop: "true",

  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiperStock = new Swiper(".swiper_stock", {
  loop: "true",
  slidesPerView: 4,

  // breakpoints: {
  //     0: {
  //         slidesPerView: 3,
  //         slidesPerView: 3,
  //     },
  //     785: {
  //         spaceBetween: 40,
  //         slidesPerView: 3,
  //     },
  //     928: {
  //         spaceBetween: 45,
  //         slidesPerView: 3,
  //     },
  // },

});
const swiperService = new Swiper(".swiper_service", {
  loop: "true",
  slidesPerView: 3,
  spaceBetween: 10,

  // breakpoints: {
  //     0: {
  //         slidesPerView: 3,
  //         slidesPerView: 3,
  //     },
  //     785: {
  //         spaceBetween: 40,
  //         slidesPerView: 3,
  //     },
  //     928: {
  //         spaceBetween: 45,
  //         slidesPerView: 3,
  //     },
  // },
  navigation: {
    nextEl: ".service-next",
    prevEl: ".service-prev",
  },
});
const swiperResult = new Swiper(".swiper_result", {
  loop: "true",
  slidesPerView: 4,
  spaceBetween: 10,

  // breakpoints: {
  //     0: {
  //         slidesPerView: 3,
  //         slidesPerView: 3,
  //     },
  //     785: {
  //         spaceBetween: 40,
  //         slidesPerView: 3,
  //     },
  //     928: {
  //         spaceBetween: 45,
  //         slidesPerView: 3,
  //     },
  // },
});
