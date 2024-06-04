// eslint-disable-next-line simple-import-sort/imports
import { footer } from '$components/footer';
import { gsap } from 'gsap';

export const footerTextMovement = () => {
  const footerComponent = document.querySelector('.footer_component') as HTMLElement;
  footerComponent &&
    (() => {
      const footerTextWrap = footerComponent.querySelector('.footer-overflow-wrap') as HTMLElement;

      const textWidth = footerTextWrap.scrollWidth;
      const computedMovement = textWidth - textWidth / 3;

      const textSpeed = 45;
      const animation = gsap.timeline({
        onComplete: () => {
          animation.restart();
        },
      });

      animation.to(footerTextWrap, {
        duration: textSpeed,
        x: -computedMovement,
        ease: 'linear',
      });
    })();
};
