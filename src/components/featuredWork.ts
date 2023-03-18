import {
  cursorArrowReveal,
  cursorArrowSliderChange,
  cursorArrowSliderReset,
  cursorArrowYMovement,
} from '$motion/cursorMotion';
import { showNext, showPrev } from '$motion/featuredWorkMotion';

export const featuredWork = () => {
  const featuredWrap = document.querySelector('.home-featured_mask') as HTMLElement;
  const wrapperWidth = featuredWrap.offsetWidth;

  // Cursor Effects
  // --------------
  let curCursorType = 'next';
  const cursorReveal = cursorArrowReveal();
  featuredWrap.addEventListener('mouseenter', (e) => {
    cursorReveal.play();
    const mouseX = e.pageX;

    if (mouseX <= wrapperWidth / 2) {
      curCursorType = 'prev';
    } else {
      curCursorType = 'next';
    }
    cursorArrowSliderChange(curCursorType);
  });
  featuredWrap.addEventListener('mouseleave', () => {
    cursorReveal.reverse();
    cursorArrowSliderReset();
  });

  featuredWrap.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX;
    const mouseYMovement = e.movementY;

    // console.log('mouse', mouseYMovement);
    cursorArrowYMovement(curCursorType, mouseYMovement);

    if (mouseX <= wrapperWidth / 2) {
      const setCursor = 'prev';
      if (setCursor !== curCursorType) {
        curCursorType = setCursor;
        cursorArrowSliderChange(curCursorType);
      }
    } else {
      const setCursor = 'next';
      if (setCursor !== curCursorType) {
        curCursorType = setCursor;
        cursorArrowSliderChange(curCursorType);
      }
    }
  });

  // Content Slider
  // --------------
  let featuredCount = 0;
  featuredWrap.addEventListener('click', (e) => {
    const clickX = e.pageX;

    if (clickX <= wrapperWidth / 2) {
      if (featuredCount > 0) {
        featuredCount -= 1;
        showPrev(featuredCount);
      }
      // console.log('prev');
    } else {
      // console.log('next');
      if (featuredCount < 2) {
        featuredCount += 1;
        showNext(featuredCount);
      }
    }
  });
};
