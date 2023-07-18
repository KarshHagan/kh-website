// eslint-disable-next-line simple-import-sort/imports
import { getDeviceType } from '$utils/getDevice';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText, ScrollTrigger);

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

// Hero Reveal
export const abPageReveal = () => {
  const heroSection = document.querySelector('.section_sticky-header') as HTMLElement;
  const aboutSecton = document.querySelector('.section_about-hero') as HTMLElement;

  const heroTitle = heroSection.querySelector('h1');
  const headerSplit = new SplitText(heroTitle, { type: 'lines', linesClass: 'lineChild' });
  const textSplitParent = new SplitText(heroTitle, {
    type: 'lines',
    linesClass: 'split-text_parent',
  });
  const heroStamp = heroSection.querySelector('.about-header_stamp');

  const aboutOverline = aboutSecton.querySelector('.fixed-header_overline');
  const aboutTitle = aboutSecton.querySelector('p.text-size-large');
  const aboutOverview = aboutSecton.querySelector('p.text-size-medium');
  const aboutImage = aboutSecton.querySelector('.about-hero_image');

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

  animation.from(aboutOverline, { duration: 1, width: '0%', ease: 'expo.inOut' }, '<');
  animation.from(
    [aboutTitle, aboutOverview],
    {
      duration: 1.5,
      opacity: 0,
      y: '2rem',
      ease: 'power4.inOut',
    },
    '<0.5'
  );

  animation.from(
    heroStamp,
    {
      duration: 1.5,
      scale: 1.2,
      rotate: '0deg',
      opacity: 0,
      ease: 'power4.inOut',
    },
    '<'
  );

  animation.from(
    aboutImage,
    {
      duration: 1,
      opacity: 0,
      y: '2rem',
      ease: 'power4.out',
    },
    '<0.2'
  );
};

// Clients Reveal
export const abClientsReveal = () => {
  const clientSection = document.querySelector('.section_about-clients') as HTMLElement;
  const clientLabel = clientSection.querySelector('.module_label');
  const clientLogos = [...clientSection.querySelectorAll('.about-clients_image')];

  let sortSize = 4;

  const decice = getDeviceType();
  if (decice === 'mobile') {
    sortSize = 2;
  }

  const sortLogo = [];

  for (let i = 0; i < clientLogos.length; i += sortSize) {
    const logoRow = clientLogos.slice(i, i + sortSize);
    sortLogo.push(logoRow);
  }

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: clientSection,
      start: scrollTriggerStart,
      end: scrollTriggerEnd,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
  });

  animation.from(clientLabel, { duration: 2, opacity: 0, ease: 'power4.out' });
  for (const i in sortLogo) {
    animation.from(
      sortLogo[i],
      { duration: 1, y: '2rem', opacity: 0, stagger: 0.1, ease: 'power4.out' },
      '<'
    );
  }
};

// Team Reveal
export const abTeamReveal = () => {
  const teamSection = document.querySelector('.section_about-team') as HTMLElement;
  const sectionLabel = teamSection.querySelector('.module_label');
  const teamCards = [...teamSection.querySelectorAll('.about-team_item')];
  const controls = teamSection.querySelector('.about-team_slider-controls') as HTMLElement;
  const seeMore = teamSection.querySelector('.show-more_component');

  const lastCard = teamCards[teamCards.length - 1];
  teamCards.pop();

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: teamSection,
      start: scrollTriggerStart,
      end: scrollTriggerEnd,
      markers: true,
      toggleActions: 'play none none reverse',
    },
  });

  animation.from(sectionLabel, { duration: 2, opacity: 0, ease: 'power4.out' });
  animation.from(controls, { duration: 2, opacity: 0, ease: 'power4.out' }, '<0.2');
  animation.from(lastCard, { duration: 1, x: '2rem', opacity: 0, ease: 'power4.out' }, '<0.2');
  animation.from(
    teamCards,
    { duration: 1, x: '2rem', opacity: 0, stagger: 0.1, ease: 'power4.out' },
    '<0.1'
  );
  // animation.from(seeMore, { duration: 1, y: '2rem', opacity: 0, ease: 'power4.out' }, '<0.2');
};

// Awards Reveal
export const abAwardsReveal = () => {
  const awardsSection = document.querySelector('.section_about-awards') as HTMLElement;
  const bgText = awardsSection.querySelector('.about-awards_header-title.has-fill');
  const maskedText = awardsSection.querySelector('.about-awards_header-title.has-stroke');
  const overviewText = awardsSection.querySelector('p');
  const overviewSpan = awardsSection.querySelector('.about-awards_span');
  const awardItems = [...awardsSection.querySelectorAll('.about-awards_item')];

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: awardsSection,
      start: scrollTriggerStart,
      end: scrollTriggerEnd,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
  });
  animation.from(bgText, { duration: 1.5, y: '2rem', opacity: 0, ease: 'power4.out' });
  animation.from(maskedText, { duration: 1.5, y: '2rem', opacity: 0, ease: 'power4.out' }, '<');
  animation.from(overviewText, { duration: 1, y: '2rem', opacity: 0, ease: 'power4.out' }, '<');
  animation.from(overviewSpan, { duration: 1, width: 0, ease: 'power4.out' }, '<');
  animation.from(
    awardItems,
    { duration: 1, y: '2rem', opacity: 0, stagger: 0.1, ease: 'power4.out' },
    '<0.6'
  );
};
