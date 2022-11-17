import { gsap } from 'gsap';

import { querySelectorToArray } from '$utils/querySelectorToArray';

export const brandHover = () => {
  const karshWrapper = document.querySelector('.brand_wrap.is-karsh');
  const karshMoveElements = querySelectorToArray('.brand_image.karsh-move');
  const haganWrapper = document.querySelector('.brand_wrap.is-hagan');
  const haganMoveElements = querySelectorToArray('.brand_image.hagan-move');

  const brandHoverTL = gsap.timeline({ paused: true });

  brandHoverTL.to(karshWrapper, { duration: 0.6, width: '4.8rem', ease: 'expo.out' });
  brandHoverTL.to(haganWrapper, { duration: 0.6, width: '5rem', ease: 'expo.out' }, '-=0.6');
  brandHoverTL.to(
    karshMoveElements,
    {
      duration: 0.15,
      y: '0rem',
      display: 'block',
      ease: 'power3.out',
      stagger: 0.075,
    },
    '-=0.4'
  );
  brandHoverTL.to(
    haganMoveElements,
    {
      duration: 0.15,
      y: '0rem',
      display: 'block',
      ease: 'power3.out',
      stagger: 0.075,
    },
    '-=0.4'
  );

  return brandHoverTL;
};
