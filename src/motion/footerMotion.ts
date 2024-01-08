import { gsap } from 'gsap';

export const footerTextMovement = () => {
  const footerComponent = document.querySelector('.footer_component') as HTMLElement;
  const footerTextWrap = footerComponent.querySelector('.footer-overflow-wrap') as HTMLElement;
  const footerText = footerComponent.querySelector('.footer_large-text') as HTMLElement;

  const textWidth = footerText.scrollWidth;

  const textSpeed = 45;
  const animation = gsap.timeline({
    onComplete: () => {
      animation.restart();
    },
  });
  // animation.to(footerText, {
  //   duration: textSpeed,
  //   x: -textWidth,
  //   ease: 'linear',
  // });
};
