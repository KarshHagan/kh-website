import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

export const overviewReveal = () => {
  const component = document.querySelector('.overview_component') as HTMLElement;
  if (component) {
    const header = component.querySelector('.header_component') as HTMLElement;
    const image = component.querySelector('.img_cover') as HTMLElement;

    const tl = gsap.timeline();
    tl.fromTo(
      header.children,
      { y: '3rem', opacity: 0 },
      { delay: 3, duration: 1, y: '0rem', opacity: 1, ease: 'power2.inOut' }
    );
    tl.fromTo(
      image,
      { y: '0%', opacity: 1 },
      { duration: 1, y: '-100%', ease: 'power2.inOut' },
      '<'
    );
  }
};
export default overviewReveal;
