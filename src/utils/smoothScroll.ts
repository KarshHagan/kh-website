import Lenis from '@studio-freight/lenis';

export const smoothScroll = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(90, -2 * t)), // https://www.desmos.com/calculator/brs54l4xou
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 0.8,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Menu functions
  const menuButton = document.querySelector('#navMenuButton') as HTMLElement;
  const menuCloseOffset = document.querySelector('.nav_x-offset') as HTMLElement;

  let menuIsOpen = false;
  menuButton.addEventListener('click', () => {
    menuIsOpen = !menuIsOpen;

    if (menuIsOpen === true) {
      // lenis.stop();
    } else {
      // lenis.start();
    }
  });

  menuCloseOffset.addEventListener('click', () => {
    menuIsOpen = false;
    lenis.start();
  });

  document.addEventListener('keydown', (e) => {
    const keyPressed = e.key;

    if (keyPressed === 'Escape') {
      lenis.start();
    }
  });

  // video Modal functions
  const windowLocation = window.location.pathname as string;

  if (windowLocation === '/') {
    const overviewVideo = document.querySelector('.home-overview_video') as HTMLElement;
    const modalCloseButton = document.querySelector('.home-video_close') as HTMLElement;
    const modalCloseArea = document.querySelector('.home-video_close-area') as HTMLElement;

    overviewVideo.addEventListener('click', () => {
      lenis.stop();
    });

    modalCloseButton.addEventListener('click', () => {
      lenis.start();
    });
    modalCloseArea.addEventListener('click', () => {
      lenis.start();
    });
  }
};
