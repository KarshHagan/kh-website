import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const services = [...document.querySelectorAll('.home-services_item')];
const servicesImages = [...document.querySelectorAll('.home-services_image')];

// Accordian Init
// -------------
export const initAccordian = () => {
  // Services Items
  for (let i = 0; i < services.length; i++) {
    const temp = services[i] as HTMLElement;
    const hidenContent = temp.children[1] as HTMLElement;
    const hideButtons = temp.children[2] as HTMLElement;
    gsap.set(hidenContent, { height: '0', display: 'none' });
    gsap.set(hideButtons, { display: 'none', opacity: 0 });
  }

  // Image Items
  for (let i = 0; i < servicesImages.length; i++) {
    const temp = servicesImages[i] as HTMLElement;
    if (i > 0) {
      gsap.set(temp, { opacity: 0, display: 'none' });
    }
  }
};

// Accordian Motion
// ----------------
export const accordianOpen = (element: HTMLElement) => {
  const hiddenContent = element.children[1] as HTMLElement;
  const buttonWrap = element.children[2] as HTMLElement;
  const animation = gsap.timeline();
  animation.set([hiddenContent, buttonWrap], { display: 'flex', opacity: 0 });
  animation.to([hiddenContent, buttonWrap], {
    duration: 1,
    height: 'auto',
    opacity: 1,
    ease: 'power4.out',
  });
};
export const accordianClose = (element: HTMLElement) => {
  const hiddenContent = element.children[1] as HTMLElement;
  const buttonWrap = element.children[2] as HTMLElement;
  const animation = gsap.timeline();
  animation.to([hiddenContent, buttonWrap], {
    duration: 1,
    height: '0',
    opacity: 0,
    ease: 'power4.out',
  });
  animation.set([hiddenContent, buttonWrap], { display: 'none' });
};

// Accordian Hover Effects
// -----------------------
const duration = 0.8;
export const accordianHoverIn = (element: HTMLElement) => {
  const defaultImage = servicesImages[0] as HTMLElement;
  const animation = gsap.timeline();
  animation.to(element, { duration: duration, opacity: 1, display: 'block', ease: 'power3.out' });
  animation.to(defaultImage, { duration: duration, opacity: 0, ease: 'power3.out' }, '<');
};
export const accordianHoverOut = (element: HTMLElement) => {
  const defaultImage = servicesImages[0] as HTMLElement;
  const animation = gsap.timeline();
  animation.to(element, { duration: duration, opacity: 0, display: 'none', ease: 'power3.out' });
  animation.to(defaultImage, { duration: duration, opacity: 1, ease: 'power3.out' }, '<');
};

// Service Section Hover Effects
// -----------------------------
const scale = 0.05;
export const accordianImageHover = (movementX: number, movementY: number) => {
  const serviceImageMask = document.querySelector('.home-services_list');
  const animation = gsap.timeline();
  animation.to(serviceImageMask, { x: movementX * scale, y: movementY * scale });
};
