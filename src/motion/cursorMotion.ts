import { gsap } from 'gsap';

const cursor = document.querySelector('.cursor_component') as HTMLElement;
const cursorImage = cursor.children[1] as HTMLElement;

export const cursorArrowSliderChange = (xType: string) => {
  const animation = gsap.timeline();

  if (xType === 'prev') {
    animation.to(cursor, { duration: 1, rotate: '-180deg', ease: 'expo.out' });
  } else {
    animation.to(cursor, { duration: 1, rotate: '0deg', ease: 'expo.out' });
  }

  return animation;
};
export const cursorArrowSliderReset = () => {
  const animation = gsap.timeline();
  animation.to(cursor, { delay: 0.6, duration: 0, rotate: '0deg' });
};

export const cursorArrowYMovement = (xType: string, yMovement: number) => {
  const animation = gsap.timeline();

  if (xType === 'prev') {
    animation.to(cursorImage, { rotate: -yMovement });
  } else {
    animation.to(cursorImage, { rotate: yMovement });
  }
};

export const cursorButtonIn = (scaleTo: number, iconType: string) => {
  const animation = gsap.timeline();
  if (iconType === 'arrow') {
    cursorIconRevealIn();
  } else {
    cursor.classList.add('mbm-ex');
  }

  animation.to(cursor, {
    duration: 1,
    width: scaleTo + 'rem',
    height: scaleTo + 'rem',
    ease: 'power4.out',
  });
};
export const cursorButtonOut = (iconType: string) => {
  const animation = gsap.timeline();
  if (iconType === 'arrow') {
    cursorIconRevealOut();
  }
  animation.to(cursor, { duration: 1, width: '0.75rem', height: '0.75rem', ease: 'power4.out' });
  cursor.classList.remove('mbm-ex');
};

export const cursorIconRevealIn = () => {
  const animation = gsap.timeline();
  animation.to(cursor, {
    duration: 0.6,
    padding: '1rem',
    backgroundColor: '#4C9A8C',
    ease: 'power4.out',
  });
  animation.to(cursorImage, { opacity: 1, display: 'block' }, '<');

  return animation;
};
export const cursorIconRevealOut = () => {
  const animation = gsap.timeline();
  animation.to(cursor, {
    duration: 0.6,
    padding: '0rem',
    backgroundColor: '#F09F43',
    ease: 'power4.out',
  });
  animation.to(cursorImage, { opacity: 0, display: 'block' }, '<');

  return animation;
};
