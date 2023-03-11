import { gsap } from 'gsap';

export const heroScroll = () => {
  const homeHero = document.querySelector('.section_home-hero');

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: homeHero,
      start: 'top top',
      end: '50% top',
      // markers: true,
      toggleActions: 'play none none reverse',
      scrub: 1,
    },
  });

  const heroBg = document.querySelector('.home-hero_bg-mask');
  animation.to(heroBg, {
    width: '50%',
    height: '80%',
    borderRadius: '100vw 100vw 2rem 2rem',
    duration: 1,
  });

  const scrollIndicator = gsap.timeline({
    scrollTrigger: {
      trigger: homeHero,
      start: 'top top',
      end: '50% top',
      markers: true,
      toggleActions: 'play none none reverse',
      scrub: 1,
    },
  });
};

export const heroHide = () => {
  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_home-overview',
      start: 'top top',
      end: '50% top',
      toggleActions: 'play none none reverse',
      scrub: true,
      // markers: true,
    },
  });

  const heroBG = document.querySelector('.home-hero_bg-compnent');
  const heroBGText = document.querySelector('.bg-text_track');

  animation.to(heroBG, { display: 'none' });
  animation.to(heroBGText, { display: 'none' });
};
