import { gsap } from 'gsap';

export const overviewReveal = () => {
  const component = document.querySelector('.overview_component') as HTMLElement;
  if (component) {
    const header = component.querySelector('.header_component') as HTMLElement;
    const image = component.querySelector('.img_cover') as HTMLElement;

    const tl = gsap.timeline();
    tl.fromTo(
      header.children,
      { y: '2rem', opacity: 0 },
      { delay: 3, duration: 1, y: '0rem', opacity: 1, ease: 'sine.out' }
    );
    tl.fromTo(image, { opacity: 1 }, { duration: 1, opacity: 0, ease: 'power2.inOut' }, '<');
  }
};
export default overviewReveal;
