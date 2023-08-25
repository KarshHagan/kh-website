import { gsap } from 'gsap';

export const filterReveal = (elements: Element[]) => {
  const animation = gsap.timeline();
  animation.set(elements, { y: '16px', display: 'block', opacity: 0 });
  animation.to(elements, {
    duration: 1,
    y: '0px',
    opacity: 1,
    stagger: 0.1,
    ease: 'expo.inOut',
  });
};
