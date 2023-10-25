import { initSVGMorph } from '$components/morphSVG';
import { stickyHeader } from '$components/stickyHeader';
import {
  scrollToServices,
  serviceSectionReveal,
  servicesOverviewReveal,
  servicesPageReveal,
  servicesScrollEffect,
} from '$motion/servicesMotion';
import { scrollToDeepLinks } from '$utils/scrollToDeepLink';

// import { scrollToServices } from '$utils/scrollToService';

export const services = () => {
  // ---------------
  // Page Globals
  // ---------------
  initSVGMorph();
  servicesScrollEffect();

  // scrollToDeepLinks();
  // scrollToServices();

  // Hero
  // servicesPageReveal();

  // Services
  // servicesOverviewReveal();
  // serviceSectionReveal();
};
