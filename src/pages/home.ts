import { featuredWork } from '$components/featuredWork';
import { services } from '$components/services';
import {
  featuredReveal,
  featuredTextMovement,
  heroHide,
  heroScroll,
  heroZText,
  overviewReveal,
  servicesReveal,
} from '$motion/homeMotion';

export const home = () => {
  // ---------------
  // Page Globals
  // ---------------
  console.log('home');

  // Fixed Header
  // const headerElement = document.querySelector('#homeHero') as HTMLElement;
  // fixedHeader(headerElement);

  // Hero
  // -------------
  heroScroll();
  heroHide();
  heroZText();

  overviewReveal();

  // Featured Work
  // -------------
  featuredTextMovement();
  featuredReveal();
  featuredWork();

  // Services
  // -------------
  servicesReveal();
  services();
};
