import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

gsap.registerPlugin(InertiaPlugin);

export const draggableSlider = () => {
  const sliderContainer = document.querySelector('.about-team_wrapper') as HTMLElement;
  const cardContainer = document.querySelector('.about-team_list') as HTMLElement;

  let cursorX: number;
  let isPressed = false;

  sliderContainer.addEventListener('mousedown', (e) => {
    isPressed = true;
    cursorX = e.offsetX - cardContainer.offsetLeft;

    console.log(cursorX, cardContainer.offsetLeft);
  });

  window.addEventListener('mouseup', () => {
    isPressed = false;
  });

  sliderContainer.addEventListener('mousemove', (e) => {
    if (!isPressed) return;
    e.preventDefault();

    gsap.to(cardContainer, { left: e.offsetX - cursorX + 'px' });
    boundSlides();
    // cardContainer.style.left = e.offsetX - cursorX + 'px';
    // console.log('cursor', cursorX, 'offset', e.offsetX);
  });

  function boundSlides() {
    const containerRect = sliderContainer.getBoundingClientRect();
    const cardsRect = cardContainer.getBoundingClientRect();
    // console.log(cardsRect);
    if (parseInt(cardContainer.style.left) > 0) {
      console.log('set 0');
      //   cardContainer.style.left = 0 + 'px';
      gsap.to(cardContainer, { left: 0, ease: 'power4.out' });
    } else if (cardsRect.right < containerRect.right) {
      //   cardContainer.style.left = -(cardsRect.width - containerRect.width) + 'px';
      gsap.to(cardContainer, {
        left: -(cardsRect.width - containerRect.width),
        ease: 'power4.out',
        // inertia: {}
      });
    }
  }
};
