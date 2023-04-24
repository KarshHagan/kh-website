import { fixedHeader } from '$motion/fixedHeader';
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
  console.log('services');

  // Fixed Header
  const headerElement = document.querySelector('#fixedHeader') as HTMLElement;
  fixedHeader(headerElement);

  checkDeepLinks();
  scrollToServices();

  // Hero
  servicesPageReveal();

  // Services
  servicesOverviewReveal();
  serviceSectionReveal();
};
