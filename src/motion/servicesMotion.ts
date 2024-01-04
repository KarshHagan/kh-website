// eslint-disable-next-line simple-import-sort/imports
import { getDeviceType } from '$utils/getDevice';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin([SplitText, ScrollToPlugin]);
gsap.registerPlugin(MorphSVGPlugin);

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
  const heroSection = document.querySelector('.section_services') as HTMLElement;

  const heroTitle = fixedHeaderSection.querySelector('h1');
  const headerSplit = new SplitText(heroTitle, { type: 'lines', linesClass: 'lineChild' });
  const textSplitParent = new SplitText(heroTitle, {
    type: 'lines',
    linesClass: 'split-text_parent',
  });
  const headerOverview = fixedHeaderSection.querySelector('p');
  const overline = heroSection.querySelector('.fixed-header_overline');
  const filterButtons = [...document.querySelectorAll('.services_link-item')];
  const scrollSection = heroSection.querySelector('.services_sticky-section');
  const sectionTexture = heroSection.querySelector('.services_scroll-texture');

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
  animation.from(scrollSection, { duration: 1, opacity: 0, y: '10%', ease: 'Power4.out' }, '<');
  animation.from(sectionTexture, { duration: 1.5, opacity: 0, ease: 'power4.out' }, '<0.5');
};

// Overview Reveal
export const servicesOverviewReveal = () => {
  const parentElement = document.querySelector('.section_services-overview') as HTMLElement;

  const overviewHeader = parentElement.querySelector('.services-overview_header');
  const overviewImageParent = parentElement.querySelector(
    '.services-overview_image-wrap'
  ) as HTMLElement;
  const overviewGridItems = [...parentElement.querySelectorAll('.services-overview_grid-wrap')];

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: parentElement,
      start: scrollTriggerStart,
      end: scrollTriggerEnd,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
  });
  animation.from(overviewHeader, { duration: 1, opacity: 0, y: '2rem', ease: 'power4.out' });
  animation.from(
    overviewImageParent,
    { duration: 1, opacity: 0, y: '2rem', ease: 'power4.out' },
    '<0.2'
  );
  animation.from(
    overviewGridItems,
    { duration: 1, opacity: 0, y: '2rem', stagger: 0.1, ease: 'power4.out' },
    '<0.5'
  );
};

// Industries Reveal
export const servicesIndustriesReveal = () => {
  const parentElement = document.querySelector('.section_serivces-industries') as HTMLElement;

  const overviewHeader = parentElement.querySelector('.services-info_industries-header');
  const overviewSpan = parentElement.querySelector('.span');
  const industriesTags = [...parentElement.querySelectorAll('.serivces-industries_text')];

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: parentElement,
      start: scrollTriggerStart,
      end: scrollTriggerEnd,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
  });
  animation.from(overviewHeader, { duration: 1, opacity: 0, y: '2rem', ease: 'power4.out' });
  animation.from(overviewSpan, { duration: 1, width: 0, ease: 'power4.out' }, '<');
  animation.from(
    industriesTags,
    {
      duration: 1,
      opacity: 0,
      y: '2rem',
      // stagger: 0.1,
      ease: 'power4.out',
    },
    '<'
  );
};
