import { CountUp } from './countup.js';
('use strict');

window.addEventListener('DOMContentLoaded', () => {
  const enableCounters = () => {
    const counter1 = document.getElementById('target1');
    const counter2 = document.getElementById('target2');
    const counter3 = document.getElementById('target3');

    if (
      counter1.classList.contains('done') &&
      counter2.classList.contains('done') &&
      counter3.classList.contains('done')
    ) {
      observer.disconnect();
    }

    new CountUp('target1', 22, {
      separator: '',
      duration: 4,
    }).start();
    counter1.classList.add('done');
    new CountUp('target2', 1000, {
      separator: '',
      duration: 4,
    }).start();
    counter2.classList.add('done');
    new CountUp('target3', 220000, {
      separator: '',
      duration: 4,
    }).start();
    counter3.classList.add('done');
  };
  const options = {
    threshold: 0.01,
  };
  const observer = new IntersectionObserver(enableCounters, options);

  const counterEls = document.querySelector('.animated-counter');

  observer.observe(counterEls);
});
