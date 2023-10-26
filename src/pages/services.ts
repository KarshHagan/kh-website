import { initSVGMorph } from '$components/morphSVG';
import { servicesScrollEffect } from '$components/servicesScroll';
import {
  serviceSectionReveal,
  servicesOverviewReveal,
  servicesPageReveal,
} from '$motion/servicesMotion';
import { scrollToDeepLinks } from '$utils/scrollToDeepLink';
import { scrollToServices } from '$utils/scrollToService';

// import { scrollToServices } from '$utils/scrollToService';

export const services = () => {
  // ---------------
  // Page Globals
  // ---------------
  initSVGMorph();
  servicesScrollEffect();

  scrollToDeepLinks();
  scrollToServices();

  // Hero
  // servicesPageReveal();

  // Services
  // servicesOverviewReveal();
  // serviceSectionReveal();
};
