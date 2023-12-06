'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const gallerySlider = new Swiper('.gallery-section__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 25,
    navigation: {
      nextEl: '.gallery-section__navigation-btn-right',
      prevEl: '.gallery-section__navigation-btn-left',
    },
  });
});
