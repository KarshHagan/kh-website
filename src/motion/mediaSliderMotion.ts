import { gsap } from 'gsap';

const sliderImages = [...document.querySelectorAll('[data-slider-image]')];
// sliderImages.reverse();

export const initSliderImages = () => {
  const useImages = sliderImages;

  const checkSliderType = sliderImages[0] as HTMLElement;
  if (checkSliderType.dataset.sliderImage === 'featured') {
    // useImages.reverse();
  }

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

  imageAnimation.set(curImage, { zIndex: 1 });
  imageAnimation.set(prevImage, { zIndex: 0 });
  imageAnimation.to(curImage, { duration: 0.6, x: '0%', ease: 'expo.inOut' });

  imageAnimation.set(prevImage, { x: '-100%' });
};

export const showPrevImage = (curIndex: number, prevIndex: number) => {
  const curImage = sliderImages[curIndex];
  const prevImage = sliderImages[prevIndex];

  const imageAnimation = gsap.timeline();
  imageAnimation.set(curImage, { zIndex: 1 });
  imageAnimation.set(prevImage, { zIndex: 0 });
  imageAnimation.to(curImage, { duration: 1, x: '0%', ease: 'expo.inOut' });
  imageAnimation.set(prevImage, { x: '-100%' });
};
