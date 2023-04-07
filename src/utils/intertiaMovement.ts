import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

gsap.registerPlugin(InertiaPlugin);

export const inertiaMovement = () => {
  const scrollSections = [...document.querySelectorAll('[data-scroll-section]')];
  // console.log('sections', scrollSections);

  for (const i in scrollSections) {
    const tempSection = scrollSections[i] as HTMLElement;
    const scrollElements = [...tempSection.querySelectorAll('[data-scroll-speed]')];
    // let setSpeed = 0;

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: tempSection,
        start: 'top 50%',
        end: 'bottom top',
        scrub: true,
        toggleActions: 'play none none reverse',
        // markers: {
        //   startColor: 'yellow',
        //   endColor: 'orange',
        // },
      },
    });

    for (const j in scrollElements) {
      const tempElement = scrollElements[j] as HTMLElement;
      const elementSpeed = Number(tempElement.dataset.scrollSpeed);
      const setSpeed = elementSpeed;
      // console.log('temp', tempElement);

      animation.to(tempElement, { yPercent: setSpeed * 5, ease: 'none' }, '<');
    }
  }
};
