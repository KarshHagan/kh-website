/* eslint-disable prefer-destructuring */
import { gsap } from 'gsap';

const cursor = document.querySelector('.cursor_component') as HTMLElement;

export const cursorRevealIn = (scaleTo: number) => {
  cursor.classList.add('mbm-ex');

  const animation = gsap.timeline();
  animation.to(cursor, {
    width: scaleTo + 'rem',
    height: scaleTo + 'rem',
    ease: 'power4.out',
  });
};

export const cursorRevealOut = () => {
  cursor.classList.remove('mbm-ex');
  const animation = gsap.timeline();
  animation.to(cursor, { width: '0.75rem', height: '0.75rem', ease: 'power4.out' });
};

export const cursorIconRevealIn = (icon: HTMLElement) => {
  cursor.classList.remove('mbm-ex');
  const animation = gsap.timeline();
  animation.set(cursor, { padding: '1rem' });
  animation.set(icon, { opacity: 1, display: 'block' });
  animation.to(cursor, { backgroundColor: '#4C9A8C' });
};
export const cursorIconRevealOut = (icon: HTMLElement) => {
  const animation = gsap.timeline();
  animation.set(cursor, { padding: '0rem' });
  animation.set(icon, { opacity: 0, display: 'none' });
  animation.to(cursor, { backgroundColor: '#F09F43' });
};

export const cursorIconReset = () => {
  const animation = gsap.timeline();
  animation.to(cursor, { duration: 0, rotate: '0deg' });
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
