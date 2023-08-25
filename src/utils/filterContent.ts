/* eslint-disable simple-import-sort/imports */
import { filterReveal } from '$motion/filterReveal';
import {
  clearMovementValues,
  refreshScrollTrigger,
  setGridSpeeds,
  toggleScrollTrigger,
} from './caseGridMovement';

export const filterContent = () => {
  let activeFilters: string[] = [];
  let renderQueue: Element[] = [];
  const masterList = [...document.querySelectorAll('[data-filter-item]')];
  const filterCheckboxes = [...document.querySelectorAll('[data-filter-checkbox]')];
  const initialFilter = filterCheckboxes[0].parentElement as HTMLElement;

  // caseGridMovement(masterList);

  for (const i in filterCheckboxes) {
    const tempCheckbox = filterCheckboxes[i] as HTMLInputElement;

    tempCheckbox.addEventListener('click', (e) => {
      const clickedCheckbox = e.target as HTMLInputElement;
      const clickedParent = clickedCheckbox.parentElement as HTMLElement;
      const clickedSpan = clickedParent.querySelector('span') as HTMLElement;
      let filterText = clickedSpan.innerHTML as string;
      filterText = filterText.split(' ')[0] as string;

      renderQueue = masterList;

      if (clickedCheckbox.checked === true) {
        clickedSpan.style.color = '#EEEBE6';

        if (filterText !== 'All') {
          activeFilters.push(filterText);
          const tempList = filterList(renderQueue, activeFilters);
          renderQueue = tempList;

          // toggleScrollTrigger('disable');

          hideAll();
          filterReveal(renderQueue);
          updateInitialCheckbox(initialFilter, 'hide');

          // clearMovementValues();
          setGridSpeeds(renderQueue);

          refreshScrollTrigger();
        }

        if (filterText === 'All') {
          activeFilters = [];
          renderQueue = masterList;
          hideAll();
          filterReveal(renderQueue);
          allReset();

          // clearMovementValues();
          setGridSpeeds(renderQueue);

          refreshScrollTrigger();
        }
      } else {
        clickedSpan.style.color = '#EC2543';

        if (filterText !== 'All') {
          const updatedFilters = activeFilters.filter((item) => item !== filterText);
          activeFilters = updatedFilters;

          if (activeFilters.length < 1) {
            hideAll();
            filterReveal(renderQueue);
            // caseGridMovement(renderQueue);
            updateInitialCheckbox(initialFilter, 'show');
          } else {
            const tempList = filterList(renderQueue, activeFilters);
            renderQueue = tempList;
            hideAll();
            filterReveal(renderQueue);
            // caseGridMovement(renderQueue);
          }
        }
      }
    });
  }
};

export const renderUpdate = (items: Element[]) => {
  hideAll();

  for (const i in items) {
    items[i].classList.remove('hide');
  }
};

export const filterList = (items: Element[], filters: string[]) => {
  const filteredList = items.filter((item) => {
    const itemTemp = item as HTMLElement;
    const itemTypes = [...itemTemp.querySelectorAll('[data-filter-item-type]')];

    for (const i in itemTypes) {
      const ele = itemTypes[i] as HTMLElement;
      const serviceType = ele.innerHTML.split(' ')[0] as string;

      if (filters.includes(serviceType)) {
        return serviceType;
      }
    }
  });

  return filteredList;
};

export const hideAll = () => {
  const masterList = [...document.querySelectorAll('[data-filter-item]')];
  for (const item of masterList) {
    const temp = item as HTMLElement;
    temp.style.display = 'none';
  }
};

export const updateInitialCheckbox = (initialFilter: Element, setState: string) => {
  const checkboxContainer = initialFilter.children[0] as HTMLElement;
  const checkboxInput = initialFilter.children[1] as HTMLInputElement;
  const checkboxText = initialFilter.children[2] as HTMLElement;

  if (setState === 'hide') {
    checkboxInput.checked = false;
    checkboxContainer.classList.remove('w--redirected-checked');
    checkboxText.style.color = '#EC2543';
  } else if (setState === 'show') {
    checkboxInput.checked = true;
    checkboxContainer.classList.add('w--redirected-checked');
    checkboxText.style.color = '#EEEBE6';
  }
};

function allReset() {
  const filterCheckboxes = [...document.querySelectorAll('[data-filter-checkbox]')];

  for (let i = 0; i < filterCheckboxes.length; i++) {
    const temp = filterCheckboxes[i] as HTMLInputElement;
    const tempParent = temp.parentElement as HTMLElement;
    const tempContainer = tempParent.children[0] as HTMLElement;
    const tempText = tempParent.childNodes[2] as HTMLElement;

    if (i !== 0) {
      temp.checked = false;
      tempContainer.classList.remove('w--redirected-checked');
      tempText.style.color = '#EC2543';
    }
  }
}
