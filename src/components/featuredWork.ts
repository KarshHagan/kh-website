import {
  cursorArrowSliderChange,
  cursorArrowYMovement,
  cursorIconReset,
} from '$motion/cursorMotion';
import {
  initSliderContent,
  showNextContent,
  showPrevContent,
  viewMoreHoverIn,
  viewMoreHoverOut,
} from '$motion/featuredWorkMotion';
import { initSliderImages, showNextImage, showPrevImage } from '$motion/mediaSliderMotion';

export const featuredWork = () => {
  const featuredWrap = document.querySelector('.home-featured_cursor-wrap') as HTMLElement;
  const wrapperWidth = featuredWrap.offsetWidth;

  // SLider Cursor Effects
  // ---------------------
  let curCursorType = 'next';
  featuredWrap.addEventListener('mouseenter', (e) => {
    const mouseX = e.pageX;

    if (mouseX <= wrapperWidth / 2) {
      curCursorType = 'prev';
    } else {
      curCursorType = 'next';
    }
    cursorArrowSliderChange(curCursorType);
  });
  featuredWrap.addEventListener('mouseleave', () => {
    cursorIconReset();
  });

  featuredWrap.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX;
    const mouseYMovement = e.movementY;
    let setCursor = 'default';

    if (mouseX <= wrapperWidth / 2) {
      setCursor = 'rotate';
      if (setCursor !== curCursorType) {
        curCursorType = setCursor;
        cursorArrowSliderChange(curCursorType);
      }
    } else {
      const setCursor = 'default';
      if (setCursor !== curCursorType) {
        curCursorType = setCursor;
        cursorArrowSliderChange(curCursorType);
      }
    }

    cursorArrowYMovement(setCursor, mouseYMovement);
  });

  // Content Slider
  // --------------
  let curIndex = 0;
  let prevIndex = 0;
  const countIndex = [...document.querySelectorAll('.home-featured_image-item')].length;
  initSliderContent();
  initSliderImages();

  featuredWrap.addEventListener('click', (e) => {
    const clickX = e.pageX;

    if (clickX <= wrapperWidth / 2) {
      curIndex -= 1;
      prevIndex = curIndex + 1;
      if (curIndex < 0) {
        curIndex = countIndex - 1;
      }
      showPrevImage(curIndex, prevIndex);
      showPrevContent(curIndex, prevIndex);
    } else {
      curIndex += 1;
      prevIndex = curIndex - 1;

      if (curIndex > countIndex - 1) {
        curIndex = 0;
      }
      showNextImage(curIndex, prevIndex);
      showNextContent(curIndex, prevIndex);
    }
  });

  // View More
  // --------------
  const largeTextLink = document.querySelector('.text-link_large') as HTMLElement;

  largeTextLink.addEventListener('mouseenter', (e) => {
    const target = e.target as HTMLElement;
    viewMoreHoverIn(target);
  });
  largeTextLink.addEventListener('mouseleave', (e) => {
    const target = e.target as HTMLElement;
    viewMoreHoverOut(target);
  });
};
