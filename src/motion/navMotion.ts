import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const navMenu = document.querySelector('#navMenu');
const navPageLinks = document.querySelectorAll('.nav_link');
const menuSwatches = document.querySelectorAll('.nav_palette');
const navOverview = document.querySelector('#navOverview');
const navInfoLinks = document.querySelectorAll('.nav_info-link');
const navSpan = document.querySelector('.nav_span');
const navStamp = document.querySelector('.nav_footer-stamp');
const navTexture = document.querySelector('.nav_texture-overlay');
const navIconSpans = document.querySelectorAll('.nav-ui_icon-span');
const navBG = document.querySelector('.nav-ui_bg-container');

const lenisContainer = document.querySelector('html');

const menuOpenSplit = new SplitText('#menuText', { type: 'words,chars' });
const menuCloseSplit = new SplitText('#menuCloseText', { type: 'words,chars' });

export const menuMotionOpen = () => {
  const animation = gsap.timeline({ paused: true });
  animation.set(lenisContainer, { height: '100%' });
  animation.to(navMenu, { display: 'block' });

  animation.to(menuOpenSplit.chars, { y: '-2rem', stagger: { each: 0.1 }, ease: 'power.out' }, '<');
  animation.from(
    menuCloseSplit.chars,
    { y: '2rem', stagger: { each: 0.1 }, ease: 'power4.out' },
    '<'
  );
  animation.to('#menuCloseText', { opacity: 1 }, '<');

  animation.to(navIconSpans[0], { duration: 1.5, y: '3px', ease: 'expo.out' }, '<');
  animation.to(navIconSpans[1], { duration: 1.5, y: '-3px', ease: 'expo.out' }, '<');

  animation.to(navBG, { y: '-100%', ease: 'power3.out' }, '<');

  animation.from(navMenu, { duration: 0.6, width: '0%', ease: 'power3.inOut' }, '<');

  animation.from(navSpan, { duration: 0.4, width: '0%', ease: 'power3.inOut' }, '<0.4');

  animation.from(
    navStamp,
    {
      duration: 0.6,
      rotation: 0,
      opacity: 0,
      ease: 'power3.out',
    },
    '<0.2'
  );

  animation.from(
    navOverview,
    {
      duration: 0.6,
      y: '100%',
      opacity: 0,
      ease: 'power3.out',
    },
    '<'
  );

  animation.from(
    navPageLinks,
    {
      stagger: { each: 0.1 },
      y: '100%',
      opacity: 0,
      rotation: 7,
      ease: 'expo.out',
    },
    '<'
  );

  animation.from(
    navInfoLinks,
    { stagger: { each: 0.2 }, y: '100%', opacity: 0, ease: 'power3.out' },
    '<0.2'
  );

  animation.from(navTexture, { duration: 1, opacity: 0, ease: 'power1.inOut' }, '<');

  animation.from(
    menuSwatches,
    {
      opacity: 0,
      ease: 'power1.out',
      duration: 1,
    },
    '<'
  );

  return animation;
};

export const menuMotionClose = () => {
  const animation = gsap.timeline({ paused: true });

  animation.set(lenisContainer, { height: 'auto' });
  animation.to(menuSwatches, {
    opacity: 0,
    ease: 'power1.out',
    duration: 1,
  });

  animation.to(navTexture, { duration: 0.4, opacity: 0, ease: 'power3.inOut' }, '<');

  animation.to(
    navInfoLinks,
    {
      duration: 1,
      y: '100%',
      opacity: 0,
      ease: 'power3.out',
    },
    '<'
  );

  animation.to(
    navOverview,
    {
      duration: 1,
      y: '100%',
      opacity: 0,
      ease: 'power3.out',
    },
    '<'
  );

  animation.to(
    navPageLinks,
    {
      duration: 1,
      y: '100%',
      opacity: 0,
      ease: 'expo.out',
    },
    '<'
  );

  animation.to(
    navStamp,
    {
      duration: 0.6,
      rotation: 0,
      opacity: 0,
      ease: 'power3.out',
    },
    '<'
  );

  animation.to(navSpan, { duration: 0.4, width: '0%', ease: 'expo.inOut' }, '<');

  animation.to(menuOpenSplit.chars, { y: '0rem', stagger: { each: 0.1 }, ease: 'power.out' }, '<');
  animation.to(
    menuCloseSplit.chars,
    { y: '2rem', stagger: { each: 0.1 }, ease: 'power4.out' },
    '<'
  );
  animation.to('#menuCloseText', { opacity: 0 }, '<');

  animation.to(navIconSpans[0], { duration: 1.5, y: '0px', ease: 'expo.out' }, '<');
  animation.to(navIconSpans[1], { duration: 1.5, y: '0px', ease: 'expo.out' }, '<');

  animation.to(navMenu, { duration: 0.6, width: '0%', ease: 'power3.inOut' }, '<0.4');
  animation.to(navBG, { y: '0%', ease: 'power3.out' }, '<0.4');

  animation.set(navMenu, { display: 'none' });

  return animation;
};

export const menuLinkHoverIn = (curLink: HTMLElement) => {
  const animation = gsap.timeline({});
  animation.to(curLink, { color: 'rgba(248,244,238,1)', ease: 'expo.out' });
  animation.to(curLink, { letterSpacing: '3px', ease: 'expo.out' }, '<');
};
export const menuLinkHoverOut = (curLink: HTMLElement) => {
  const animation = gsap.timeline();
  animation.to(curLink, { color: 'rgba(248,244,238,0)', ease: 'expo.out' });
  animation.to(curLink, { letterSpacing: '0px', ease: 'expo.out' }, '<');
  curLink.classList.add('text-stroke-white');
};

export const menuTransition = () => {
  const navBG = document.querySelector('.nav-ui_bg-container');
  const navBrand = [...document.querySelectorAll('.nav-ui_brand-image')];
  const navMenuText = [...document.querySelectorAll('.nav-ui_menu-text')];
  const navMenuIcon = [...document.querySelectorAll('.nav-ui_icon-span')];
  const triggerElement = document.querySelector('.nav_scroll-trigger');

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'center top',
      end: 'center top',
      toggleActions: 'play none none reverse',
      // markers: true,
    },
  });
  animation.to(navBG, { opacity: 1, ease: 'expo.inOut' });
  animation.to(navBrand[0], { opacity: 0, ease: 'expo.inOut' }, '<');
  animation.to(navBrand[1], { opacity: 1, ease: 'expo.inOut' }, '<');
  animation.to(navMenuText, { color: '#EC2543' }, '<');
  animation.to(navMenuIcon, { backgroundColor: '#EC2543' }, '<');
};
