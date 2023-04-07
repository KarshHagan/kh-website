import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText, InertiaPlugin);

export const heroScroll = () => {
  const maskedComponent = document.querySelector('.home-hero_masked-component');
  const scrolledComponent = document.querySelector('.home-hero_scrolled');
  const heroMainComponent = document.querySelector('.home-hero_main-component');
  const maskElement = document.querySelector('.home-hero_bg-mask');
  const heroScrollIcon = document.querySelector('#heroScrollIndicator');
  const heroImageText = document.querySelector('.home-hero_text-track');
  const heroBGText = document.querySelector('.bg-text_track');

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: maskedComponent,
      start: '10% top',
      end: '100% top',
      // markers: true,
      toggleActions: 'play none none reverse',
      scrub: 1,
    },
  });

  animation.to(maskElement, {
    width: '40%',
    height: '80%',
    borderRadius: '100vw 100vw 12rem 12rem',
  });
  animation.to(heroMainComponent, { opacity: 0, y: '-2rem', ease: 'power4.out' }, '<');
  animation.to(heroImageText, { opacity: 1 }, '<0.3');

  const indicatorAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: scrolledComponent,
      start: 'top top',
      end: 'top top',
      // markers: true,
      toggleActions: 'play none none reverse',
      // scrub: 1,
    },
  });

  indicatorAnimation.to(heroScrollIcon, {
    duration: 0.8,
    y: '-5rem',
    opacity: 1,
    ease: 'expo.out',
  });

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

export const heroHide = () => {
  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_home-overview',
      start: 'top top',
      end: '50% top',
      toggleActions: 'play none none reverse',
      scrub: true,
      // markers: true,
    },
  });

  const heroBG = document.querySelector('.home-hero_masked-component');
  const heroBGText = document.querySelector('.bg-text_track');
  const heroScrollIcon = document.querySelector('#heroScrollIndicator');
  const heroTexture = document.querySelector('.home-hero_texture');

  animation.to([heroBG, heroBGText, heroScrollIcon, heroTexture], { display: 'none' });
};

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
  // midAnimation.to(midChildren, { duration: textSpeed, x: '40%', ease: 'linear' });

  const outAnimation = gsap.timeline({ repeat: -1, yoyo: true });
  outAnimation.fromTo(
    outChildren,
    { duration: textSpeed, x: -textMovement + '%', ease: 'linear' },
    { duration: textSpeed, x: textMovement + '%', ease: 'linear' }
  );
  // .to(midChildren, { duration: textSpeed, x: -textMovement, ease: 'linear' });
};

// -----------------
// REVEAL ANIMATIONS
// -----------------

// Overview
export const overviewReveal = () => {
  const overviewSection = document.querySelector('.section_home-overview') as HTMLElement;
  const header = overviewSection.querySelector('h2');
  const headerSplit = new SplitText(header, { type: 'lines' });
  const overviewText = overviewSection.querySelector('p');
  const overviewStamp = overviewSection.querySelector('.text-left_image');
  const overviewTexture = overviewSection.querySelector('.home-overview_texture-overlay');
  const overviewLabel = overviewSection.querySelector('.module_label-container');

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: overviewSection,
      start: 'top 50%',
      end: 'top 50%',
      // markers: true,
      toggleActions: 'play none none reverse',
    },
  });
  animation.from(overviewLabel, { y: '2rem', duration: 1, opacity: 0, ease: 'power4.inOut' });
  animation.from(
    headerSplit.lines,
    {
      duration: 1,
      opacity: 0,
      stagger: { each: 0.1 },
      y: '2rem',
      ease: 'power4.out',
    },
    '<0.2'
  );
  animation.from(overviewTexture, { opacity: 0, duration: 2 }, '<');
  animation.from(overviewText, { duration: 1, y: '1rem', opacity: 0, ease: 'power4.out' }, '<');
  animation.from(
    overviewStamp,
    { duration: 1, opacity: 0, scale: 1.2, rotate: '-2deg', ease: 'power4.out' },
    '<'
  );
};

// Featured Work
export const featuredReveal = () => {
  const featuredSection = document.querySelector('.section_home-featured') as HTMLElement;
  const featuedContent = featuredSection.querySelector('.home-featured_info-item') as HTMLElement;
  const splitContent = [...featuedContent.childNodes];
  const revealContainer = featuredSection.querySelector('.home-featured_reveal-wrap');

  gsap.set(revealContainer, { y: 0 });
  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: featuredSection,
      start: 'top 10%',
      end: 'top 10%',
      toggleActions: 'play none none reverse',
      // markers: { startColor: 'green', endColor: 'olive' },
    },
  });
  animation.from(splitContent, {
    duration: 2,
    opacity: 0,
    stagger: { each: 0.2 },
    ease: 'power4.out',
  });
  animation.to(revealContainer, { duration: 1, y: '-100%', ease: 'expo.out' }, '<');
};

// Services
export const servicesReveal = () => {
  const servicesSection = document.querySelector('.section_home-services') as HTMLElement;
  const servicesLabel = servicesSection.querySelector('.module_label-container');
  const servicesOverview = servicesSection.querySelector('p');
  const servicesImageMask = servicesSection.querySelector('.home-services_image-mask');
  const serviceItems = [...servicesSection.querySelectorAll('.home-services_item')];

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: servicesSection,
      start: 'top 50%',
      end: 'top 50%',
      // markers: true,
      toggleActions: 'play none none reverse',
    },
  });
  animation.from(servicesLabel, { y: '2rem', duration: 1, opacity: 0, ease: 'power4.out' });
  animation.from(servicesImageMask, { duration: 2, opacity: 0, ease: 'expo.inOut' }, '<');
  animation.from(servicesOverview, { duration: 1, y: '2rem', opacity: 0, ease: 'power4.out' }, '<');
  animation.from(
    serviceItems,
    { duration: 1, y: '1rem', opacity: 0, stagger: { each: 0.2 }, ease: 'expo.out' },
    '<'
  );
};

// Our Focus
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
      start: 'top 50%',
      end: 'top 50%',
      // markers: true,
      toggleActions: 'play none none reverse',
    },
  });
  animation.from(focusLabel, { y: '2rem', duration: 1, opacity: 0, ease: 'power4.out' });
  animation.from(
    textSplit.lines,
    {
      duration: 1,
      y: '4rem',
      opacity: 0,
      stagger: { each: 0.1 },
      ease: 'power4.out',
    },
    '<0.1'
  );
  animation.from(
    focusParagraph,
    { duration: 1, opacity: 0, y: '2rem', ease: 'power4.inOut' },
    '<1.4'
  );
  animation.from(focusStamp, { duration: 1, scale: 1.4, opacity: 0, ease: 'expo.inOut' }, '<');
};
