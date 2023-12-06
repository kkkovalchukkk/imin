'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const mask = IMask(document.querySelector('input[type="tel"]'), {
    mask: '+{7} (000) 000-00-00',
  });

  const formEl = document.querySelector('form');
  const inputEls = formEl.querySelectorAll('input');
  const telInputEl = formEl.querySelector('input[type="tel"]');

  inputEls.forEach((i) =>
    i.addEventListener('input', () => {
      if (!i.validity.valid || !i.value) {
        i.classList.add('invalid');
      } else {
        i.classList.remove('invalid');
      }
    })
  );

  telInputEl.addEventListener('input', () => {
    if (telInputEl.value.length != 18) {
      telInputEl.classList.add('invalid');
    } else {
      telInputEl.classList.remove('invalid');
    }
  });

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = e.target.name;
    const telInput = e.target.tel;
    const emailInput = e.target.email;
    const textInput = e.target.text;

    [nameInput, emailInput, textInput, telInput].forEach((i) => {
      if (!i.validity.valid || !i.value) {
        i.classList.add('invalid');
      }
    });

    if (telInputEl.value.length != 18) {
      telInputEl.classList.add('invalid');
    } else {
      telInputEl.classList.remove('invalid');
    }

    if (
      [nameInput, emailInput, textInput, telInput].some((i) =>
        i.classList.contains('invalid')
      )
    ) {
      return;
    } else {
      e.target.submit();
    }
  });
});
