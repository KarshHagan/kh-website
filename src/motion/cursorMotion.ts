import { gsap } from 'gsap';

const cursor = document.querySelector('.cursor_component') as HTMLElement;
const cursorImage = cursor.children[1] as HTMLElement;

export const featuredCursorReveal = () => {
  const animation = gsap.timeline({ paused: true });
  animation.to(cursor, {
    duration: 0.6,
    width: '5rem',
    height: '5rem',
    padding: '1rem',
    backgroundColor: '#4C9A8C',
    ease: 'power4.out',
  });
  animation.to(cursorImage, { opacity: 1, display: 'block' }, '<');

  return animation;
};

export const featuredCursorUpdate = (xType: string) => {
  const animation = gsap.timeline();

  if (xType === 'prev') {
    animation.to(cursor, { duration: 1, rotate: '0deg', ease: 'expo.out' });
  } else {
    animation.to(cursor, { duration: 1, rotate: '180deg', ease: 'expo.out' });
  }

  return animation;
};

export const featuredCursorYUpdate = (xType: string, yMovement: number) => {
  const animation = gsap.timeline();

  if (xType === 'prev') {
    animation.to(cursorImage, { rotate: -yMovement });
  } else {
    animation.to(cursorImage, { rotate: yMovement });
  }
};
