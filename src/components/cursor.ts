// eslint-disable-next-line simple-import-sort/imports
import {
  cursorIconRevealIn,
  cursorIconRevealOut,
  cursorRevealIn,
  cursorRevealOut,
} from '$motion/cursorMotion';
import { getDeviceType } from '$utils/getDevice';
import { getVideoState } from './videoPlayer';
import { gsap } from 'gsap';

const cursor = document.querySelector('.cursor_component') as HTMLElement;

export const cursorMovement = () => {
  const device = getDeviceType();
  if (device === 'tablet' || device === 'mobile') {
    gsap.set(cursor, { display: 'none' });
  }

  gsap.set(cursor, { xPercent: -50, yPercent: -50 });

  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.2;

  const xSet = gsap.quickSetter(cursor, 'x', 'px');
  const ySet = gsap.quickSetter(cursor, 'y', 'px');

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

export const cursorHover = () => {
  const cursorAreas = [...document.querySelectorAll('[data-hover-scale]')];
  for (let i = 0; i < cursorAreas.length; i++) {
    const area = cursorAreas[i] as HTMLElement;
    const scale = Number(area.dataset.hoverScale);
    const iconType = area.dataset.hoverIcon as string;

    area.addEventListener('mouseenter', () => {
      cursorRevealIn(scale);

      if (iconType !== undefined) {
        const areaIcon = getAreaIcon(iconType) as HTMLElement;
        cursorIconRevealIn(areaIcon);
      }
    });
    area.addEventListener('mouseleave', () => {
      cursorRevealOut();

      if (iconType !== undefined) {
        const areaIcon = getAreaIcon(iconType) as HTMLElement;
        cursorIconRevealOut(areaIcon);
      }
    });
  }

  function getAreaIcon(type: string) {
    const cursorImages = [...document.querySelectorAll('.cursor_image')];
    let returnIcon;
    if (type === 'arrow') {
      returnIcon = cursorImages[0] as HTMLElement;
    }
    if (type === 'media') {
      const isPaused = getVideoState();
      if (isPaused) {
        returnIcon = cursorImages[2] as HTMLElement;
      } else {
        returnIcon = cursorImages[1] as HTMLElement;
      }
    }
    if (type === 'drag') {
      returnIcon = cursorImages[3] as HTMLElement;
    }
    if (type === 'expand') {
      returnIcon = cursorImages[4] as HTMLElement;
    }
    return returnIcon;
  }
};
