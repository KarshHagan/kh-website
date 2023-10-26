import { initSVGMorph } from '$components/morphSVG';
import { scrollToServices, servicesScrollEffect } from '$components/servicesScroll';
import {
  servicesIndustriesReveal,
  servicesOverviewReveal,
  servicesPageReveal,
} from '$motion/servicesMotion';
import { scrollToDeepLinks } from '$utils/scrollToDeepLink';

// import { scrollToServices } from '$utils/scrollToService';

export const services = () => {
  // ---------------
  // Page Globals
  // ---------------
  initSVGMorph();
  servicesScrollEffect();

  scrollToDeepLinks();
  scrollToServices();

  // Reveals
  servicesPageReveal();
  servicesOverviewReveal();
  servicesIndustriesReveal();
};
