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
    '.home-hero_3d-embed.is-production'
  ) as HTMLElement;
  const designerScene = document.querySelector('.home-hero_3d-embed.is-designer') as HTMLElement;

  designerScene.classList.add('hide');
  prodcutionScene.classList.remove('hide');
  // ------------
  // Main Scroll
  // ------------
  const homeHeroSection = document.querySelector('.section_home-hero') as HTMLElement;
  const maskedComponent = homeHeroSection.querySelector(
    '.home-hero_masked-component'
  ) as HTMLElement;
  const scrolledComponent = homeHeroSection.querySelector('.home-hero_scrolled') as HTMLElement;
  const heroMainComponent = homeHeroSection.querySelector(
    '.home-hero_main-component'
  ) as HTMLElement;

  const maskElement = maskedComponent.querySelector('.home-hero_bg-mask');
  const heroImageText = maskedComponent.querySelector('.home-hero_text-track');
  const heroScrollIcon = scrolledComponent.querySelector('#heroScrollIndicator');
  const heroBGText = scrolledComponent.querySelector('.bg-text_track');
  const heroMainZText = heroMainComponent.querySelector('.home-hero_z-pos');

  let setWidth = '40%';
  let setHeight = '80%';
  let setCornerRadius = '50vw 50vw 4rem 4rem';

  // Check mobile
  const device = getDeviceType();
  // console.log('device', device);

  if (device === 'tablet') {
    setWidth = '80%';
    setHeight = '85%';
    setCornerRadius = '100vw 100vw 6rem 6rem';
  } else if (device === 'mobile') {
    setWidth = '80%';
    setHeight = '80%';
    setCornerRadius = '2rem 2rem 2rem 2rem';
  }

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: maskedComponent,
      start: 'top top',
      end: 'bottom top',
      // markers: true,
      toggleActions: 'play none none reverse',
      scrub: 1,
    },
  });
  animation.set(heroMainComponent, { zIndex: 2 });
  animation.to(maskElement, {
    width: setWidth,
    height: setHeight,
    borderRadius: setCornerRadius,
    ease: 'linear',
  });
  animation.to(heroMainComponent, { opacity: 0, ease: 'power4.out' }, '<');
  animation.to(heroImageText, { opacity: 1 }, '<0.3');

  //Indicator Animation
  // ------------------
  let setIndicator = '-5rem';
  if (device === 'tablet') {
    setIndicator = '-3rem';
  } else if (device === 'mobile') {
    setIndicator = '-2rem';
  }
  const indicatorAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: scrolledComponent,
      start: 'top top',
      end: 'top top',
      toggleActions: 'play none none reverse',
      // markers: true,
    },
  });

  indicatorAnimation.to(heroScrollIcon, {
    duration: 0.8,
    y: setIndicator,
    opacity: 1,
    ease: 'expo.out',
  });

  // Hero Scroll Text Rotation on exit
  // --------------------------
  const textScrollAniamtion = gsap.timeline({
    scrollTrigger: {
      trigger: scrolledComponent,
      start: 'top top',
      end: 'bottom top',
      // markers: true,
      toggleActions: 'play none none reverse',
      scrub: 1,
    },
  });
  textScrollAniamtion.to(heroImageText, { rotate: '4deg' });
  textScrollAniamtion.to(heroBGText, { rotate: '4deg' }, '<');
};

// Hide Hero
// ---------
export const heroHide = () => {
  const heroBG = document.querySelector('.home-hero_masked-component') as HTMLElement;
  const heroBGText = document.querySelector('.bg-text_track');
  const heroScrollIcon = document.querySelector('#heroScrollIndicator');
  const heroTexture = document.querySelector('.home-hero_texture');

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_home-overview',
      start: 'bottom top',
      end: 'bottom top',
      toggleActions: 'play none none reverse',

      // markers: true,
    },
  });
  animation.to([heroBGText, heroScrollIcon, heroTexture], { duration: 0, display: 'none' });
  animation.to(heroBG, { duration: 0, opacity: 0 });
  animation.to(heroBG, { duration: 0, pointerEvents: 'none' });
};

