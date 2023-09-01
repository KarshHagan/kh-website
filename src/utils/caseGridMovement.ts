/* eslint-disable simple-import-sort/imports */
import { getDeviceType } from '$utils/getDevice';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const scrollSection = document.querySelector('.section_work') as HTMLElement;
const animation = gsap.timeline({
  scrollTrigger: {
    trigger: scrollSection,
    start: 'top 40%',
    end: 'bottom bottom',
    scrub: true,
    toggleActions: 'play none none reverse',
    markers: {
      startColor: 'yellow',
      endColor: 'orange',
    },
  },
});

export const caseScrollEffect = () => {
  setScrollSpeed();
  createTimeline();
  // const scrollSection = document.querySelector('.section_work') as HTMLElement;
};

export const setScrollSpeed = () => {
  const windowWidth = window.innerWidth;
  const workItems = [...document.querySelectorAll('.work-grid_item')];

  const device = getDeviceType();

  if (device === 'desktop' && windowWidth > 767) {
    const leftItems = [];
    const rightItems = [];

    for (let i = 0; i < workItems.length; i += 2) {
      leftItems.push(workItems[i]);
    }
    for (let i = 1; i < workItems.length; i += 2) {
      rightItems.push(workItems[i]);
    }

    for (const i in leftItems) {
      const temp = leftItems[i] as HTMLElement;
      temp.dataset.scrollSpeed = '3';
    }

    for (const i in rightItems) {
      const temp = rightItems[i] as HTMLElement;
      temp.dataset.scrollSpeed = '-3';
    }
  } else {
    for (const i in workItems) {
      const temp = workItems[i] as HTMLElement;
      temp.dataset.scrollSpeed = '8';
    }
  }
};

export const updateScrollEffect = () => {
  const updatedAnimation = animation;

  animation.kill();
};

export const createTimeline = () => {
  const scrollElements = [...scrollSection.querySelectorAll('[data-scroll-speed]')];

  for (const j in scrollElements) {
    const tempElement = scrollElements[j] as HTMLElement;
    const elementSpeed = Number(tempElement.dataset.scrollSpeed);
    const setSpeed = elementSpeed;

    animation.to(tempElement, { yPercent: setSpeed * 5, ease: 'none' }, '<');
  }
};
