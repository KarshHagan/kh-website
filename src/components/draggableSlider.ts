import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

gsap.registerPlugin(InertiaPlugin, Draggable);

export const draggableSlider = () => {
  const sliderParent = document.querySelector('.about-team_wrapper') as HTMLElement;
  const sliderContainer = document.querySelector('.about-team_list') as HTMLElement;

  const slideDuration = 0.3;
  const slideDelay = 1.5;

  const slides = [...document.querySelectorAll('.about-team_item')];
  const prevButton = document.querySelector('#prevButton') as HTMLElement;
  const nextButton = document.querySelector('#nextButton') as HTMLElement;
  const slideCount = slides.length;

  console.log('slides', slides, slideCount);

  for (let i = 0; i < slideCount; i++) {
    gsap.set(slides[i], {
      backgroundColor: '#' + ((Math.random() * 0xffffff) << 0).toString(16),
      xPercent: i * 100,
    });
  }

  // const timer = gsap.delayedCall(slideDelay, autoPlay);

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
  let wrapWidth = 0;
  resize();

  const draggable = Draggable.create(proxy, {
    // type: 'x',
    // bounds: sliderParent,
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
  function updateDraggable() {
    // timer.restart(true);
    slideAnimation.kill();
    this.update();
  }

  function animateSlides(direction: number) {
    // timer.restart(true);
    slideAnimation.kill();

    const x = snapX((gsap.getProperty(proxy, 'x') as number) + direction * slideWidth);

    slideAnimation = gsap.to(proxy, {
      duration: slideDuration,
      x: x,
      onUpdate: updateProgress,
    });
  }

  // function autoPlay() {
  //   if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
  //     timer.restart(true);
  //   } else {
  //     animateSlides(-1);
  //   }
  // }

  function updateProgress() {
    animation.progress(gsap.utils.wrap(0, 1, (gsap.getProperty(proxy, 'x') as number) / wrapWidth));
  }

  function resize() {
    const norm = (gsap.getProperty(proxy, 'x') as number) / wrapWidth || 0;

    slideWidth = (slides[0] as HTMLElement).offsetWidth;
    wrapWidth = slideWidth * slideCount;

    gsap.set(proxy, {
      x: norm * wrapWidth,
    });

    animateSlides(0);
    slideAnimation.progress(1);
  }

  function snapX(x: number) {
    return Math.round(x / slideWidth) * slideWidth;
  }
  // Draggable.create(sliderContainer, {
  //   type: 'x',
  //   bounds: sliderParent,
  //   inertia: true,
  // });
};
