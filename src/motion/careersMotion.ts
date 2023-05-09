import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export const careersPageReveal = () => {
  const fixedHeaderSection = document.querySelector('.section_sticky-header') as HTMLElement;
  const heroSection = document.querySelector('.section_careers-hero') as HTMLElement;

  const headerTitle = fixedHeaderSection.querySelector('h1');
  const headerSplit = new SplitText(headerTitle, { type: 'words', linesClass: 'wordChild' });
  const textSplitParent = new SplitText(headerTitle, {
    type: 'words',
    linesClass: 'split-text_parent',
  });
  const headerOverview = fixedHeaderSection.querySelector('p');
  const overline = heroSection.querySelector('.fixed-header_overline');
  const heroReveal = heroSection.querySelector('.careers-hero_reveal-wrap');

  gsap.set(heroReveal, { y: '0%' });

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
  animation.to(heroReveal, { duration: 1, y: '-100%', ease: 'expo.inOut' }, '<0.2');
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
      start: 'top 50%',
      end: 'top 50%',
      //   markers: true,
      toggleActions: 'play none none reverse',
    },
    // onComplete: () => {
    //   textSplitParent.revert();
    //   headerSplit.revert();
    // },
  });
  animation.from(headerSplit.lines, {
    duration: 1,
    y: '6rem',
    opacity: 0,
    stagger: { each: 0.1 },
    ease: 'power4.inOut',
  });

  animation.from(
    overviewRichText,
    { duration: 1, y: '2rem', opacity: 0, ease: 'power4.inOut' },
    '<'
  );
};

export const mediaGridReveal = () => {
  const overviewSection = document.querySelector('.section_careers-media') as HTMLElement;
  const revealContainer = overviewSection.querySelector('.grid-overlay_reveal-wrap');

  gsap.set(revealContainer, { y: '0%' });

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: overviewSection,
      start: 'top 50%',
      end: 'top 50%',
      //   markers: true,
      toggleActions: 'play none none reverse',
    },
    // onComplete: () => {
    //   textSplitParent.revert();
    //   headerSplit.revert();
    // },
  });
  animation.to(revealContainer, { duration: 1, y: '-100%', ease: 'power4.inOut' });
};
