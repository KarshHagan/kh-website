import { stickyHeader } from '$components/stickyHeader';
import {
  serviceSectionReveal,
  servicesOverviewReveal,
  servicesPageReveal,
  servicesScrollEffect,
} from '$motion/servicesMotion';
import { scrollToDeepLinks } from '$utils/scrollToDeepLink';
import { scrollToServices } from '$utils/scrollToService';

export const services = () => {
  // ---------------
  // Page Globals
  // ---------------
  stickyHeader();

  scrollToDeepLinks();
  scrollToServices();

  servicesScrollEffect();

  // Hero
  // servicesPageReveal();

  // Services
  // servicesOverviewReveal();
  // serviceSectionReveal();
};
