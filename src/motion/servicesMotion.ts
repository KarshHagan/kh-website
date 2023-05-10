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

// Page Reveal
export const servicesPageReveal = () => {
  const fixedHeaderSection = document.querySelector('.section_sticky-header') as HTMLElement;
  const heroSection = document.querySelector('.section_services-hero') as HTMLElement;

  const heroTitle = fixedHeaderSection.querySelector('h1');
  const headerSplit = new SplitText(heroTitle, { type: 'lines', linesClass: 'lineChild' });
  const textSplitParent = new SplitText(heroTitle, {
    type: 'lines',
    linesClass: 'split-text_parent',
  });
  const headerOverview = fixedHeaderSection.querySelector('p');
  const overline = heroSection.querySelector('.fixed-header_overline');
  const filterButtons = [...document.querySelectorAll('.services-hero_link-item')];
  const heroText = heroSection.querySelector('h2');
  const heroImageWrap = heroSection.querySelector('.services-hero_image-wrap') as HTMLElement;
  const heroChildren = [...heroImageWrap.children];

  const animation = gsap.timeline({
    onComplete: () => {
      // textSplitParent.revert();
      // headerSplit.revert();
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
  animation.from(headerOverview, { duration: 1.5, opacity: 0, ease: 'power4.inOut' }, '<');
  animation.from(
    filterButtons,
    {
      duration: 1,
      y: '2rem',
      opacity: 0,
      stagger: 0.1,
      ease: 'power4.out',
    },
    '<0.2'
  );
  animation.from(heroText, { duration: 1, opacity: 0, y: '2rem', ease: 'power4.out' }, '<0.5');
  animation.from(heroChildren, { duration: 1, opacity: 0, scale: 1.05, ease: 'power4.out' }, '<');
};

// Overview Reveal
export const servicesOverviewReveal = () => {
  const overviewSection = document.querySelector('.section_serivces-info') as HTMLElement;

  const overviewHeader = overviewSection.querySelector('.services-info_overview-header');
  const overviewPoints = [...overviewSection.querySelectorAll('.services-info_grid-wrap')];

  const industriesSection = overviewSection.querySelector(
    '.service-info_industries'
  ) as HTMLElement;
  const industriesHeader = industriesSection.querySelector('h2');
  const industriesTag = industriesSection.querySelectorAll('.services-info_grid');

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: overviewSection,
      start: 'top 60%',
      end: 'top 60%',
      // markers: true,
      toggleActions: 'play none none reverse',
    },
  });
  animation.from(overviewHeader, { duration: 1, opacity: 0, y: '2rem', ease: 'power4.out' });
  animation.from(
    overviewPoints,
    {
      duration: 1,
      opacity: 0,
      y: '2rem',
      stagger: { each: 0.1 },
      ease: 'power4.out',
    },
    '<0.2'
  );
  animation.from(
    industriesHeader,
    { duration: 1, opacity: 0, y: '1rem', ease: 'power4.out' },
    '<0.4'
  );
  animation.from(
    industriesTag,
    {
      duration: 1,
      opacity: 0,
      y: '1rem',
      ease: 'power4.out',
    },
    '<'
  );
};

// Service Item Reveal
export const serviceSectionReveal = () => {
  const serviceSections = [...document.querySelectorAll('.services_item')];
  const servicesHeader = document.querySelector('.services-info_header');

  const headerAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: serviceSections[0],
      start: 'top 50%',
      end: 'top 50%',
      // markers: true,
      toggleActions: 'play none none reverse',
    },
  });

  headerAnimation.from(servicesHeader, { duration: 1, opacity: 0, y: '1rem', ease: 'power4.out' });

  for (const i in serviceSections) {
    const tempSection = serviceSections[i] as HTMLElement;
    const revealWrap = tempSection.querySelector('.services_image-reveal');
    const contentMain = tempSection.querySelector('.services_info-main');
    const contentSecondary = tempSection.querySelector('.services_info-grid');
    const sectionSpan = [...tempSection.querySelectorAll('.services_span')];

    gsap.set(revealWrap, { y: '0%' });

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: tempSection,
        start: 'top 50%',
        end: 'top 50%',
        // markers: true,
        toggleActions: 'play none none reverse',
      },
    });

    animation.to(revealWrap, { duration: 1, y: '-100%', ease: 'expo.inOut' }, '<');
    animation.from(contentMain, { duration: 1, opacity: 0, y: '2rem', ease: 'power4.inOut' }, '<');
    animation.from(
      contentSecondary,
      { duration: 1, opacity: 0, y: '2rem', ease: 'power4.inOut' },
      '<'
    );
    animation.from(sectionSpan, { duration: 1, width: '0%', ease: 'power4.inOut' }, '<');
  }
};
