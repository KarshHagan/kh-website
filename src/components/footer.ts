import { gsap } from 'gsap';

export const footer = () => {
  const footerElement = document.querySelector('.footer_component') as HTMLElement;
  const footerSpacer = document.querySelector('.section_footer-spacer') as HTMLElement;

  const footerCornerFix = 5 * 16;
  const footerHeight = footerElement.clientHeight;

  footerSpacer.style.height = footerHeight - footerCornerFix + 'px';

  const footerText = document.querySelector('.footer_large-text');

  const textSpeed = 60;
  const textMovement = 400;
  const animation = gsap.timeline({ repeat: -1, yoyo: true });
  animation.fromTo(
    footerText,
    { duration: textSpeed, x: -textMovement + '%', ease: 'linear' },
    { duration: textSpeed, x: 0 + '%', ease: 'linear' }
  );
};
