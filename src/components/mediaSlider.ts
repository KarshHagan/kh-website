import { initSliderImages, showNextImage, showPrevImage } from '$motion/mediaSliderMotion';

export const mediaSlider = () => {
  let curIndex = 0;
  let prevIndex = 0;
  const countIndex = [...document.querySelectorAll('[data-slider-image]')].length;
  initSliderImages();

  const sliderControls = [...document.querySelectorAll('.media-slider_button')];
  const prevControl = sliderControls[0] as HTMLElement;
  const nextControl = sliderControls[1] as HTMLElement;

  nextControl.addEventListener('click', () => {
    // console.log('next');
    curIndex += 1;
    prevIndex = curIndex - 1;

    if (curIndex > countIndex - 1) {
      curIndex = 0;
    }
    showNextImage(curIndex, prevIndex);
  });

  prevControl.addEventListener('click', () => {
    curIndex -= 1;
    prevIndex = curIndex + 1;
    if (curIndex < 0) {
      curIndex = countIndex - 1;
    }
    showPrevImage(curIndex, prevIndex);
  });
};
