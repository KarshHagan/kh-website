import { featuredWork } from '$components/featuredWork';
import { heroHide, heroScroll, heroZText } from '$motion/homeHeroScroll';

export const home = () => {
  // ---------------
  // Page Globals
  // ---------------

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
};
