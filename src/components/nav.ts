import {
  cursorArrowReveal,
  cursorArrowYMovement,
  cursorButtonIn,
  cursorButtonOut,
} from '$motion/cursorMotion';
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

  // Nav UI Hover Effects
  // --------------------
  const navBrand = document.querySelector('.nav-ui_brand-link') as HTMLElement;
  const navMenuButton = document.querySelector('.nav-ui_menu-link') as HTMLElement;
  const triggerElements = [navBrand, navMenuButton];

  for (const item in triggerElements) {
    const temp = triggerElements[item] as HTMLElement;
    temp.addEventListener('mouseenter', () => {
      cursorButtonIn(1.5);
    });
    temp.addEventListener('mouseleave', () => {
      cursorButtonOut();
    });
  }

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

  // Menu link hover effects
  // -----------------------
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
