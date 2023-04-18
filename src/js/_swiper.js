import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  loop:'true',

  pagination: {
    el: '.intro__slide__pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.intro__slide__btn--next',
    prevEl: '.intro__slide__btn--prev',
  },

});

