export const filterContent = () => {
  let activeFilters: string[] = [];
  let renderQueue: Element[] = [];
  const masterList = [...document.querySelectorAll('[data-filter-item]')];
  const filterCheckboxes = [...document.querySelectorAll('[data-filter-checkbox]')];

  const initialFilter = filterCheckboxes[0].parentElement as HTMLElement;

  for (const i in filterCheckboxes) {
    const tempCheckbox = filterCheckboxes[i] as HTMLInputElement;

    tempCheckbox.addEventListener('click', (e) => {
      const clickedCheckbox = e.target as HTMLInputElement;
      const clickedParent = clickedCheckbox.parentElement as HTMLElement;
      const clickedSpan = clickedParent.querySelector('span') as HTMLElement;
      const filterText = clickedSpan.innerHTML as string;

      renderQueue = masterList;

      if (clickedCheckbox.checked === true) {
        clickedSpan.style.color = '#EEEBE6';

        if (filterText !== 'All') {
          activeFilters.push(filterText);
          const tempList = filterList(renderQueue, activeFilters);
          renderQueue = tempList;
          renderUpdate(renderQueue);
          updateInitialCheckbox(initialFilter, 'hide');
        }
      } else {
        clickedSpan.style.color = '#EC2543';

        if (filterText !== 'All') {
          const updatedFilters = activeFilters.filter((item) => item !== filterText);
          activeFilters = updatedFilters;

          if (activeFilters.length < 1) {
            renderUpdate(renderQueue);
            updateInitialCheckbox(initialFilter, 'show');
          } else {
            const tempList = filterList(renderQueue, activeFilters);
            renderQueue = tempList;
            renderUpdate(renderQueue);
          }
        }
      }
    });
  }
};

function renderUpdate(items: Element[]) {
  hideAll();

  for (const i in items) {
    items[i].classList.remove('hide');
  }
}

function filterList(items: Element[], filters: string[]) {
  const filteredList = items.filter((item) => {
    const itemTemp = item as HTMLElement;
    const itemType = itemTemp.querySelector('[data-filter-item-type]')?.innerHTML as string;
    if (filters.includes(itemType)) {
      return itemTemp;
    }
  });

  return filteredList;
}

function hideAll() {
  const masterList = [...document.querySelectorAll('[data-filter-item]')];
  for (const item of masterList) {
    item.classList.add('hide');
  }
}

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