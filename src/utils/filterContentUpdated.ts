import { filterReveal } from '$motion/filterReveal';
import { updateScrollEffect } from '$utils/caseGridMovement';

export class FilterContent {
  private activeFilters: string[] = [];
  private renderQueue: Element[] = [];
  private filterForm: HTMLElement;
  private masterList: Element[];
  private filterCheckboxes: HTMLInputElement[];
  private searchInput: HTMLInputElement;
  private initialFilter: HTMLElement;

  constructor() {
    this.filterForm = document.querySelector('#filter-form') as HTMLElement;
    this.masterList = Array.from(document.querySelectorAll('[data-filter-item]'));
    this.filterCheckboxes = Array.from(
      document.querySelectorAll('[data-filter-checkbox]')
    ) as HTMLInputElement[];
    this.searchInput = document.querySelector('[data-search-input]') as HTMLInputElement;
    this.initialFilter = this.filterCheckboxes[0].parentElement as HTMLElement;

    this.initEventListeners();
  }

  private initEventListeners() {
    // Disable form submission
    this.filterForm.addEventListener('submit', (e) => e.preventDefault());

    // Initial filtering setup
    this.filterCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('click', (e) => this.handleFilterClick(e));
    });

    // Search functionality
    this.searchInput.addEventListener('input', (e) => this.handleSearchInput(e));
  }

  private handleFilterClick(e: Event) {
    const clickedCheckbox = e.target as HTMLInputElement;
    const clickedParent = clickedCheckbox.parentElement as HTMLElement;
    const clickedSpan = clickedParent.querySelector('span') as HTMLElement;
    const filterText = clickedSpan?.innerHTML.split(' ')[0] || '';

    this.renderQueue = [...this.masterList];

    if (clickedCheckbox.checked) {
      clickedSpan.style.color = '#EEEBE6';

      if (filterText !== 'All') {
        this.activeFilters.push(filterText);
        this.renderQueue = this.filterList(this.renderQueue, this.activeFilters);

        this.hideAll();
        filterReveal(this.renderQueue);
        this.updateInitialCheckbox('hide');
      } else {
        this.resetFilters();
      }
    } else {
      clickedSpan.style.color = '#EC2543';

      if (filterText !== 'All') {
        this.activeFilters = this.activeFilters.filter((filter) => filter !== filterText);

        if (this.activeFilters.length === 0) {
          this.hideAll();
          filterReveal(this.renderQueue);
          this.updateInitialCheckbox('show');
        } else {
          this.renderQueue = this.filterList(this.renderQueue, this.activeFilters);
          this.hideAll();
          filterReveal(this.renderQueue);
        }
      }
    }

    // const windowLocation = window.location.pathname;
    // console.log('UU', windowLocation);
    updateScrollEffect();
  }

  private handleSearchInput(e: Event) {
    const searchTerm = (e.target as HTMLInputElement).value.toLowerCase();
    const filteredList = this.filterList(this.masterList, this.activeFilters);
    const searchResults = this.searchList(filteredList, searchTerm);

    this.renderUpdate(searchResults);
  }

  private updateInitialCheckbox(state: 'hide' | 'show') {
    const checkboxInput = this.initialFilter.querySelector('input') as HTMLInputElement;
    const checkboxText = this.initialFilter.querySelector('span') as HTMLElement;

    if (state === 'hide') {
      checkboxInput.checked = false;
      checkboxText.style.color = '#EC2543';
    } else {
      checkboxInput.checked = true;
      checkboxText.style.color = '#EEEBE6';
    }
  }

  private resetFilters() {
    this.activeFilters = [];
    this.renderQueue = [...this.masterList];
    this.hideAll();
    filterReveal(this.renderQueue);
    this.resetAllCheckboxes();
  }

  private resetAllCheckboxes() {
    this.filterCheckboxes.forEach((checkbox, index) => {
      const parent = checkbox.parentElement as HTMLElement;
      const textElement = parent.querySelector('span') as HTMLElement;

      if (index !== 0) {
        checkbox.checked = false;
        textElement.style.color = '#EC2543';
      }
    });
  }

  private renderUpdate(items: Element[]) {
    this.hideAll();
    items.forEach((item) => {
      (item as HTMLElement).style.display = '';
      item.classList.remove('hide');
    });
  }

  private filterList(items: Element[], filters: string[]): Element[] {
    if (filters.length === 0) return items;

    return items.filter((item) => {
      const itemTypes = Array.from(item.querySelectorAll('[data-filter-item-type]'));
      return itemTypes.some((ele) => filters.includes(ele.innerHTML.split(' ')[0]));
    });
  }

  private searchList(items: Element[], searchTerm: string): Element[] {
    if (!searchTerm) return items;

    return items.filter((item) => {
      const itemText = item.textContent?.toLowerCase() || '';
      return itemText.includes(searchTerm);
    });
  }

  private hideAll() {
    this.masterList.forEach((item) => {
      (item as HTMLElement).style.display = 'none';
    });
  }
}

// Initialize the filter content functionality
export const filterContentUpdated = () => {
  new FilterContent();
};
