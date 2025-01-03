import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, InertiaPlugin);

export const horizontalScrollText = () => {
  const scrollSections = [...document.querySelectorAll('[data-scroll-text-wrap]')];
  const scroll = scrollSections[0].scrollWidth;
  const windowWidth = window.innerWidth;

  const calcWidth = scroll - windowWidth;

  // console.log('HERE', calcWidth);

  for (const i in scrollSections) {
    const tempSection = scrollSections[i] as HTMLElement;
    const textElement = [...tempSection.querySelectorAll('[data-scroll-text]')];

    // console.log(tempSection, textElement);

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: tempSection,
        start: 'top 90%',
        end: '80% 90%',
        // markers: true,
        scrub: true,
      },
    });
    animation.to(textElement, { x: -calcWidth });
    // animation.to(textElement, { inertia: { x: { velocity: -350, max: -calcWidth, min: 0 } } });
    // animation.to(textElement[1], { inertia: { x: { velocity: -350 } } }, '<');
  }
};
