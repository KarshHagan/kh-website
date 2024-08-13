import { gsap } from 'gsap';

export const loadContent = () => {
  const loadParent = document.querySelector('[data-load-content]') as HTMLElement;
  const loadItems = [...loadParent.children];
  const loadButton = document.querySelector('[data-load-button]') as HTMLElement;
  const pageWrapper = document.querySelector('.main-wrapper') as HTMLElement;

  const loadStep = Number(loadParent.dataset.loadContent);
  const itemTotal = loadItems.length;
  let curVisible = loadStep;

  // const marker = document.createElement('div');
  // marker.style.backgroundColor = 'lightpink';
  // marker.style.position = 'absolute';
  // marker.style.height = '5px';
  // marker.style.width = '100%';
  // marker.style.zIndex = '99999';
  // marker.style.top = '0px';
  // pageWrapper.appendChild(marker);

  init();

  loadButton.addEventListener('click', () => {
    renderUpdate();
  });

  function init() {
    for (let i = 0; i < loadItems.length; i++) {
      const tempItem = loadItems[i] as HTMLElement;
      if (i > curVisible - 1) {
        gsap.set(tempItem, { display: 'none' });
      }
    }
  }
  function renderUpdate() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    // gsap.to(marker, { y: scrollTop });

    curVisible = curVisible + loadStep;
    if (curVisible > itemTotal) {
      curVisible = itemTotal;
      updateUIComplete();
    }

    const renderElements: HTMLElement[] = [];
    for (let i = 0; i < curVisible; i++) {
      const tempItem = loadItems[i] as HTMLElement;

      if (tempItem.style.display === 'none') {
        renderElements.push(tempItem);
      }
    }
    revealLoad(renderElements, scrollTop);
  }

  function revealLoad(newElements: HTMLElement[], scrollPos: number) {
    const firstChildren = newElements.map((element) => element.firstElementChild as HTMLElement);
    console.log('HERE', firstChildren);
    const animation = gsap.timeline();
    animation.set(firstChildren, { display: 'grid' });
    animation.set(newElements, { display: 'block', opacity: 0, y: '2rem' });
    animation.to(newElements, {
      duration: 1,
      y: '0rem',
      opacity: 1,
      stagger: 0.1,
      ease: 'power4.out',
    });
    animation.set(window, { scrollTo: scrollPos }, '<');
  }

  function updateUIComplete() {
    gsap.set(loadButton, { display: 'none' });
  }
};
