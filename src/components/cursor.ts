// eslint-disable-next-line simple-import-sort/imports
import { cursorRevealIn, cursorRevealOut } from '$motion/cursorMotion';
import { getVideoState } from './videoPlayer';
import { gsap } from 'gsap';

const cursor = document.querySelector('.cursor_component') as HTMLElement;

export const cursorMovement = () => {
  gsap.set(cursor, { xPercent: -50, yPercent: -50 });

  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.2;

  const xSet = gsap.quickSetter(cursor, 'x', 'px');
  const ySet = gsap.quickSetter(cursor, 'y', 'px');

  // const windowLocation = window.location.pathname as string;
  // const hasIndex = windowLocation.substring(1);

  // if (hasIndex === '') {
  //   const heroScroll = document.querySelector('#splineEmbed') as HTMLIFrameElement;
  //   heroScroll.addEventListener('mousemove', (e) => {
  //     mouse.x = e.x;
  //     mouse.y = e.y;
  //   });
  // }

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
      const areaIcon = getAreaIcon(iconType) as HTMLElement;
      cursorRevealIn(scale, areaIcon);
    });
    area.addEventListener('mouseleave', () => {
      const areaIcon = getAreaIcon(iconType) as HTMLElement;
      cursorRevealOut(areaIcon);
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
    return returnIcon;
  }
};
