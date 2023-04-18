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
