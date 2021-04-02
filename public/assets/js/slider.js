var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  loop: true,
  autoplay: true,
  spaceBetween: 20,
  grabCursor: true,
  breakpoints: {
      1200: {
          slidesPerView: 4,
          loopedSlides: 4,
          spaceBetween: 10
      },
      1024: {
          slidesPerView: 3,
          loopedSlides: 3,
          spaceBetween: 10
      },
      768: {
          slidesPerView: 2,
          loopedSlides: 2,
          spaceBetween: 10
      },
      305: {
          slidesPerView: 1,
          loopedSlides: 1,
          spaceBetween: 20,
      }
  }
});