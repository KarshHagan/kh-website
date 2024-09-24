// eslint-disable-next-line simple-import-sort/imports
import { getSVGPathData } from '$components/morphSVG';
import { hideAll } from '$utils/filterContent';
import { getDeviceType } from '$utils/getDevice';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

gsap.registerPlugin(MorphSVGPlugin);

// INIT
// -----------
const services = [...document.querySelectorAll('.home-services_item')];
const servicesImages = [...document.querySelectorAll('.home-services_image')];
const docStyle = getComputedStyle(document.documentElement);

export const initAccordian = () => {
  const morphSVGData = document.querySelector('.home-services_svg-data');
  gsap.set(morphSVGData, { display: 'none' });

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

// MAIN
// -----------
export const accordianList = () => {
  initAccordian();
  accordianImageHover();

  // MAIN
  // ------------
  const services = [...document.querySelectorAll('.home-services_item')];

  for (let i = 0; i < services.length; i++) {
    let isOpen = false;
    const temp = services[i] as HTMLElement;
    temp.dataset.test = String(i);
    temp.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.matches('.button') === false) {
        if (isOpen === false) {
          accordianOpen(target);
        } else if (isOpen === true) {
          accordianClose(target);
        }

        isOpen = !isOpen;
      }
    });

    // Hover Effects
    setTimeout(() => {
      const svgData = getSVGPathData();
      const kBase = svgData[0] as HTMLElement;
      const kPoints = svgData[1] as gsap.SVGPathValue[];
      const hBase = svgData[2] as HTMLElement;
      const hPoints = svgData[3] as gsap.SVGPathValue[];
      const hideElement = svgData[4];

      temp.addEventListener('mouseenter', (e) => {
        const ele = e.target as HTMLElement;
        const eleId = Number(ele.dataset.test);
        const toKPoints = kPoints[eleId];
        const toHPoints = hPoints[eleId];

        console.log('mouse enter');

        gsap.to(kBase, { morphSVG: { shape: toKPoints }, ease: 'Power4.out' });
        gsap.to(hBase, { morphSVG: { shape: toHPoints }, ease: 'Power4.out' });

        if (eleId === 0) {
          gsap.to(hideElement, { opacity: 1, ease: 'power4.out' });
        }
      });
      temp.addEventListener('mouseleave', (e) => {
        const ele = e.target as HTMLElement;
        const eleId = Number(ele.dataset.test);

        if (eleId === 0) {
          gsap.to(hideElement, { opacity: 0, ease: 'power4.out' });
        }
      });
    }, 500);
  }
};

// MOTION
// ----------------
export const accordianOpen = (element: HTMLElement) => {
  const hiddenContent = element.children[1] as HTMLElement;
  const buttonWrap = element.children[2] as HTMLElement;
  const sectionCarrot = element.querySelector('.home-services_carrot-icon');
  const animation = gsap.timeline();
  animation.set([hiddenContent, buttonWrap], { display: 'flex', opacity: 0 });
  animation.to([hiddenContent, buttonWrap], {
    duration: 1,
    height: 'auto',
    opacity: 1,
    ease: 'power4.out',
  });
  animation.to(
    sectionCarrot,
    {
      duration: 1,
      rotate: 60,
      backgroundColor: docStyle.getPropertyValue('--brand-green'),
      ease: 'power4.out',
    },
    '<'
  );
};
export const accordianClose = (element: HTMLElement) => {
  const hiddenContent = element.children[1] as HTMLElement;
  const buttonWrap = element.children[2] as HTMLElement;
  const sectionCarrot = element.querySelector('.home-services_carrot-icon');

  const animation = gsap.timeline();
  animation.to([hiddenContent, buttonWrap], {
    duration: 1,
    height: '0',
    opacity: 0,
    ease: 'power4.out',
  });
  animation.to(
    sectionCarrot,
    {
      duration: 1,
      rotate: 0,
      backgroundColor: docStyle.getPropertyValue('--brand-red'),
      ease: 'power4.out',
    },
    '<'
  );

  animation.set([hiddenContent, buttonWrap], { display: 'none' });
};

// Service Section Hover Effects
// -----------------------------
export const accordianImageHover = () => {
  const device = getDeviceType();
  if (device === 'desktop') {
    const scale = 0.08;
    const servicesContainer = document.querySelector('.section_home-services') as HTMLElement;
    const serviceImageMask = document.querySelector('.home-services_sticky-wrap');

    servicesContainer.addEventListener('mousemove', (e) => {
      gsap.to(serviceImageMask, { x: e.clientX * 0.02, y: e.clientY * scale, ease: 'power4.out' });
    });
  }
};
