import { caseHover, csoPageReveal } from "$motion/caseOverviewMotion";
import { cursorArrowYMovement } from "$motion/cursorMotion";
import { caseScrollEffect } from "$utils/caseGridMovement";
import { filterContent } from "$utils/filterContent";
import { filterContentUpdated } from "$utils/filterContentUpdated";
import { filterDeepLinks } from "$utils/scrollToDeepLink";

export const caseOverview = () => {
  // ---------------
  // Page Globals
  // ---------------

  filterDeepLinks();

  // Page Reveal
  csoPageReveal();

  // Work Filtering
  // filterContent();
  filterContentUpdated();

  //  Item Hover
  caseHover();

  // Page Scrolling
  caseScrollEffect();

  // Cursor Y Scroll
  const workGrid = document.querySelector(".work-grid_wrapper") as HTMLElement;
  workGrid.addEventListener("mousemove", (e) => {
    const mouseYMovement = e.movementY;
    const setCursor = "default";
    cursorArrowYMovement(setCursor, mouseYMovement);
  });
};
