/* eslint-disable simple-import-sort/imports */
import { getDeviceType } from '$utils/getDevice';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

gsap.registerPlugin(InertiaPlugin, Draggable);

export const draggableSlider = () => {
  const device = getDeviceType();

  const sliderParent = document.querySelector('.about-team_wrapper') as HTMLElement;
  const sliderContainer = sliderParent.querySelector('.about-team_list') as HTMLElement;

  const slideDuration = 0.3;
  let paddingBottom = 16;
  if (device === 'mobile') {
    paddingBottom = 16 * 3;
  }

  const slides = [...document.querySelectorAll('.about-team_item')];
  const prevButton = document.querySelector('#prevButton') as HTMLElement;
  const nextButton = document.querySelector('#nextButton') as HTMLElement;
  const slideCount = slides.length;

  for (let i = 0; i < slideCount; i++) {
    const calcPercent = i * 100 + 10;

    gsap.set(slides[i], {
      xPercent: calcPercent,
    });
  }

  const animation = gsap.to(slides, {
    duration: 1,
    xPercent: '+=' + slideCount * 100,
    ease: 'none',
    paused: true,
    repeat: -1,
    modifiers: {
      xPercent: gsap.utils.wrap(-100, (slideCount - 1) * 100),
    },
  });

  const proxy = document.createElement('div');
  gsap.set(proxy, { x: 0 });
  let slideAnimation = gsap.to({}, { duration: 0.1 });
  let slideWidth = 0;
  let slideHeight = 0;
  let wrapWidth = 0;

  init();
  // resize();

  Draggable.create(proxy, {
    trigger: sliderContainer,
    inertia: true,
    throwProps: true,
    onPress: updateDraggable,
    onDrag: updateProgress,
    onThrowUpdate: updateProgress,
    snap: {
      x: gsap.utils.snap(slideWidth),
    },
  });

  // Event Listeners
  window.addEventListener('resize', resize);

  prevButton.addEventListener('click', function () {
    animateSlides(1);
  });

  nextButton.addEventListener('click', function () {
    animateSlides(-1);
  });

  // Functions
  function init() {
    // console.log('init');
    const sliderGrid = document.querySelector('.about-team_grid') as HTMLElement;

    const norm = (gsap.getProperty(proxy, 'x') as number) / wrapWidth || 0;

    slideWidth = (slides[0] as HTMLElement).offsetWidth;
    wrapWidth = slideWidth * slideCount;
    gsap.set(proxy, {
      x: norm * wrapWidth,
    });

    const slideHeight = calculateHeight();
    slideHeight.then((result) => {
      gsap.set(sliderGrid, { height: result });
    });

    animateSlides(0);
    slideAnimation.progress(1);
  }

  function resize() {
    // console.log('resize');
    const sliderGrid = document.querySelector('.about-team_grid') as HTMLElement;

    const norm = (gsap.getProperty(proxy, 'x') as number) / wrapWidth || 0;

    slideHeight = largestCard();
    slideWidth = (slides[0] as HTMLElement).offsetWidth;

    gsap.set(sliderGrid, { height: slideHeight });

    wrapWidth = slideWidth * slideCount;
    gsap.set(proxy, {
      x: norm * wrapWidth,
    });

    animateSlides(0);
    slideAnimation.progress(1);
  }

  function updateDraggable(this: any) {
    // timer.restart(true);
    slideAnimation.kill();
    this.update();
  }

  function animateSlides(direction: number) {
    slideAnimation.kill();

    const x = snapX((gsap.getProperty(proxy, 'x') as number) + direction * slideWidth);

    slideAnimation = gsap.to(proxy, {
      duration: slideDuration,
      x: x,
      onUpdate: updateProgress,
    });
  }

  function updateProgress() {
    animation.progress(gsap.utils.wrap(0, 1, (gsap.getProperty(proxy, 'x') as number) / wrapWidth));
  }

  function snapX(x: number) {
    return Math.round(x / slideWidth) * slideWidth;
  }
  function largestCard() {
    const slides = [...document.querySelectorAll('.about-team_item')];

    const cardHeights: number[] = [];
    for (const i in slides) {
      const temp = (slides[i] as HTMLElement).offsetHeight;
      cardHeights.push(temp);
    }

    const maxHeight = Math.max(...cardHeights);
    const totalHeight = maxHeight + paddingBottom;
    // console.log('resize', totalHeight, maxHeight);

    return totalHeight;
  }

  async function calculateHeight() {
    const slides = [...document.querySelectorAll('.about-team_item')];
    const slideImage = slides[0].querySelector('.about-team_image') as HTMLImageElement;
    const overviewHeights: number[] = [];

    await waitForImageToLoad(slideImage);
    const imageHeight = slideImage.offsetHeight;

    for (const i in slides) {
      const temp = slides[i] as HTMLElement;
      const tempOverview = temp.querySelector('.about-team_info-wrap') as HTMLElement;
      overviewHeights.push(tempOverview.offsetHeight);
    }
    const maxOvHeight = Math.max(...overviewHeights);
    const totalHeight = imageHeight + maxOvHeight + paddingBottom;
    // console.log('init', totalHeight, maxOvHeight);

    return totalHeight;
  }

  function waitForImageToLoad(imageElement: HTMLElement) {
    // console.log('waiting for image load');
    return new Promise((resolve) => {
      imageElement.onload = resolve;
    });
  }
};
