import { cursorArrowReveal, cursorArrowYMovement } from '$motion/cursorMotion';
import {
  menuLinkHoverIn,
  menuLinkHoverOut,
  menuMotionClose,
  menuMotionOpen,
} from '$motion/navMotion';

export const menu = () => {
  const navMenu = document.querySelector('#navMenu') as HTMLElement;
  const menuButton = document.querySelector('#navMenuButton') as HTMLElement;
  const menuOpenAnimation = menuMotionOpen();
  const menuCloseAnimation = menuMotionClose();

  let menuIsOpen = false;
  menuButton.addEventListener('click', () => {
    menuIsOpen = !menuIsOpen;

    if (menuIsOpen === true) {
      menuOpenAnimation.play(0);
    } else {
      menuCloseAnimation.play(0);
    }
  });

  const navLinks = [...document.querySelectorAll('.nav_link')];
  const revealAnimation = cursorArrowReveal();

  for (let i = 0; i < navLinks.length; i++) {
    const linkTemp = navLinks[i] as HTMLElement;
    linkTemp.addEventListener('mouseenter', (e) => {
      const enterLink = e.target as HTMLElement;
      menuLinkHoverIn(enterLink);
      revealAnimation.play();
    });
    linkTemp.addEventListener('mouseleave', (e) => {
      const leftLink = e.target as HTMLElement;
      menuLinkHoverOut(leftLink);
      revealAnimation.reverse();
    });
  }
  navMenu.addEventListener('mousemove', (e) => {
    const curCursorType = 'next';
    const mouseY = e.movementY;

    cursorArrowYMovement(curCursorType, mouseY);
  });
};
