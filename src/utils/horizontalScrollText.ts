import { gsap } from 'gsap';

export const horizontalScrollText = () => {
  const scrollSections = [...document.querySelectorAll('[data-scroll-text-wrap]')];

  for (const i in scrollSections) {
    const tempSection = scrollSections[i] as HTMLElement;
    const textElement = [...tempSection.querySelectorAll('[data-scroll-text]')];

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: tempSection,
        start: 'top bottom',
        end: 'bottom -200%',
        markers: { startColor: 'pink', endColor: 'purple' },
        scrub: true,
      },
    });
    animation.to(textElement[0], { inertia: { x: { velocity: -300 } } });
    animation.to(textElement[1], { inertia: { x: { velocity: -300 } } }, '<');
  }
};
