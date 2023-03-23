import { gsap } from 'gsap';

export const heroScroll = () => {
  const homeHero = document.querySelector('.section_home-hero');
  const homeHeroScrolled = document.querySelector('.home-hero_scrolled');
  const heroBg = document.querySelector('.home-hero_bg-mask');
  const heroScrollIcon = document.querySelector('#heroScrollIndicator');
  const heroImageText = document.querySelector('.home-hero_text-track');
  const heroBGText = document.querySelector('.bg-text_track');

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: homeHero,
      start: '10% top',
      end: '60% top',
      // markers: true,
      toggleActions: 'play none none reverse',
      scrub: 1,
    },
  });

  animation.to(heroBg, {
    width: '40%',
    height: '80%',
    borderRadius: '100vw 100vw 12rem 12rem',
  });
  animation.to(heroImageText, { opacity: 1 }, '<0.3');

  const indicatorAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: homeHero,
      start: '40% top',
      end: '40% top',
      // markers: true,
      toggleActions: 'play none none reverse',
      // scrub: 1,
    },
  });

  indicatorAnimation.to(heroScrollIcon, {
    duration: 0.8,
    y: '-5rem',
    opacity: 1,
    ease: 'expo.out',
  });

  const textScrollAniamtion = gsap.timeline({
    scrollTrigger: {
      trigger: homeHeroScrolled,
      start: 'top top',
      end: 'bottom top',
      // markers: true,
      toggleActions: 'play none none reverse',
      scrub: 1,
    },
  });
  textScrollAniamtion.to(heroImageText, { rotate: '4deg' });
  textScrollAniamtion.to(heroBGText, { rotate: '4deg' }, '<');
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
  const heroScrollIcon = document.querySelector('#heroScrollIndicator');
  const heroTexture = document.querySelector('.home-hero_texture');

  animation.to([heroBG, heroBGText, heroScrollIcon, heroTexture], { display: 'none' });
};

export const heroZText = () => {
  const maskedTrack = document.querySelector('.home-hero_text-track') as HTMLElement;
  const bgTrack = document.querySelector('.bg-text_track') as HTMLElement;

  const maskedChildren = [...maskedTrack.childNodes];
  const bgChildren = [...bgTrack.childNodes];

  const midChildren = [];
  const outChildren = [];

  for (let i = 0; i < 3; i++) {
    const maskedTemp = maskedChildren[i] as HTMLElement;
    const bgTemp = bgChildren[i] as HTMLElement;

    if (maskedTemp.classList.contains('is-mid') || bgTemp.classList.contains('is-mid')) {
      midChildren.push(maskedTemp);
      midChildren.push(bgTemp);
    } else {
      outChildren.push(maskedTemp);
      outChildren.push(bgTemp);
    }
  }

  const textSpeed = 45;
  const textMovement = 40;
  const midAnimation = gsap.timeline({ repeat: -1, yoyo: true });
  midAnimation.fromTo(
    midChildren,
    { duration: textSpeed, x: textMovement + '%', ease: 'linear' },
    { duration: textSpeed, x: -textMovement + '%', ease: 'linear' }
  );
  // midAnimation.to(midChildren, { duration: textSpeed, x: '40%', ease: 'linear' });

  const outAnimation = gsap.timeline({ repeat: -1, yoyo: true });
  outAnimation.fromTo(
    outChildren,
    { duration: textSpeed, x: -textMovement + '%', ease: 'linear' },
    { duration: textSpeed, x: textMovement + '%', ease: 'linear' }
  );
  // .to(midChildren, { duration: textSpeed, x: -textMovement, ease: 'linear' });
};