// Hero Scrolled Text Movement
// ---------------------------
export const heroZText = () => {
  const maskedTrack = document.querySelector('.home-hero_text-track') as HTMLElement;
  const bgTrack = document.querySelector('.bg-text_track') as HTMLElement;

  const maskedChildren = [...maskedTrack.childNodes];
  const bgChildren = [...bgTrack.childNodes];

  const midChildren = [];
  const outChildren = [];

  for (let i = 0; i < 3; i++) {
    const maskedTemp = maskedChildren[i] as HTMLElement;
    const bgTemp = bgChildren[i] as HTMLElement;

    if (maskedTemp.classList.contains('is-mid') || bgTemp.classList.contains('is-mid')) {
      midChildren.push(maskedTemp);
      midChildren.push(bgTemp);
    } else {
      outChildren.push(maskedTemp);
      outChildren.push(bgTemp);
    }
  }

  const textSpeed = 45;
  const textMovement = 40;
  const midAnimation = gsap.timeline({ repeat: -1, yoyo: true });
  midAnimation.fromTo(
    midChildren,
    { duration: textSpeed, x: textMovement + '%', ease: 'linear' },
    { duration: textSpeed, x: -textMovement + '%', ease: 'linear' }
  );

  const outAnimation = gsap.timeline({ repeat: -1, yoyo: true });
  outAnimation.fromTo(
    outChildren,
    { duration: textSpeed, x: -textMovement + '%', ease: 'linear' },
    { duration: textSpeed, x: textMovement + '%', ease: 'linear' }
  );
};

// -----------------
// REVEAL ANIMATIONS
// -----------------

// Reveal global properties
const scrollTriggerStart = 'top 70%';
const scrollTriggerEnd = 'top 70%';

let setDuration = 2;
let setYOffset = '4rem';

const device = getDeviceType();

if (device === 'tablet' || device === 'mobile') {
  setDuration = 1;
  setYOffset = '1rem';
}

// Overview Reveal
export const overviewReveal = () => {
  const overviewSection = document.querySelector('.section_home-overview') as HTMLElement;
  const header = overviewSection.querySelector('h2');
  const headerSplit = new SplitText(header, { type: 'lines', linesClass: 'lines' });
  const textSplitParent = new SplitText(header, {
    type: 'words',
    linesClass: 'split-text_parent',
  });
  const overviewText = overviewSection.querySelector('p');
  const overviewStamp = overviewSection.querySelector('.text-left_image');
  const overviewTexture = overviewSection.querySelector('.home-overview_texture-overlay');
  const overviewLabel = overviewSection.querySelector('.module_label-container');

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: overviewSection,
      start: scrollTriggerStart,
      end: scrollTriggerEnd,
      markers: true,
      toggleActions: 'play none none reverse',
    },
    onComplete: () => {
      textSplitParent.revert();
      headerSplit.revert();
    },
  });

  animation.from(overviewLabel, {
    duration: setDuration,
    opacity: 0,
    ease: 'power4.out',
  });
  animation.from(overviewTexture, { opacity: 0, duration: 2 }, '<');
  animation.from(
    overviewText,
    { duration: setDuration, y: setYOffset, opacity: 0, ease: 'power4.out' },
    '<'
  );
  animation.from(
    overviewStamp,
    { duration: setDuration, opacity: 0, scale: 1.2, ease: 'power4.out' },
    '<'
  );

  animation.from(
    headerSplit.lines,
    {
      duration: 1,
      opacity: 0,
      stagger: 0.1,
      y: '2rem',
      ease: 'power4.out',
    },
    '<'
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
      toggleActions: 'play none none reverse',
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
      toggleActions: 'play none none reverse',
    },
  });
  animation.from(servicesLabel, { duration: 2, opacity: 0, ease: 'power4.out' });
  animation.from(
    servicesImageMask,
    { duration: 2, y: '4rem', opacity: 0, ease: 'power4.out' },
    '<'
  );
  animation.from(servicesOverview, { duration: 2, y: '4rem', opacity: 0, ease: 'power4.out' }, '<');
  animation.from(
    serviceItems,
    { duration: 2, y: '4rem', opacity: 0, stagger: 0.2, ease: 'expo.out' },
    '<'
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
      toggleActions: 'play none none reverse',
    },
    // onComplete: () => {
    //   // textSplitParent.revert();
    //   textSplit.revert();
    // },
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
    '<'
  );
  animation.from(
    focusParagraph,
    { duration: 2, opacity: 0, y: '4rem', ease: 'power4.out' },
    '<0.5'
  );
  animation.from(focusStamp, { duration: 1, scale: 1.2, opacity: 0, ease: 'power4.out' }, '<');
};
