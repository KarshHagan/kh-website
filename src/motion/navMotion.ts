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

const menuOpen = document.querySelector('.nav-ui_menu-text.is-menu');
const menuClose = document.querySelector('.nav-ui_menu-text.is-close');

export const menuInit = (page: string) => {
  const hasFurtherIndex = page.substring(1);

  const navMenuText = [...document.querySelectorAll('.nav-ui_menu-text')];
  const navMenuIcon = [...document.querySelectorAll('.nav-ui_icon-span')];
  const navBrand = [...document.querySelectorAll('.nav-ui_brand-image')];

  let setTransition = 'default';

  if (hasFurtherIndex === '') {
    setTransition = 'bgContent';
    gsap.set(navBrand[0], { opacity: 0 });
    gsap.set(navBrand[1], { opacity: 1 });
    gsap.set(navMenuIcon, { backgroundColor: '#EEEBE6' });
    gsap.set(navMenuText, { color: '#EEEBE6' });
  }

  menuTransition(setTransition);
};

export const menuMotionOpen = () => {
  const animation = gsap.timeline({ paused: true });
  animation.set(lenisContainer, { height: '100%' });
  animation.set(menuClose, { y: '100%' });

  animation.to(navMenu, { display: 'flex' });
  animation.to(menuOpen, { duration: 1, y: '-100%', ease: 'power4.out' }, '<');
  animation.to(menuClose, { duration: 1, y: '0%', opacity: 1, ease: 'power4.out' }, '<');

  // animation.to('#menuCloseText', { opacity: 1 }, '<');

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
      y: '2rem',
      opacity: 0,
      ease: 'power3.out',
    },
    '<'
  );

  animation.from(navInfoLinks, { duration: 0.6, y: '2rem', opacity: 0, ease: 'power3.out' }, '<');

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
      duration: 0.6,
      y: '2rem',
      opacity: 0,
      ease: 'power3.out',
    },
    '<'
  );

  animation.to(
    navOverview,
    {
      duration: 0.6,
      y: '2rem',
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

  animation.to(menuOpen, { duration: 1, y: '0%', ease: 'power4.out' }, '<');
  animation.to(menuClose, { duration: 1, y: '100%', opacity: 0, ease: 'power4.out' }, '<');

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
  // animation.to(curLink, { letterSpacing: '3px', ease: 'expo.out' }, '<');
};
export const menuLinkHoverOut = (curLink: HTMLElement) => {
  const animation = gsap.timeline();
  animation.to(curLink, { color: 'rgba(248,244,238,0)', ease: 'expo.out' });
  // animation.to(curLink, { letterSpacing: '0px', ease: 'expo.out' }, '<');
  curLink.classList.add('text-stroke-white');
};

export const menuTransition = (type: string) => {
  const navBG = document.querySelector('.nav-ui_bg-container');
  const navBrand = [...document.querySelectorAll('.nav-ui_brand-image')];
  const navMenuText = [...document.querySelectorAll('.nav-ui_menu-text')];
  const navMenuIcon = [...document.querySelectorAll('.nav-ui_icon-span')];
  const triggerElement = document.querySelector('.nav_scroll-trigger');

  let setColor = '##eeebe6';

  const windowLocation = window.location.pathname as string;

  if (windowLocation.includes('/contact')) {
    setColor = '#212929';
  }

  let setStart = '60% top';
  let setEnd = '60% top';

  if (windowLocation === '/') {
    setStart = '100% top';
    setEnd = '100% top';
  }

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: setStart,
      end: setEnd,
      toggleActions: 'play none none reverse',
      // markers: { startColor: 'olive', endColor: 'lightblue' },
    },
  });
  animation.set(navBG, { backgroundColor: setColor });
  if (type === 'default') {
    animation.to(navBG, { opacity: 1, ease: 'power4.out' });
  } else {
    animation.to(navBG, { opacity: 1, ease: 'power4.ouut' });
    animation.to(navBrand[1], { opacity: 0, ease: 'power4.out' }, '<');
    animation.to(navBrand[0], { opacity: 1, ease: 'power4.out' }, '<');
    animation.to(navMenuText, { color: '#EC2543' }, '<');
    animation.to(navMenuIcon, { backgroundColor: '#EC2543' }, '<');
  }
};
