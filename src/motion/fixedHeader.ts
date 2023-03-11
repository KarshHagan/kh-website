import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fixedHeader = (section: HTMLElement) => {
  const scrollSection = section.getAttribute('id');
  const scrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#' + scrollSection,
      start: 'bottom top',
      end: 'bottom bottom',
      toggleActions: 'play none none reverse',
      // markers: true,
    },
  });
  scrollTimeline.to(section, { display: 'none' });
};
