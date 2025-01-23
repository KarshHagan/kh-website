import { gsap } from 'gsap';

export const overviewReveal = () => {
  const component = document.querySelector('.overview_component') as HTMLElement;
  if (component) {
    const header = component.querySelector('.header_component') as HTMLElement;
    const image = component.querySelector('.img_cover') as HTMLElement;

    const tl = gsap.timeline();
    tl.fromTo(
      header.children,
      { y: '4rem', opacity: 0 },
      { delay: 4, duration: 1.5, y: '0rem', opacity: 1, ease: 'power4.inOut' }
    );
    tl.fromTo(
      image,
      { opacity: 1, left: 0 },
      { duration: 1.5, opacity: 1, left: '100%', ease: 'expo.inOut' },
      '<'
    );
  }
};
export default overviewReveal;
