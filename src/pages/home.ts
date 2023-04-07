import { featuredWork } from '$components/featuredWork';
import { services } from '$components/services';
import {
  featuredReveal,
  focusReveal,
  heroHide,
  heroScroll,
  heroZText,
  overviewReveal,
  servicesReveal,
} from '$motion/homeMotion';
import { horizontalScrollText } from '$utils/horizontalScrollText';

export const home = () => {
  // ---------------
  // Page Globals
  // ---------------
  console.log('home');

  // Fixed Header
  // const headerElement = document.querySelector('#homeHero') as HTMLElement;
  // fixedHeader(headerElement);

  // Hero
  heroScroll();
  heroHide();
  heroZText();

  // Overview
  overviewReveal();

  // Featured Work
  horizontalScrollText();
  featuredReveal();
  featuredWork();

  // Services
  servicesReveal();
  services();

  // Our Focus
  focusReveal();
};
