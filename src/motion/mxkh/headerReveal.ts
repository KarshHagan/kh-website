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
  tl.fromTo(
    overline,
    { width: '0%' },
    { duration: 1, delay: 2.5, width: '100%', ease: 'expo.inOut' }
  );
  tl.from(
    headerSplit.lines,
    {
      duration: 1.5,
      y: '4rem',
      opacity: 0,
      stagger: 0.1,
      ease: 'power4.inOut',
    },
    '<0.5'
  );
  tl.from(headerContent, { duration: 1.5, opacity: 0, y: '4rem', ease: 'power4.inOut' }, '<');
};
export default headerReveal;
