import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, InertiaPlugin);

export const horizontalScrollText = () => {
  const scrollSections = [...document.querySelectorAll('[data-scroll-text-wrap]')];

  // Default
  let sp = 'top bottom';
  let ep = 'bottom top';

  for (const i in scrollSections) {
    const tempSection = scrollSections[i] as HTMLElement;
    const textElement = [...tempSection.querySelectorAll('[data-scroll-text]')];
    const scrollType = tempSection.dataset.scrollTextWrap;

    const scroll = scrollSections[i].scrollWidth;
    const windowWidth = window.innerWidth;

    let calcWidth = scroll - windowWidth;

    // console.group('!', scroll, windowWidth, scrollSections);

    if (scrollType === 'top') {
      sp = 'top bottom';
      ep = '10% top';
    }

    // console.log('!!', calcWidth);

    if (calcWidth > 1000) calcWidth = 1000;

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
