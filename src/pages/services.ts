import { stickyHeader } from '$components/stickyHeader';
import {
  serviceSectionReveal,
  servicesOverviewReveal,
  servicesPageReveal,
} from '$motion/servicesMotion';
import { checkDeepLinks } from '$utils/scrollToDeepLink';
import { scrollToServices } from '$utils/scrollToService';

export const services = () => {
  // ---------------
  // Page Globals
  // ---------------
  stickyHeader();

  checkDeepLinks();
  scrollToServices();

  // Hero
  servicesPageReveal();

  // Services
  servicesOverviewReveal();
  serviceSectionReveal();
};
