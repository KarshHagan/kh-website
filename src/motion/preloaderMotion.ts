import { gsap } from 'gsap';

export const preloaderMotion = () => {
  console.log('pre');
  const preloaderElement = document.querySelector('.preloader_component') as HTMLElement;
  const preloaderImage = preloaderElement.querySelector('img');
  const pageTransition = document.querySelector('.transition_component');
  const lenisContainer = document.querySelector('html');

  const animation = gsap.timeline();
  animation.set(lenisContainer, { height: '100%' });
  animation.set(preloaderElement, { display: 'flex', opacity: 1 });
  animation.set(preloaderImage, { opacity: 0, y: '2rem' });
  animation.set(pageTransition, { display: 'none', opacity: 0 });
  animation.to(preloaderImage, {
    delay: 0.4,
    duration: 1,
    y: '0rem',
    opacity: 1,
    ease: 'power4.out',
  });
  animation.to(preloaderImage, {
    delay: 0.4,
    duration: 1,
    y: '-2rem',
    opacity: 0,
    ease: 'power4.out',
  });
  animation.to(preloaderElement, { duration: 1, opacity: 0, ease: 'power4.out' }, '<0.3');
  animation.set(preloaderElement, { display: 'none' });
  animation.set(lenisContainer, { height: 'auto' });
};
