import { filterReveal } from '$motion/filterReveal';
import { updateScrollEffect } from '$utils/caseGridMovement';

export const filterContentUpdated = () => {
  const activeFilters: string[] = [];
  const renderQueue: Element[] = [];
  const filterForm = document.querySelector('#filter-form') as HTMLElement;
  const masterList = [...document.querySelectorAll('[data-filter-item]')];
  const filterCheckboxes = [...document.querySelectorAll('[data-filter-checkbox]')];
  const searchInput = document.querySelector('[data-search-input]') as HTMLInputElement;
  const initialFilter = filterCheckboxes[0].parentElement as HTMLElement;

  const formInputs = [...filterForm.querySelectorAll('input')];

  // Disable Form
  formInputs.forEach((input) => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.code === 'Enter') {
        e.preventDefault(); // Prevent the form submission
      }
    });
  });

  // Initial filtering setup
  for (const i in filterCheckboxes) {
    const tempCheckbox = filterCheckboxes[i] as HTMLInputElement;

    tempCheckbox.addEventListener('click', (e) => {
      handleFilterClick(e, masterList, activeFilters, renderQueue, initialFilter);
    });
  }

  // Search functionality
  searchInput.addEventListener('input', (e) => {
    const searchTerm = (e.target as HTMLInputElement).value.toLowerCase();
    const filteredList = filterList(masterList, activeFilters);
    const searchResults = searchList(filteredList, searchTerm);

    renderUpdate(searchResults);
  });

  // Handle filter click events
  function handleFilterClick(
    e: Event,
    masterList: Element[],
    activeFilters: string[],
    renderQueue: Element[],
    initialFilter: HTMLElement
  ) {
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

        hideAll();
        filterReveal(renderQueue);
        updateInitialCheckbox(initialFilter, 'hide');

        // updateScrollEffect();
      }

      if (filterText === 'All') {
        activeFilters = [];
        renderQueue = masterList;
        hideAll();
        filterReveal(renderQueue);
        allReset();

        // updateScrollEffect();
      }
    } else {
      clickedSpan.style.color = '#EC2543';

      if (filterText !== 'All') {
        const updatedFilters = activeFilters.filter((item) => item !== filterText);
        activeFilters = updatedFilters;

        if (activeFilters.length < 1) {
          hideAll();
          filterReveal(renderQueue);
          updateInitialCheckbox(initialFilter, 'show');
          updateScrollEffect();
        } else {
          const tempList = filterList(renderQueue, activeFilters);
          renderQueue = tempList;
          hideAll();
          filterReveal(renderQueue);
          updateScrollEffect();
        }
      }
    }
  }

  // HELPERS
  function updateInitialCheckbox(initialFilter: Element, setState: string) {
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
  }
  function allReset() {
    const filterCheckboxes = [...document.querySelectorAll('[data-filter-checkbox]')];

    for (let i = 0; i < filterCheckboxes.length; i++) {
      const temp = filterCheckboxes[i] as HTMLInputElement;
      const tempParent = temp.parentElement as HTMLElement;
      const tempContainer = tempParent.children[0] as HTMLElement;
      const tempText = tempParent.querySelector('span') as HTMLElement;

      if (i !== 0) {
        temp.checked = false;
        tempContainer.classList.remove('w--redirected-checked');
        tempText.style.color = '#EC2543';
      }
    }
  }
};

export const renderUpdate = (items: Element[]) => {
  // First, hide all elements
  hideAll();

  // Then, remove the hide class from the items to be displayed
  for (const i in items) {
    const element = items[i] as HTMLElement;
    element.style.display = ''; // Reset any inline display styles
    element.classList.remove('hide');
  }
};

export const filterList = (items: Element[], filters: string[]) => {
  if (filters.length === 0) {
    return items;
  }

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

export const searchList = (items: Element[], searchTerm: string) => {
  if (!searchTerm) return items; // Return all items if search term is empty

  return items.filter((item) => {
    const itemText = item.textContent?.toLowerCase() || '';
    return itemText.includes(searchTerm);
  });
};

export const hideAll = () => {
  const masterList = [...document.querySelectorAll('[data-filter-item]')];
  for (const item of masterList) {
    const temp = item as HTMLElement;
    temp.style.display = 'none';
  }
};
