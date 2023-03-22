import {
  cursorArrowReveal,
  cursorArrowSliderChange,
  cursorArrowSliderReset,
  cursorArrowYMovement,
  cursorButtonIn,
  cursorButtonOut,
} from '$motion/cursorMotion';
import {
  initSlider,
  showNext,
  showPrev,
  textYMovement,
  viewMoreHoverIn,
  viewMoreHoverOut,
} from '$motion/featuredWorkMotion';

export const featuredWork = () => {
  const featuredWrap = document.querySelector('.home-featured_cursor-wrap') as HTMLElement;
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
    // console.log(mouseYMovement);

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
  let curIndex = 0;
  let prevIndex = 0;
  const countIndex = [...document.querySelectorAll('.home-featured_image-item')].length;
  initSlider();

  featuredWrap.addEventListener('click', (e) => {
    const clickX = e.pageX;

    if (clickX <= wrapperWidth / 2) {
      curIndex -= 1;
      prevIndex = curIndex + 1;
      if (curIndex < 0) {
        curIndex = countIndex - 1;
      }
      showPrev(curIndex, prevIndex);
    } else {
      curIndex += 1;
      prevIndex = curIndex - 1;

      if (curIndex > countIndex - 1) {
        curIndex = 0;
      }
      showNext(curIndex, prevIndex);
    }
  });

  // BG Text
  // --------------
  window.addEventListener('wheel', (e) => {
    // console.log(e.deltaY * 0.2);
    // textYMovement(e.deltaY);
  });

  // View More
  // --------------
  const largeTextLink = document.querySelector('.text-link_large') as HTMLElement;

  largeTextLink.addEventListener('mouseenter', (e) => {
    const target = e.target as HTMLElement;
    cursorButtonIn(2.5);
    viewMoreHoverIn(target);
  });
  largeTextLink.addEventListener('mouseleave', (e) => {
    const target = e.target as HTMLElement;
    cursorButtonOut();
    viewMoreHoverOut(target);
  });
};
