import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText); // -----------------
// Reveal Animations
// -----------------

// Page Reveal
export const csoPageReveal = () => {
  const fixedHeaderSection = document.querySelector('.section_sticky-header') as HTMLElement;
  const workSection = document.querySelector('.section_work') as HTMLElement;

  const headerTitle = fixedHeaderSection.querySelector('h1');
  const headerSplit = new SplitText(headerTitle, { type: 'words', linesClass: 'wordChild' });
  const textSplitParent = new SplitText(headerTitle, {
    type: 'words',
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
  animation.from(headerSplit.words, {
    duration: 1,
    y: '6rem',
    opacity: 0,
    stagger: { each: 0.1 },
    ease: 'power4.inOut',
  });
  animation.from(overline, { duration: 1, width: 0, ease: 'expo.inOut' }, '<');
  animation.from(
    headerOverview,
    { duration: 1, opacity: 0, y: '1rem', ease: 'power4.inOut' },
    '<0.2'
  );
  animation.from(
    filterButton,
    {
      duration: 1,
      y: '2rem',
      opacity: 0,
      stagger: { each: 0.1 },
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

// Page Scroll
// -----------
export const caseScrollEffect = () => {
  const workItems = [...document.querySelectorAll('.work-grid_item')];

  const leftItems = [];
  const rightItems = [];

  for (let i = 0; i < workItems.length; i += 2) {
    leftItems.push(workItems[i]);
  }
  for (let i = 1; i < workItems.length; i += 2) {
    rightItems.push(workItems[i]);
  }

  for (const i in leftItems) {
    const temp = leftItems[i] as HTMLElement;
    temp.dataset.scrollSpeed = '3';
  }

  for (const i in rightItems) {
    const temp = rightItems[i] as HTMLElement;
    temp.dataset.scrollSpeed = '-3';
  }

  console.log('right', rightItems, 'left', leftItems);

  const scrollSection = document.querySelector('.section_work') as HTMLElement;
  const scrollElements = [...scrollSection.querySelectorAll('[data-scroll-speed]')];

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: scrollSection,
      start: 'top 50%',
      end: 'bottom top',
      scrub: true,
      toggleActions: 'play none none reverse',
      markers: {
        startColor: 'yellow',
        endColor: 'orange',
      },
    },
  });

  for (const j in scrollElements) {
    const tempElement = scrollElements[j] as HTMLElement;
    const elementSpeed = Number(tempElement.dataset.scrollSpeed);
    const setSpeed = elementSpeed;

    animation.to(tempElement, { yPercent: setSpeed * 5, ease: 'none' }, '<');
  }
};
