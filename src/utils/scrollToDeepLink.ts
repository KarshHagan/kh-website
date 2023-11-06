/* eslint-disable simple-import-sort/imports */
import { filterReveal } from '$motion/filterReveal';
import { filterList, hideAll, updateInitialCheckbox } from '$utils/filterContent';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const setDeepLinks = () => {
  const deepLinks = [...document.querySelectorAll('[data-deep-link]')];

  if (deepLinks.length !== 0) {
    for (const i in deepLinks) {
      const tempLink = deepLinks[i] as HTMLElement;
      const linkType = tempLink.dataset.deepLink;
      let setText = '';
      let linkTag = '';

      if (linkType === 'home-services') {
        const tempTitle = tempLink.querySelector('h3') as HTMLElement;
        setText = tempTitle.innerHTML as string;
      } else if (linkType === 'footer-work') {
        const tempTitle = tempLink.children[0] as HTMLElement;
        setText = tempTitle.innerHTML as string;
      } else if (linkType === 'services-work') {
        const tempParent = tempLink.parentNode?.parentNode as HTMLElement;
        const tempTitle = tempParent.querySelector('h2') as HTMLElement;
        setText = tempTitle.innerHTML;
      }

      linkTag = setText.split(' ')[0] as string;

      tempLink.addEventListener('click', () => {
        localStorage.setItem('tag', linkTag);
      });
    }
  }
};

export const scrollToDeepLinks = () => {
  if (localStorage.length > 0) {
    const scrollSection = localStorage.getItem('tag');

    setTimeout(() => {
      gsap.to(window, {
        duration: 2,
        scrollTo: { y: '#' + scrollSection, offsetY: 100 },
        ease: 'power4.out',
        onComplete: () => {
          localStorage.clear();
        },
      });
    }, 1000);
  }
};

export const filterDeepLinks = () => {
  if (localStorage.length > 0) {
    const filterTag = localStorage.getItem('tag') as string;
    const masterList = [...document.querySelectorAll('[data-filter-item]')];
    const filterCheckboxes = [...document.querySelectorAll('[data-filter-checkbox]')];
    const initialFilter = filterCheckboxes[0].parentElement as HTMLElement;

    for (const i in filterCheckboxes) {
      const tmepFilter = filterCheckboxes[i] as HTMLElement;
      const tempParent = tmepFilter.parentElement as HTMLElement;

      const checkboxContainer = tempParent.children[0] as HTMLElement;
      const checkboxInput = tempParent.children[1] as HTMLInputElement;
      const checkboxText = tempParent.querySelector('span') as HTMLElement;
      let filterText = checkboxText.innerHTML as string;
      filterText = filterText.split(' ')[0] as string;

      if (filterText === filterTag) {
        checkboxInput.checked = true;
        checkboxContainer.classList.add('w--redirected-checked');
        checkboxText.style.color = '#EEEBE6';
      }
    }

    const activeFilters: string[] = [];
    activeFilters.push(filterTag);

    const filteredList = filterList(masterList, activeFilters);

    hideAll();
    setTimeout(() => {
      filterReveal(filteredList);
    }, 1500);
    updateInitialCheckbox(initialFilter, 'hide');

    localStorage.clear();
  }
};
