// eslint-disable-next-line simple-import-sort/imports
import { getDeviceType } from '$utils/getDevice';
import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText, InertiaPlugin);

// Hero Main Scroll
// ----------------
export const heroScroll = () => {
  // Set Production Scene
  const prodcutionScene = document.querySelector(
    '.home-hero_3d-embed.is-production',
  ) as HTMLElement;
  const designerScene = document.querySelector('.home-hero_3d-embed.is-designer') as HTMLElement;

  designerScene.classList.add('hide');
  prodcutionScene.classList.remove('hide');
  // ------------
  // Main Scroll
  // ------------
  const heroParent = document.querySelector('.section_home-hero') as HTMLElement;
  const maskedComponent = heroParent.querySelector('.home-hero_masked-component') as HTMLElement;
  const scrolledComponent = heroParent.querySelector('.home-hero_scrolled') as HTMLElement;
  const scrollSections = [...heroParent.querySelectorAll('.home-hero_sizing-wrap')];

  const heroMainComponent = heroParent.querySelector('.home-hero_main-component');
  const maskElement = maskedComponent.querySelector('.home-hero_bg-mask');
  const heroMaskText = maskedComponent.querySelector('.home-hero_text-track');
  const heroIconWrap = maskedComponent.querySelector('.home-hero_indicator');
  const heroIcon = maskedComponent.querySelector('.hero-scrolled_indicator-wrap');
  const heroBgText = scrolledComponent.querySelector('.home-hero_text-track');

  let setWidth = '40%';
  let setHeight = '80%';
  let setCornerRadius = '50vw 50vw 4rem 4rem';

  // Check mobile
  const device = getDeviceType();

  if (device === 'tablet') {
    setWidth = '80%';
    setHeight = '80%';
    setCornerRadius = '3rem 3rem 3rem 3rem';
  } else if (device === 'mobile') {
    setWidth = '75%';
    setHeight = '50%';
    setCornerRadius = '2rem 2rem 2rem 2rem';
  }

  gsap.set(heroMainComponent, { zIndex: 2 });

  const stMain = gsap.timeline({
    scrollTrigger: {
      trigger: scrollSections[0],
      start: '15% top',
      end: 'bottom top',
      // markers: true,
      toggleActions: 'play none none reverse',
      scrub: 1,
    },
  });

  stMain.to(maskElement, {
    width: setWidth,
    height: setHeight,
    bottom: 0,
    borderRadius: setCornerRadius,
    ease: 'linear',
  });
  stMain.to(heroMainComponent, { opacity: 0, ease: 'power4.out' }, '<');
  stMain.to(heroIconWrap, { bottom: '7%', opacity: 1, ease: 'linear' }, '<');
  stMain.to(heroIcon, { width: '4rem', height: '4rem', padding: '1rem' }, '<');
  stMain.to(heroMaskText, { opacity: 1 }, '<');

  // Hero Scroll Text Rotation on exit
  // --------------------------
  const textScrollAniamtion = gsap.timeline({
    scrollTrigger: {
      trigger: scrollSections[2],
      start: 'top top',
      end: 'bottom top',
      // markers: true,
      toggleActions: 'play none none reverse',
      scrub: 1,
    },
  });
  textScrollAniamtion.to([heroBgText, heroMaskText], { rotate: '4deg', scale: 1.05 });
};

// -----------------
// REVEAL ANIMATIONS
// -----------------

// Reveal global properties
let scrollTriggerStart = 'top 70%';
let scrollTriggerEnd = 'top 70%';

let setDuration = 2;
let setYOffset = '4rem';

const device = getDeviceType();

if (device === 'tablet' || device === 'mobile') {
  setDuration = 1;
  setYOffset = '1rem';
  scrollTriggerStart = 'top 85%';
  scrollTriggerEnd = 'top 85%';
}

// Hero Reveal
export const heroReveal = () => {
  const heroSection = document.querySelector('.section_home-hero') as HTMLElement;
  const heroHeaders = [...heroSection.querySelectorAll('.home-hero_header')];
  const heroOverview = heroSection.querySelector('.home-hero_description');
  const hero3D = heroSection.querySelector('.home-hero_3d-embed.is-production');

  const animation = gsap.timeline();
  animation.from(heroHeaders, {
    delay: 2,
    duration: 1,
    opacity: 0,
    y: '2rem',
    stagger: 0.1,
    ease: 'power4.inOut',
  });
  animation.from(heroOverview, { duration: 1.3, y: '2rem', opacity: 0, ease: 'power4.inOut' }, '<');
  animation.from(hero3D, { duration: 1.3, y: '2rem', opacity: 0, ease: 'power3.inOut' }, '<');
};

