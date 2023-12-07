'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const overlayEl = document.querySelector('.overlay');
  const headerEl = document.querySelector('.header');
  const burgerBtnEl = document.querySelector('.header__burger-btn');
  const overlayNavLinkEls = overlayEl.querySelectorAll('.overlay__nav-link');
  const overlayTelLinkEl = overlayEl.querySelector('.overlay__tel-link');

  burgerBtnEl.addEventListener('click', () => {
    if (headerEl.classList.contains('header--burger')) {
      headerEl.classList.remove('header--burger');
      overlayEl.classList.remove('active');
      document.body.classList.remove('no-scroll');
    } else {
      headerEl.classList.add('header--burger');
      overlayEl.classList.add('active');
      document.body.classList.add('no-scroll');
    }
  });

  overlayNavLinkEls.forEach((link) =>
    link.addEventListener('click', () => {
      headerEl.classList.remove('header--burger');
      overlayEl.classList.remove('active');
      document.body.classList.remove('no-scroll');
    })
  );
  overlayTelLinkEl.addEventListener('click', () => {
    headerEl.classList.remove('header--burger');
    overlayEl.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});
