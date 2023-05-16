import { gsap } from 'gsap';

const sliderImages = [...document.querySelectorAll('[data-slider-image]')];

export const initSliderImages = () => {
  const useImages = sliderImages;

  for (let i = 0; i < useImages.length; i++) {
    const temp = useImages[i] as HTMLElement;
    if (i > 0) {
      gsap.set(temp, { x: '-100%' });
    }
  }
};

export const showNextImage = (curIndex: number, prevIndex: number) => {
  const curImage = sliderImages[curIndex];
  const prevImage = sliderImages[prevIndex];

  const imageAnimation = gsap.timeline();
  imageAnimation.set(curImage, { zIndex: 2, x: '-100%' });
  imageAnimation.set(prevImage, { zIndex: 1 });

  imageAnimation.to(curImage, { duration: 0.8, x: '0%', ease: 'power4.inOut' });

  imageAnimation.set(prevImage, { x: '-100%' });
};

export const showPrevImage = (curIndex: number, prevIndex: number) => {
  const curImage = sliderImages[curIndex];
  const prevImage = sliderImages[prevIndex];

  const imageAnimation = gsap.timeline();
  imageAnimation.set(curImage, { zIndex: 2, x: '100%' });
  imageAnimation.set(prevImage, { zIndex: 1 });

  imageAnimation.to(curImage, { duration: 0.8, x: '0%', ease: 'power4.inOut' });

  imageAnimation.set(prevImage, { x: '100%' });
};
