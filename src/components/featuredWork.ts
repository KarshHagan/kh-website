import {
  featuredCursorReveal,
  featuredCursorUpdate,
  featuredCursorYUpdate,
} from '$motion/cursorMotion';
import { showNext, showPrev } from '$motion/featuredWorkMotion';

export const featuredWork = () => {
  const featuredWrap = document.querySelector('.home-featured_mask') as HTMLElement;
  const wrapperWidth = featuredWrap.offsetWidth;

  // Cursor Effects
  // --------------
  let curCursorType = 'prev';
  const revealAnimation = featuredCursorReveal();
  featuredWrap.addEventListener('mouseenter', (e) => {
    revealAnimation.play();
    const mouseX = e.pageX;

    if (mouseX <= wrapperWidth / 2) {
      curCursorType = 'prev';
    } else {
      curCursorType = 'next';
    }
    featuredCursorUpdate(curCursorType);
  });
  featuredWrap.addEventListener('mouseleave', (e) => {
    revealAnimation.reverse();
  });

  featuredWrap.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX;
    const mouseYMovement = e.movementY;

    // console.log('mouse', mouseYMovement);
    featuredCursorYUpdate(curCursorType, mouseYMovement);

    if (mouseX <= wrapperWidth / 2) {
      const setCursor = 'prev';
      if (setCursor !== curCursorType) {
        curCursorType = setCursor;
        featuredCursorUpdate(curCursorType);
      }
    } else {
      const setCursor = 'next';
      if (setCursor !== curCursorType) {
        curCursorType = setCursor;
        featuredCursorUpdate(curCursorType);
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
