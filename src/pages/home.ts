import { featuredWork } from '$components/featuredWork';
import { services } from '$components/services';
import { heroHide, heroScroll, heroZText } from '$motion/homeHeroScroll';

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

  // Featured Work
  // -------------
  featuredWork();

  // Services
  // -------------
  services();
};
