// /* eslint-disable simple-import-sort/imports */
// import { getDeviceType } from '$utils/getDevice';
// import { gsap } from 'gsap';

// const scrollSection = document.querySelector('.section_work') as HTMLElement;
// let curAnimation = gsap.timeline({
//   scrollTrigger: {
//     trigger: scrollSection,
//     start: 'top 40%',
//     end: 'bottom bottom',
//     scrub: true,
//     toggleActions: 'play none none reverse',
//     // markers: {
//     //   startColor: 'yellow',
//     //   endColor: 'orange',
//     // },
//   },
// });

// export const caseScrollEffect = () => {
//   setScrollSpeed();
//   createScrollerAnimation(curAnimation);
// };

// export const createTimeline = () => {
//   const scrollSection = document.querySelector('.section_work') as HTMLElement;
//   const newAnimation = gsap.timeline({
//     scrollTrigger: {
//       trigger: scrollSection,
//       start: 'top 40%',
//       end: 'bottom bottom',
//       scrub: true,
//       toggleActions: 'play none none reverse',
//       // markers: {
//       //   startColor: '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0'),
//       //   endColor: '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0'),
//       // },
//     },
//   });

//   return newAnimation;
// };

// export const createScrollerAnimation = (animation: gsap.core.Timeline) => {
//   if (scrollSection) {
//     const scrollElements = [...scrollSection.querySelectorAll('[data-scroll-speed]')];

//     for (const j in scrollElements) {
//       const tempElement = scrollElements[j] as HTMLElement;
//       const elementSpeed = Number(tempElement.dataset.scrollSpeed);
//       const setSpeed = elementSpeed;

//       animation.to(tempElement, { yPercent: setSpeed * 5, ease: 'none' }, '<');
//     }
//   }
// };

// export const setScrollSpeed = () => {
//   const workItems = [...document.querySelectorAll('.work-grid_item')];
//   const renderQueue: HTMLElement[] = [];
//   const hideQueue: HTMLElement[] = [];

//   const device = getDeviceType();
//   const windowWidth = window.innerWidth;

//   for (const i in workItems) {
//     const temp = workItems[i] as HTMLElement;
//     const tempDisplay = getComputedStyle(temp).display;

//     if (tempDisplay !== 'none') {
//       renderQueue.push(temp);
//     } else {
//       hideQueue.push(temp);
//     }
//   }

//   if (device === 'desktop' && windowWidth > 767) {
//     const sortedQueue = sortRenderQueue(renderQueue);
//     const leftItems = sortedQueue[0];
//     const rightItems = sortedQueue[1];

//     for (const i in leftItems) {
//       const temp = leftItems[i] as HTMLElement;
//       temp.dataset.scrollSpeed = '3';
//     }

//     for (const i in rightItems) {
//       const temp = rightItems[i] as HTMLElement;
//       temp.dataset.scrollSpeed = '-3';
//     }
//     for (const i in hideQueue) {
//       const temp = hideQueue[i] as HTMLElement;
//       temp.dataset.scrollSpeed = '0';
//     }
//   } else {
//     for (const i in renderQueue) {
//       const temp = renderQueue[i] as HTMLElement;
//       temp.dataset.scrollSpeed = '8';
//     }
//   }
// };

// export const sortRenderQueue = (renderQueue: HTMLElement[]) => {
//   const leftItems = [];
//   const rightItems = [];

//   for (let i = 0; i < renderQueue.length; i += 2) {
//     leftItems.push(renderQueue[i]);
//   }
//   for (let i = 1; i < renderQueue.length; i += 2) {
//     rightItems.push(renderQueue[i]);
//   }

//   return [leftItems, rightItems];
// };

// export const updateScrollEffect = () => {
//   curAnimation.kill();
//   setTimeout(() => {
//     setScrollSpeed();
//     const updatedAnimation = createTimeline();
//     curAnimation = updatedAnimation;
//     createScrollerAnimation(curAnimation);
//   }, 500);
// };
