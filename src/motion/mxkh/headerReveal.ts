// eslint-disable-next-line simple-import-sort/imports
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export const headerReveal = () => {
  const headerComponent = document.querySelector('.header_component.is-hero') as HTMLElement;
  const heroTitle = headerComponent.querySelector('h1');
  const headerSplit = new SplitText(heroTitle, { type: 'lines', linesClass: 'lineChild' });
  const textSplitParent = new SplitText(heroTitle, {
    type: 'lines',
    linesClass: 'split-text_parent',
  });
  const overline = headerComponent.querySelector('.header_overline');
  const headerContent = headerComponent.querySelector('.header_content');

  const tl = gsap.timeline({
    onComplete: () => {
      textSplitParent.revert();
      headerSplit.revert();
    },
  });
  tl.from(headerSplit.lines, {
    delay: 2.5,
    duration: 1,
    y: '4rem',
    opacity: 0,
    stagger: 0.1,
    ease: 'power4.inOut',
  });
  tl.from(overline, { duration: 1, width: '0%', ease: 'expo.inOut' }, '<');
  tl.from(headerContent, { duration: 1, opacity: 0, y: '2rem', ease: 'sine.out' });
};
export default headerReveal;
