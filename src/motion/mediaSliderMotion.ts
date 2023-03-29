import { gsap } from 'gsap';

const sliderImages = [...document.querySelectorAll('[data-slider-image]')];

export const initSliderImages = () => {
  console.log('init slider images');
  for (let i = 0; i < sliderImages.length; i++) {
    const temp = sliderImages[i] as HTMLElement;
    if (i > 0) {
      gsap.set(temp, { x: '-100%' });
    }
  }
};
