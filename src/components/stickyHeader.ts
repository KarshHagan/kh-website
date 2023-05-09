import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const stickyHeader = () => {
  const scrollSection = document.querySelector('.section_sticky-header');
  const scrollTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: scrollSection,
      start: '200% top',
      end: '200% top',
      toggleActions: 'play none none reverse',
      markers: true,
    },
  });
  scrollTimeline.to(scrollSection, { duration: 0, backgroundColor: 'transparent' });
};
