import { gsap } from 'gsap';

export const pageTransitionIn = () => {
  const transitionElement = document.querySelector('.transition_component');

  const animation = gsap.timeline({ paused: true });
  animation.to(transitionElement, {
    display: 'block',
    duration: 0.5,
    opacity: 1,
    ease: 'power3.out',
  });

  return animation;
};

export const pageTransitionOut = () => {
  const transitionElement = document.querySelector('.transition_component');

  const animation = gsap.timeline();
  animation.set(transitionElement, { display: 'block', opacity: 1 });
  animation.to(transitionElement, {
    delay: 1,
    duration: 0.5,
    opacity: 0,
    display: 'none',
    ease: 'power3.out',
  });

  return animation;
};
