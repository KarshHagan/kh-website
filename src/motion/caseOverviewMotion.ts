// eslint-disable-next-line simple-import-sort/imports
import { getDeviceType } from '$utils/getDevice';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);
// -----------------
// Reveal Animations
// -----------------

// Reveal global properties
let scrollTriggerStart = 'top 70%';
let scrollTriggerEnd = 'top 70%';

const device = getDeviceType();

if (device === 'tablet' || device === 'mobile') {
  scrollTriggerStart = 'top 80%';
  scrollTriggerEnd = 'top 80%';
}

// Page Reveal
export const csoPageReveal = () => {
  const fixedHeaderSection = document.querySelector('.section_sticky-header') as HTMLElement;
  const workSection = document.querySelector('.section_work') as HTMLElement;

  const heroTitle = fixedHeaderSection.querySelector('h1');
  const headerSplit = new SplitText(heroTitle, { type: 'lines', linesClass: 'lineChild' });
  const textSplitParent = new SplitText(heroTitle, {
    type: 'lines',
    linesClass: 'split-text_parent',
  });
  const headerOverview = fixedHeaderSection.querySelector('p');
  const overline = workSection.querySelector('.fixed-header_overline');
  const filterButton = [...document.querySelectorAll('.work-filter_item')];
  const workGrid = [...document.querySelectorAll('.work-grid_item')];

  const animation = gsap.timeline({
    onComplete: () => {
      textSplitParent.revert();
      headerSplit.revert();
    },
  });
  animation.from(headerSplit.lines, {
    delay: 1,
    duration: 1,
    y: '4rem',
    opacity: 0,
    stagger: 0.1,
    ease: 'power4.inOut',
  });
  animation.from(overline, { duration: 1, width: '0%', ease: 'expo.inOut' }, '<');
  animation.from(headerOverview, { duration: 1, opacity: 0, y: '1rem', ease: 'power4.inOut' }, '<');
  animation.from(
    filterButton,
    {
      duration: 1,
      y: '2rem',
      opacity: 0,
      stagger: 0.1,
      ease: 'power4.out',
    },
    '<0.2'
  );
  animation.from(
    workGrid,
    {
      duration: 1,
      y: '2rem',
      opacity: 0,
      stagger: { each: 0.1 },
      ease: 'power4.out',
    },
    '<0.2'
  );
};

// Card Hover Effects
export const caseHover = () => {
  const caseItems = [...document.querySelectorAll('.work-grid_item')];

  for (const i in caseItems) {
    const temp = caseItems[i] as HTMLElement;
    const tempImage = temp.querySelector('img');

    // gsap.set(tempImage, { scale: 1.1 });

    temp.addEventListener('mouseenter', (e) => {
      const target = e.target as HTMLElement;
      const targetImage = target.querySelector('img');

      const animation = gsap.timeline();
      animation.to(targetImage, { scale: 1.1, ease: 'power3.out' });
    });
    temp.addEventListener('mouseleave', (e) => {
      const target = e.target as HTMLElement;
      const targetImage = target.querySelector('img');

      const animation = gsap.timeline();
      animation.to(targetImage, { duration: 0.6, scale: 1, ease: 'power3.out' });
    });
  }
};
