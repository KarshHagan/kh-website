import { stickyHeader } from '$components/stickyHeader';
import {
  serviceSectionReveal,
  servicesOverviewReveal,
  servicesPageReveal,
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

  // Hero
  servicesPageReveal();

  // Services
  servicesOverviewReveal();
  serviceSectionReveal();
};
