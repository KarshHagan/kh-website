// import { cursorArrowYMovement } from '$motion/cursorMotion';
import { cursorArrowYMovement } from '$motion/cursorMotion';
import {
  menuInit,
  menuLinkHoverIn,
  menuLinkHoverOut,
  menuMotionClose,
  menuMotionOpen,
} from '$motion/navMotion';

export const menu = () => {
  const windowLocation = window.location.pathname as string;
  const navMenu = document.querySelector('#navMenu') as HTMLElement;
  const menuButton = document.querySelector('#navMenuButton') as HTMLElement;
  const menuCloseOffset = document.querySelector('.nav_x-offset') as HTMLElement;
  const menuOpenAnimation = menuMotionOpen();
  const menuCloseAnimation = menuMotionClose();

  menuInit(windowLocation);

  // Menu Open/Close
  // --------------
  let menuIsOpen = false;
  menuButton.addEventListener('click', () => {
    menuIsOpen = !menuIsOpen;

    if (menuIsOpen === true) {
      menuOpenAnimation.play(0);
    } else {
      menuCloseAnimation.play(0);
    }
  });

  menuCloseOffset.addEventListener('click', () => {
    menuIsOpen = false;
    menuCloseAnimation.play(0);
  });

  // Menu link hover effects
  // -----------------------
  const navLinks = [...document.querySelectorAll('.nav_link')];

  for (let i = 0; i < navLinks.length; i++) {
    const linkTemp = navLinks[i] as HTMLElement;
    linkTemp.addEventListener('mouseenter', (e) => {
      const enterLink = e.target as HTMLElement;
      menuLinkHoverIn(enterLink);
    });
    linkTemp.addEventListener('mouseleave', (e) => {
      const leftLink = e.target as HTMLElement;
      menuLinkHoverOut(leftLink);
    });
  }
  navMenu.addEventListener('mousemove', (e) => {
    const mouseY = e.movementY;

    cursorArrowYMovement('default', mouseY);
  });
};
