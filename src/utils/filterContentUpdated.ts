import { filterReveal } from "$motion/filterReveal";
import { updateScrollEffect } from "$utils/caseGridMovement";

// import { updateInitialCheckbox } from "./filterContent";

export class FilterContent {
  private activeFilters: string[] = [];
  private renderQueue: Element[] = [];
  private filterForm: HTMLElement;
  private masterList: Element[];
  private filterCheckboxes: HTMLInputElement[];
  private searchInput: HTMLInputElement;
  private initialFilter: HTMLElement;
  private clearButton: HTMLButtonElement;

  constructor() {
    this.filterForm = document.querySelector("#filter-form") as HTMLElement;
    this.masterList = Array.from(
      document.querySelectorAll("[data-filter-item]"),
    );
    this.filterCheckboxes = Array.from(
      document.querySelectorAll("[data-filter-checkbox]"),
    ) as HTMLInputElement[];

    this.searchInput = document.querySelector(
      "[data-search-input]",
    ) as HTMLInputElement;

    this.initialFilter = this.filterCheckboxes[0].parentElement as HTMLElement;

    this.clearButton = document.querySelector(
      "#blogFilterClear",
    ) as HTMLButtonElement;

    this.initEventListeners();
  }

  private initEventListeners() {
    // Disable form submission
    this.filterForm.addEventListener("submit", (e) => e.preventDefault());

    // Initial filtering setup
    this.filterCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("click", (e) => this.handleFilterClick(e));
    });

    // Search functionality
    if (this.searchInput) {
      this.searchInput.addEventListener("input", (e) =>
        this.handleSearchInput(e),
      );
    }

    // Clear all
    if (this.clearButton) {
      this.clearButton.addEventListener("click", () => {
        this.clearAll();
      });
    }
  }

  private handleFilterClick(e: Event) {
    const clickedCheckbox = e.target as HTMLInputElement;
    const clickedParent = clickedCheckbox.parentElement as HTMLElement;
    const clickedSpan = clickedParent.querySelector("span") as HTMLElement;
    const filterText = clickedSpan?.innerHTML.split(" ")[0] || "";

    this.renderQueue = [...this.masterList];

    if (filterText === "All") {
      this.activeFilters = [];
      this.resetAllCheckboxes();
      this.renderQueue = [...this.masterList];
      this.hideAll();
      filterReveal(this.renderQueue);
      this.updateInitialCheckbox("show");
    } else {
      if (clickedCheckbox.checked) {
        clickedSpan.style.color = "#EEEBE6";

        if (filterText !== "All" && filterText !== "Clear") {
          this.activeFilters.push(filterText);
          this.renderQueue = this.filterList(
            this.renderQueue,
            this.activeFilters,
          );

          this.hideAll();
          filterReveal(this.renderQueue);
          this.updateInitialCheckbox("hide");
        } else {
          this.resetFilters();
        }
      } else {
        clickedSpan.style.color = "#EC2543";

        if (filterText !== "All") {
          this.activeFilters = this.activeFilters.filter(
            (filter) => filter !== filterText,
          );

          if (this.activeFilters.length === 0) {
            this.hideAll();
            filterReveal(this.renderQueue);
            this.updateInitialCheckbox("show");
          } else {
            this.renderQueue = this.filterList(
              this.renderQueue,
              this.activeFilters,
            );
            this.hideAll();
            filterReveal(this.renderQueue);
          }
        }
      }
    }

    updateScrollEffect();
  }

  private handleSearchInput(e: Event) {
    const searchTerm = (e.target as HTMLInputElement).value.toLowerCase();
    const filteredList = this.filterList(this.masterList, this.activeFilters);
    const searchResults = this.searchList(filteredList, searchTerm);

    this.renderUpdate(searchResults);
  }

  private updateInitialCheckbox(state: "hide" | "show") {
    const checkboxInput = this.initialFilter.querySelector(
      "input",
    ) as HTMLInputElement;
    const checkboxText = this.initialFilter.querySelector(
      "span",
    ) as HTMLElement;
    const checkboxBG = this.initialFilter.querySelector(
      ".work-filter_checkbox",
    ) as HTMLElement;

    if (state === "hide") {
      checkboxInput.checked = false;
      checkboxBG.style.backgroundColor = "#EEEBE6";
      checkboxText.style.color = "#EC2543";
    } else {
      checkboxInput.checked = true;
      checkboxBG.style.backgroundColor = "#EC2543";
      checkboxText.style.color = "#EEEBE6";
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
      const tempContainer = parent.children[0] as HTMLElement;
      const textElement = parent.querySelector("span") as HTMLElement;

      if (index !== 0) {
        checkbox.checked = false;
        tempContainer.classList.remove("w--redirected-checked");
        textElement.style.color = "#EC2543";
      }
    });
  }

  private clearAll() {
    if (this.searchInput) {
      const searchChild = this.searchInput.querySelector(
        "input",
      ) as HTMLInputElement;
      searchChild.value = "";
    }

    if (this.activeFilters.length > 0) {
      this.activeFilters = [];
      this.renderQueue = [...this.masterList];
    }

    this.resetAllCheckboxes();
    this.updateInitialCheckbox("show");

    this.hideAll();
    filterReveal(this.renderQueue);

    updateScrollEffect();
  }

  private renderUpdate(items: Element[]) {
    this.hideAll();
    items.forEach((item) => {
      (item as HTMLElement).style.display = "";
      item.classList.remove("hide");
    });
  }

  private filterList(items: Element[], filters: string[]): Element[] {
    if (filters.length === 0) return items;

    return items.filter((item) => {
      const itemTypes = Array.from(
        item.querySelectorAll("[data-filter-item-type]"),
      );
      return itemTypes.some((ele) =>
        filters.includes(ele.innerHTML.split(" ")[0]),
      );
    });
  }

  private searchList(items: Element[], searchTerm: string): Element[] {
    if (!searchTerm) return items;

    return items.filter((item) => {
      const itemText = item.textContent?.toLowerCase() || "";
      return itemText.includes(searchTerm);
    });
  }

  private hideAll() {
    this.masterList.forEach((item) => {
      (item as HTMLElement).style.display = "none";
    });
  }
}

// Initialize the filter content functionality
export const filterContentUpdated = () => {
  new FilterContent();
};
