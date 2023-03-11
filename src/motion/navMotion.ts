import { gsap } from 'gsap';

const body = document.body as HTMLElement;
const navMenu = document.querySelector('#navMenu');
const navPageLinks = document.querySelectorAll('.nav_link');
const menuSwatches = document.querySelectorAll('.nav_palette');
const navOverview = document.querySelector('#navOverview');
const navInfoLinks = document.querySelectorAll('.nav_info-link');
const navSpan = document.querySelector('.nav_span');
const navStamp = document.querySelector('.nav_footer-stamp');
const navTexture = document.querySelector('.nav_texture-overlay');

export const menuMotionOpen = () => {
  const animation = gsap.timeline({ paused: true });
  animation.set(body, { overflow: 'hidden' });
  animation.to(navMenu, { display: 'block' });
  animation.from(navMenu, { duration: 0.6, width: '0%', ease: 'power3.inOut' }, '<');
  animation.from(navSpan, { duration: 0.4, width: '0%', ease: 'power3.inOut' }, '-=0.1');

  animation.from(navStamp, {
    duration: 0.6,
    rotation: 0,
    opacity: 0,
    ease: 'power3.out',
  });

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
    navInfoLinks,
    { stagger: { each: 0.2 }, y: '100%', opacity: 0, ease: 'power3.out' },
    '-=0.3'
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
    '-=0.8'
  );

  animation.from(navTexture, { duration: 0.4, opacity: 0, ease: 'power3.inOut' }, '<');

  animation.from(
    menuSwatches,
    {
      opacity: 0,
      ease: 'power1.out',
      duration: 1,
    },
    '-=0.6'
  );

  return animation;
};

export const menuMotionClose = () => {
  const animation = gsap.timeline({ paused: true });

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

  animation.to(navMenu, { duration: 0.6, width: '0%', ease: 'power3.inOut' }, '-=0.6');

  return animation;
};
