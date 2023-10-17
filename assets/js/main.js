import 'boxicons';
import './home';
import './header';

document.fonts.ready.then(() => {
  document.body.classList.add('fonts-loaded');
});

document.querySelector('[data-scroll-to-top]')
  ?.addEventListener('pointerdown', (e) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });