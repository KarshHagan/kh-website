import { gsap } from 'gsap';

export const loadContent = () => {
  const loadParent = document.querySelector('[data-load-content]') as HTMLElement;
  const loadItems = [...loadParent.children];
  const loadButton = document.querySelector('[data-load-button]') as HTMLElement;

  const loadStep = Number(loadParent.dataset.loadContent);
  const itemTotal = loadItems.length;
  let curVisible = loadStep;

  let transitionItem: HTMLElement;

  console.log(loadStep, itemTotal);

  init();

  loadButton.addEventListener('click', (e) => {
    console.log(e);
    renderUpdate();
  });

  function init() {
    for (let i = 0; i < loadItems.length; i++) {
      const tempItem = loadItems[i] as HTMLElement;
      if (i > curVisible - 1) {
        gsap.set(tempItem, { display: 'none' });
      }
    }
    transitionItem = loadItems[curVisible - 1] as HTMLElement;
    console.log(transitionItem.offsetTop);
  }
  function renderUpdate() {
    curVisible = curVisible + loadStep;
    if (curVisible > itemTotal) {
      console.log('Reached Limit');
      curVisible = itemTotal;
      updateUIComplete();
    }

    // console.log('CUR', curVisible);
    const renderElements: HTMLElement[] = [];
    for (let i = 0; i < curVisible; i++) {
      const tempItem = loadItems[i] as HTMLElement;

      if (tempItem.style.display === 'none') {
        gsap.set(tempItem, { display: 'grid', opacity: 0, y: '2rem' });
        renderElements.push(tempItem);
      }
    }
    console.log(renderElements);
    revealLoad(renderElements);
  }

  function revealLoad(newElements: HTMLElement[]) {
    console.log('HERE', window.scrollY);

    const animation = gsap.timeline();
    animation.to(newElements, {
      duration: 1,
      y: '0rem',
      opacity: 1,
      stagger: 0.1,
      ease: 'power4.out',
    });
    animation.set(window, { scrollTo: transitionItem.offsetTop }, '<');

    console.log('HERE', window.scrollY);
  }

  function updateUIComplete() {
    gsap.set(loadButton, { display: 'none' });
  }
};
