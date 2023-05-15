const swiper = new Swiper(".swiper_hero", {
  slidesPerView: "auto",
  speed: 1000,

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
  spaceBetween: 20,

  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    785: {
      slidesPerView: 3.5,
    },
    928: {
      slidesPerView: 4,
    },
  },
});
const swiperService = new Swiper(".swiper_service", {
  loop: "true",
  slidesPerView: 3,
  spaceBetween: 20,

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
const swiperService2 = new Swiper(".swiper_service2", {
  loop: "true",
  slidesPerView: 4,
  spaceBetween: 20,

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
  navigation: {
    nextEl: ".service-next",
    prevEl: ".service-prev",
  },
});
const swiperResult = new Swiper(".swiper_result", {
  slidesPerView: 4,
  spaceBetween: 20,

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
  navigation: {
    nextEl: ".result-next",
    prevEl: ".result-prev",
  },
});

const sliderThumbs = new Swiper(".slider_thumbs", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 80,
  freeMode: true,
  watchSlidesProgress: true,
});
const sliderImages = new Swiper(".slider_images", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".product_item-next",
    prevEl: ".product_item-prev",
  },
  thumbs: {
    swiper: sliderThumbs,
  },
});
