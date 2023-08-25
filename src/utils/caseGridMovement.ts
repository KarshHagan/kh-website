/* eslint-disable simple-import-sort/imports */
import { getDeviceType } from '$utils/getDevice';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const scrollSection = document.querySelector('.section_work') as HTMLElement;
const sAnimation = gsap.timeline({
  onUpdate: () => {
    const array = [];
    const items = [...document.querySelectorAll('[data-scroll-speed]')];
    for (let i = 0; i < items.length; i++) {
      const temp = items[i] as HTMLElement;
      const style = getComputedStyle(temp).transform;
      const styleY = style.split(',')[5];

      if (styleY !== undefined) {
        // console.log('none', temp);
        array.push(temp);
        array.push(temp.dataset.scrollSpeed);
        array.push(styleY);
      }
    }
    console.log(array);
  },
});
const sTrigger = ScrollTrigger.create({
  trigger: scrollSection,
  animation: sAnimation,
  start: 'top 20%',
  end: 'bottom bottom',
  scrub: true,
  toggleActions: 'play none none reverse',
  markers: {
    startColor: 'yellow',
    endColor: 'lightblue',
  },
});

export const caseScrollEffect = () => {
  const workItems = [...document.querySelectorAll('.work-grid_item')];
  setGridSpeeds(workItems);
  updateAnimation();
};

export const updateAnimation = () => {
  const scrollSection = document.querySelector('.section_work') as HTMLElement;
  const scrollElements = [...scrollSection.querySelectorAll('[data-scroll-speed]')];
  console.log('update animation');

  console.log(sAnimation.vars);

  for (const j in scrollElements) {
    const tempElement = scrollElements[j] as HTMLElement;
    const elementSpeed = Number(tempElement.dataset.scrollSpeed);
    const setSpeed = elementSpeed;

    // console.log(setSpeed);

    sAnimation.to(tempElement, { yPercent: setSpeed, ease: 'none' }, '<');
  }

  // sAnimation.restart();
};

export const toggleScrollTrigger = (mode: string) => {
  if (mode === 'disable') {
    sTrigger.disable();
    // console.log('PRO', sTrigger.progress);
  } else if (mode === 'enable') {
    sTrigger.enable();
  }
};

export const refreshScrollTrigger = () => {
  console.log('refresh');
  updateAnimation();

  setTimeout(() => {
    sTrigger.refresh();
  }, 500);
};

export const clearMovementValues = () => {
  const workItems = [...document.querySelectorAll('.work-grid_item')];
  for (const i in workItems) {
    const temp = workItems[i] as HTMLElement;
    // console.log('clear', temp);
    temp.dataset.scrollSpeed = '0';
  }
};

export const setGridSpeeds = (items: Element[]) => {
  const windowWidth = window.innerWidth;
  const device = getDeviceType();

  if (device === 'desktop' && windowWidth > 767) {
    const leftItems = [];
    const rightItems = [];

    for (let i = 0; i < items.length; i += 2) {
      //   console.log(items[i]);
      leftItems.push(items[i]);
    }
    for (let i = 1; i < items.length; i += 2) {
      rightItems.push(items[i]);
    }

    for (const i in leftItems) {
      const temp = leftItems[i] as HTMLElement;
      const checkSpeed = temp.dataset.scrollSpeed;
      const setSpeed = 15;
      console.log('LEFT', temp, checkSpeed, setSpeed);

      temp.dataset.scrollSpeed = '15';
    }

    for (const i in rightItems) {
      const temp = rightItems[i] as HTMLElement;
      const checkSpeed = temp.dataset.scrollSpeed;
      const setSpeed = -15;
      console.log('right', temp, checkSpeed, setSpeed);
      temp.dataset.scrollSpeed = '-15';
    }

    // console.log('left', leftItems);
    // console.log('right', rightItems);
  } else {
    for (const i in items) {
      const temp = items[i] as HTMLElement;
      temp.dataset.scrollSpeed = '8';
    }
  }
};
