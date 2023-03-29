/* eslint-disable prefer-destructuring */
import { gsap } from 'gsap';

const cursor = document.querySelector('.cursor_component') as HTMLElement;

export const cursorRevealIn = (scaleTo: number, icon: HTMLElement) => {
  if (icon !== undefined) {
    cursorIconRevealIn(icon);
  } else {
    cursor.classList.add('mbm-ex');
  }

  const animation = gsap.timeline();
  animation.to(cursor, {
    width: scaleTo + 'rem',
    height: scaleTo + 'rem',
    ease: 'power4.out',
  });
};

export const cursorRevealOut = (icon: HTMLElement) => {
  if (icon !== undefined) {
    cursorIconRevealOut(icon);
  }

  const animation = gsap.timeline();
  animation.to(cursor, { width: '0.75rem', height: '0.75rem', ease: 'power4.out' });
  cursor.classList.remove('mbm-ex');
};

export const cursorIconRevealIn = (icon: HTMLElement) => {
  const animation = gsap.timeline();
  animation.to(cursor, {
    padding: '1rem',
    backgroundColor: '#4C9A8C',
    ease: 'power4.out',
  });
  animation.to(icon, { opacity: 1, display: 'block' }, '<0.2');
};
export const cursorIconRevealOut = (icon: HTMLElement) => {
  const animation = gsap.timeline();
  animation.to(icon, { opacity: 0, display: 'none' });
  animation.to(
    cursor,
    {
      padding: '0rem',
      backgroundColor: '#F09F43',
      ease: 'power4.out',
    },
    '<0.2'
  );

  cursorIconReset();
};

export const cursorIconReset = () => {
  const cursorImages = [...document.querySelectorAll('.cursor_image')];
  const animation = gsap.timeline();
  animation.to(cursor, { delay: 0.6, duration: 0, rotate: '0deg' });
  for (const i in cursorImages) {
    const temp = cursorImages[i] as HTMLElement;
    animation.set(temp, { opacity: 0, display: 'none' });
  }
};

export const cursorArrowSliderChange = (xType: string) => {
  const animation = gsap.timeline();

  if (xType === 'rotate') {
    animation.to(cursor, { duration: 1, rotate: '-180deg', ease: 'expo.out' });
  } else {
    animation.to(cursor, { duration: 1, rotate: '0deg', ease: 'expo.out' });
  }

  return animation;
};

export const cursorArrowYMovement = (cursorState: string, yMovement: number) => {
  const cursorArrow = document.querySelector('.cursor_image.is-arrow');

  const animation = gsap.timeline();
  if (cursorState === 'rotate') {
    animation.to(cursorArrow, { rotate: -yMovement });
  } else {
    animation.to(cursorArrow, { rotate: yMovement });
  }
};
