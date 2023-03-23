import { gsap } from 'gsap';

const services = [...document.querySelectorAll('.home-services_item')];
const servicesImages = [...document.querySelectorAll('.home-services_image')];

// Services Init
// -------------
export const initServices = () => {
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
export const serviceOpen = (element: HTMLElement) => {
  const hiddenContent = element.children[1] as HTMLElement;
  const buttonWrap = element.children[2] as HTMLElement;
  const animation = gsap.timeline();
  animation.set([hiddenContent, buttonWrap], { display: 'flex', opacity: 0 });
  //   animation.set(buttonWrap, { display: 'block', opacity: 0 });
  animation.to([hiddenContent, buttonWrap], {
    duration: 1,
    height: 'auto',
    opacity: 1,
    ease: 'power4.out',
  });
  //   animation.to(buttonWrap, { duration: 1, opacity: 1, ease: 'power4.out' }, '<');
};
export const serviceClose = (element: HTMLElement) => {
  const hiddenContent = element.children[1] as HTMLElement;
  const buttonWrap = element.children[2] as HTMLElement;
  const animation = gsap.timeline();
  animation.to([hiddenContent, buttonWrap], {
    duration: 1,
    height: '0',
    opacity: 0,
    ease: 'power4.out',
  });
  //   animation.to(buttonWrap, { duration: 1, opacity: 0, ease: 'power4.out' }, '<');
  animation.set([hiddenContent, buttonWrap], { display: 'none' });
};

// Service Item Hover Effects
// --------------------------
const duration = 0.8;
export const servicesHoverIn = (element: HTMLElement) => {
  const defaultImage = servicesImages[0] as HTMLElement;
  const animation = gsap.timeline();
  animation.to(element, { duration: duration, opacity: 1, display: 'block', ease: 'power3.out' });
  animation.to(defaultImage, { duration: duration, opacity: 0, ease: 'power3.out' }, '<');
};
export const servicesHoverOut = (element: HTMLElement) => {
  const defaultImage = servicesImages[0] as HTMLElement;
  const animation = gsap.timeline();
  animation.to(element, { duration: duration, opacity: 0, display: 'none', ease: 'power3.out' });
  animation.to(defaultImage, { duration: duration, opacity: 1, ease: 'power3.out' }, '<');
};

// Service Section Hover Effects
// -----------------------------
const scale = 0.05;
export const serviceImageHover = (movementX: number, movementY: number) => {
  const serviceImageMask = document.querySelector('.home-services_list');
  const animation = gsap.timeline();
  animation.to(serviceImageMask, { x: movementX * scale, y: movementY * scale });
};
