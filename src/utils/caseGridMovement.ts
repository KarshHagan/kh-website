import { getDeviceType } from '$utils/getDevice';

export const caseGridMovement = (items: Element[]) => {
  clearMovementValues();
  setGridSpeeds(items);
  caseScrollEffect();
};

export const clearMovementValues = () => {
  const workItems = [...document.querySelectorAll('.work-grid_item')];
  for (const i in workItems) {
    const temp = workItems[i] as HTMLElement;
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
      temp.dataset.scrollSpeed = '3';
    }

    for (const i in rightItems) {
      const temp = rightItems[i] as HTMLElement;
      temp.dataset.scrollSpeed = '-3';
    }
  } else {
    for (const i in items) {
      const temp = items[i] as HTMLElement;
      temp.dataset.scrollSpeed = '8';
    }
  }
};

export const caseScrollEffect = () => {
  const scrollSection = document.querySelector('.section_work') as HTMLElement;
  const scrollElements = [...scrollSection.querySelectorAll('[data-scroll-speed]')];

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: scrollSection,
      start: 'top 50%',
      end: 'bottom top',
      scrub: true,
      toggleActions: 'play none none reverse',
      // markers: {
      //   startColor: 'yellow',
      //   endColor: 'orange',
      // },
    },
  });

  for (const j in scrollElements) {
    const tempElement = scrollElements[j] as HTMLElement;
    const elementSpeed = Number(tempElement.dataset.scrollSpeed);
    const setSpeed = elementSpeed;

    animation.to(tempElement, { yPercent: setSpeed * 5, ease: 'none' }, '<');
  }
};
