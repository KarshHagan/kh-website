import { menuMotionClose, menuMotionOpen } from '$motion/navMotion';

export const menu = () => {
  const menuButton = document.querySelector('#navMenuButton') as HTMLElement;
  const menuOpenAnimation = menuMotionOpen();
  const menuCloseAnimation = menuMotionClose();

  let menuIsOpen = false;
  menuButton.addEventListener('click', (e) => {
    menuIsOpen = !menuIsOpen;

    if (menuIsOpen === true) {
      menuOpenAnimation.play(0);
    } else {
      menuCloseAnimation.play(0);
    }
  });
};
