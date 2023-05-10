// eslint-disable-next-line simple-import-sort/imports
import { getDeviceType } from '$utils/getDevice';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

// Reveal global properties
let scrollTriggerStart = 'top 70%';
let scrollTriggerEnd = 'top 70%';

const device = getDeviceType();

if (device === 'tablet' || device === 'mobile') {
  scrollTriggerStart = 'top 80%';
  scrollTriggerEnd = 'top 80%';
}

export const careersPageReveal = () => {
  const fixedHeaderSection = document.querySelector('.section_sticky-header') as HTMLElement;
  const heroSection = document.querySelector('.section_careers-hero') as HTMLElement;

  const heroTitle = fixedHeaderSection.querySelector('h1');
  const headerSplit = new SplitText(heroTitle, { type: 'lines', linesClass: 'lineChild' });
  const textSplitParent = new SplitText(heroTitle, {
    type: 'lines',
    linesClass: 'split-text_parent',
  });
  const headerOverview = fixedHeaderSection.querySelector('p');
  const overline = heroSection.querySelector('.fixed-header_overline');
  const heroComponent = heroSection.querySelector('.careers-hero_wrap');

  const animation = gsap.timeline({
    onComplete: () => {
      textSplitParent.revert();
      headerSplit.revert();
    },
  });

  animation.from(headerSplit.lines, {
    duration: 1,
    y: '4rem',
    opacity: 0,
    stagger: 0.1,
    ease: 'power4.inOut',
  });
  animation.from(overline, { duration: 1, width: 0, ease: 'expo.inOut' }, '<');
  animation.from(headerOverview, { duration: 1, y: '1rem', opacity: 0, ease: 'power4.inOut' }, '<');
  animation.from(heroComponent, { duration: 1, y: '2rem', opacity: 0, ease: 'expo.out' }, '<0.6');
};

export const careersOverviewReveal = () => {
  const overviewSection = document.querySelector('.careers-hero_overview-wrap') as HTMLElement;
  const overviewTitle = document.querySelector('h2');
  const headerSplit = new SplitText(overviewTitle, { type: 'lines', linesClass: 'lineChild' });
  const textSplitParent = new SplitText(overviewTitle, {
    type: 'lines',
    linesClass: 'split-text_parent',
  });
  const overviewRichText = overviewSection.querySelector('p') as HTMLElement;

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: overviewSection,
      start: scrollTriggerStart,
      end: scrollTriggerEnd,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    onComplete: () => {
      textSplitParent.revert();
      headerSplit.revert();
    },
  });
  animation.from(headerSplit.lines, {
    duration: 1,
    y: '4rem',
    opacity: 0,
    stagger: 0.1,
    ease: 'power4.inOut',
  });

  animation.from(
    overviewRichText,
    { duration: 1, y: '2rem', opacity: 0, ease: 'power4.inOut' },
    '<'
  );
};
