import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const metricsMotion = () => {
  const container = document.querySelector('.section_metrics') as HTMLElement;
  const items = [...document.querySelectorAll('.metric_item')].map((item) => item as HTMLElement);
  const tl = gsap.timeline({
    scrollTrigger: { trigger: container, start: 'top 80%', end: 'top 80%' },
  });

  tl.fromTo(
    items,
    { opacity: 0, y: '3rem' },
    { duration: 1, opacity: 1, y: '0rem', stagger: 0.25, ease: 'power2.inOut' }
  );
};

export const offerMotion = () => {
  const component = document.querySelector('.section_offer') as HTMLElement;
  const header = component.querySelector('.header_component') as HTMLElement;
  const items = [...document.querySelectorAll('.grid_item')];
  const tl = gsap.timeline({
    scrollTrigger: { trigger: component, start: 'top 70%', end: 'top 70%', markers: true },
  });
  tl.fromTo(
    header,
    { opacity: 0, y: '3rem' },
    { duration: 1, opacity: 1, y: '0rem', ease: 'sine.inOut' }
  );
  tl.fromTo(
    items,
    { opacity: 0, y: '3rem' },
    { duration: 1, opacity: 1, y: '0rem', stagger: 0.2, ease: 'sine.out' },
    '<'
  );
};