// Overview Reveal
export const overviewReveal = () => {
  const overviewSection = document.querySelector('.section_home-overview') as HTMLElement;
  const headerTitle = overviewSection.querySelector('h2');
  const headerSplit = new SplitText(headerTitle, { type: 'lines', linesClass: 'lineChild' });
  const textSplitParent = new SplitText(headerTitle, {
    type: 'lines',
    linesClass: 'split-text_parent',
  });
  const overviewText = overviewSection.querySelector('p');
  const overviewStamp = overviewSection.querySelector('.text-left_image');
  const overviewLabel = overviewSection.querySelector('.module_label-container');
  const overviewVideo = overviewSection.querySelector('.home-overview_video-embed');
  const overviewAwards = [...overviewSection.querySelectorAll('.about-awards_item')];

  // console.log('here', overviewAwards);

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: overviewSection,
      start: scrollTriggerStart,
      end: scrollTriggerEnd,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    // onComplete: () => {
    //   textSplitParent.revert();
    //   headerSplit.revert();
    // },
  });

  animation.from(headerSplit.lines, {
    duration: 1,
    y: '4rem',
    opacity: 0,
    stagger: 0.1,
    ease: 'power4.out',
  });
  animation.from(
    overviewLabel,
    {
      duration: 1,
      opacity: 0,
      ease: 'power4.out',
    },
    '<',
  );
  animation.from(
    overviewStamp,
    { duration: 1, opacity: 0, rotateZ: '0deg', scale: 1.1, ease: 'expo.inOut' },
    '<',
  );
  animation.from(
    overviewText,
    { duration: 2, y: setYOffset, opacity: 0, ease: 'power4.out' },
    '<0.2',
  );
  animation.from(
    overviewAwards,
    { duration: 1, opacity: 0, y: '2rem', stagger: 0.2, ease: 'power4.out' },
    '<0.4',
  );
  animation.from(
    overviewVideo,
    {
      duration: 1,
      y: '2rem',
      opacity: 0,
      ease: 'power4.out',
    },
    '<0.4',
  );
};

// Featured Work Reveal
export const featuredReveal = () => {
  const featuredSection = document.querySelector('.section_home-featured') as HTMLElement;
  const featuedContent = featuredSection.querySelector('.home-featured_item-wrap') as HTMLElement;

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: featuredSection,
      start: 'top 10%',
      end: 'top 10%',
      // toggleActions: 'play none none reverse',
      // markers: { startColor: 'green', endColor: 'olive' },
    },
  });
  animation.from(featuedContent, {
    duration: 1,
    opacity: 0,
    y: '100%',
    ease: 'power4.out',
  });
};

// Services Reveal
export const servicesReveal = () => {
  const servicesSection = document.querySelector('.section_home-services') as HTMLElement;
  const servicesLabel = servicesSection.querySelector('.module_label-container');
  const servicesOverview = servicesSection.querySelector('p');
  const servicesImageMask = servicesSection.querySelector('.home-services_image-mask');
  const serviceItems = [...servicesSection.querySelectorAll('.home-services_item')];

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: servicesSection,
      start: scrollTriggerStart,
      end: scrollTriggerEnd,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
  });
  animation.from(servicesLabel, { duration: 2, opacity: 0, ease: 'power4.out' });
  animation.from(
    servicesImageMask,
    { duration: 2, y: '4rem', opacity: 0, ease: 'power4.out' },
    '<',
  );
  animation.from(servicesOverview, { duration: 2, y: '4rem', opacity: 0, ease: 'power4.out' }, '<');
  animation.from(
    serviceItems,
    { duration: 2, y: '4rem', opacity: 0, stagger: 0.2, ease: 'expo.out' },
    '<',
  );
};

// Our Focus Reveal
export const focusReveal = () => {
  const focusSection = document.querySelector('.section_home-agency') as HTMLElement;
  const focusLabel = focusSection.querySelector('.module_label');
  const focusText = focusSection.querySelector('h2');
  const textSplit = new SplitText(focusText, { type: 'lines', linesClass: 'lineChild' });
  const textSplitParent = new SplitText(focusText, {
    type: 'lines',
    linesClass: 'split-text_parent',
  });
  const focusParagraph = focusSection.querySelector('p');
  const focusStamp = focusSection.querySelector('img');

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: focusSection,
      start: scrollTriggerStart,
      end: scrollTriggerEnd,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    onComplete: () => {
      textSplitParent.revert();
      textSplit.revert();
    },
  });
  animation.from(focusLabel, { duration: 2, opacity: 0, ease: 'power4.out' });
  animation.from(
    textSplit.lines,
    {
      duration: 0.8,
      y: '4rem',
      opacity: 0,
      stagger: 0.1,
      ease: 'power4.out',
    },
    '<',
  );
  animation.from(
    focusParagraph,
    { duration: 2, opacity: 0, y: '4rem', ease: 'power4.out' },
    '<0.4',
  );
  animation.from(focusStamp, { duration: 2, scale: 1.2, opacity: 0, ease: 'power4.out' }, '<');
};
