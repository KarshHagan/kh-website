/* eslint-disable simple-import-sort/imports */
import { cursorArrowYMovement } from '$motion/cursorMotion';
import {
  menuInit,
  menuLinkHoverIn,
  menuLinkHoverOut,
  menuMotionClose,
  menuMotionOpen,
} from '$motion/navMotion';
import { getDeviceType } from '$utils/getDevice';
import { gsap } from 'gsap';

export const menu = () => {
  const windowLocation = window.location.pathname as string;
  const navMenu = document.querySelector('#navMenu') as HTMLElement;
  const menuButton = document.querySelector('#navMenuButton') as HTMLElement;
  const menuCloseOffset = document.querySelector('.nav_x-offset') as HTMLElement;

  let menuOpenAnimation: any;
  let menuCloseAnimation: any;

  navMenu &&
    (() => {
      menuOpenAnimation = menuMotionOpen();
      menuCloseAnimation = menuMotionClose();

      menuInit(windowLocation);
    })();

  // Menu Open/Close
  // --------------
  let menuIsOpen = false;
  menuButton &&
    (() => {
      menuButton.addEventListener('click', () => {
        menuIsOpen = !menuIsOpen;

        if (menuIsOpen === true) {
          menuOpenAnimation.play(0);
        } else {
          menuCloseAnimation.play(0);
          resetNav();
        }
      });
    })();

  menuCloseOffset &&
    (() => {
      menuCloseOffset.addEventListener('click', () => {
        menuIsOpen = false;
        menuCloseAnimation.play(0);
        resetNav();
      });
    })();

  document.addEventListener('keydown', (e) => {
    const keyPressed = e.key;
    if (keyPressed === 'Escape') {
      if (menuIsOpen === true) {
        menuIsOpen = false;
        menuCloseAnimation.play(0);
        resetNav();
      }
    }
  });

  function resetNav() {
    const device = getDeviceType();

    if (device === 'tablet' || device === 'mobile') {
      const navBG = document.querySelector('.nav-ui_bg-container');
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      let navTransitionTrigger: number;
      if (windowLocation === '/') {
        navTransitionTrigger = window.innerHeight;
      } else {
        navTransitionTrigger = window.innerHeight * 0.6;
      }

      if (scrollTop < navTransitionTrigger) {
        gsap.to(navBG, { delay: 1, backgroundColor: 'transparent' });
      } else {
        gsap.to(navBG, { delay: 1, backgroundColor: '#eeebe6' });
      }
    }
  }

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

  // Cursor Y Movement
  navMenu &&
    (() => {
      navMenu.addEventListener('mousemove', (e) => {
        const mouseY = e.movementY;

        cursorArrowYMovement('default', mouseY);
      });
    })();
};
