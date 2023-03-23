// eslint-disable-next-line simple-import-sort/imports
import { cursorButtonIn, cursorButtonOut } from '$motion/cursorMotion';
import { gsap } from 'gsap';

const cursor = document.querySelector('.cursor_component') as HTMLElement;
export const cursorGlobal = () => {
  gsap.set(cursor, { xPercent: -50, yPercent: -50 });

  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.2;

  const xSet = gsap.quickSetter(cursor, 'x', 'px');
  const ySet = gsap.quickSetter(cursor, 'y', 'px');

  // console.log(window);
  window.addEventListener('mousemove', (e) => {
    // console.log('e');
    mouse.x = e.x;
    mouse.y = e.y;
  });

  gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
  });
};

export const cursorGlobalButton = () => {
  const buttons = [...document.querySelectorAll('[data-hover-scale]')];

  for (let i = 0; i < buttons.length; i++) {
    const buttonTemp = buttons[i] as HTMLElement;
    const tempScale = Number(buttonTemp.dataset.hoverScale);
    // console.log(buttonTemp.dataset.hoverScale);

    buttonTemp.addEventListener('mouseenter', () => {
      // console.log('button enter');
      cursorButtonIn(tempScale);
    });
    buttonTemp.addEventListener('mouseleave', () => {
      // console.log('button leave');
      cursorButtonOut();
    });
  }
};
