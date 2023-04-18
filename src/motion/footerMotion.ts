import { gsap } from 'gsap';

export const footerTextMovement = () => {
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
