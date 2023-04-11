import { fixedHeader } from '$motion/fixedHeader';
import { serviceSectionReveal, servicesPageReveal } from '$motion/servicesMotion';
import { scrollToServices } from '$utils/scrollToService';

export const services = () => {
  // ---------------
  // Page Globals
  // ---------------
  console.log('services');

  // Fixed Header
  const headerElement = document.querySelector('#fixedHeader') as HTMLElement;
  fixedHeader(headerElement);

  scrollToServices();

  // Hero
  servicesPageReveal();

  // Services
  serviceSectionReveal();
};
