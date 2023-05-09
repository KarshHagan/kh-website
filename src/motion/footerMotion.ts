import { gsap } from 'gsap';

export const footerTextMovement = () => {
  const footerComponent = document.querySelector('.footer_component') as HTMLElement;
  const footerTextWrap = footerComponent.querySelector('.footer-overflow-wrap') as HTMLElement;
  const footerText = footerComponent.querySelector('.footer_large-text') as HTMLElement;

  const textWidth = footerText.scrollWidth;
  const wrapperWidth = footerComponent.offsetWidth;
  const computedMovement = textWidth - wrapperWidth;

  console.log(wrapperWidth, footerTextWrap.offsetWidth);
  console.log(computedMovement);

  const textSpeed = 5;
  const textMovement = 400;
  const animation = gsap.timeline({});
  animation.to(footerText, { duration: textSpeed, x: -computedMovement, ease: 'linear' });
  // animation.fromTo(
  //   footerText,
  //   { duration: textSpeed, x: -computedMovement + '%', ease: 'linear' },
  //   { duration: textSpeed, x: 0 + '%', ease: 'linear' }
  // );
};
