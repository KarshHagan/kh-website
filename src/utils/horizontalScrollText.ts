// eslint-disable-next-line simple-import-sort/imports
import { breakpoints } from './breakpoints';
import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, InertiaPlugin);

export const horizontalScrollText = () => {
  const scrollSections = [...document.querySelectorAll('[data-scroll-text-wrap]')];
  const scroll = scrollSections[0].scrollWidth;
  const windowWidth = window.innerWidth;

  const bp = breakpoints()[0];

  const calcWidth = scroll - windowWidth;

  for (const i in scrollSections) {
    const tempSection = scrollSections[i] as HTMLElement;
    const textElement = [...tempSection.querySelectorAll('[data-scroll-text]')];
    const scrollType = tempSection.dataset.scrollTextWrap;

    // Default
    let sp = '25%, 100%';
    let ep = '100% 100%';

    if (bp === 'mobile-landscape' || bp === 'mobile-portrait') {
      sp = '10% 100%';
      ep = '60% 100%';
    }

    if (scrollType === 'top') {
      sp = '0% 100%';
      ep = '100% 100%';
    }

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: tempSection,
        start: sp,
        end: ep,
        // markers: true,
        scrub: true,
      },
    });
    animation.fromTo(textElement, { x: 0 }, { x: -calcWidth, ease: 'linear' });
    // animation.to(textElement, {
    // inertia: { x: { velocity: -100, max: -calcWidth, min: 0 } },
    // });
    // animation.to(textElement[1], { inertia: { x: { velocity: -350 } } }, '<');
  }
};
