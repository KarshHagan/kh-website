import { stickyHeader } from '$components/stickyHeader';
import { caseHover, caseScrollEffect, csoPageReveal } from '$motion/caseOverviewMotion';
import { cursorArrowYMovement } from '$motion/cursorMotion';
import { filterContent } from '$utils/filterContent';

export const caseOverview = () => {
  // ---------------
  // Page Globals
  // ---------------

  stickyHeader();

  // Page Reveal
  csoPageReveal();

  // Work Filtering
  filterContent();

  //  Item Hover
  caseHover();

  // Page Scrolling
  caseScrollEffect();

  // Cursor Y Scroll
  const workGrid = document.querySelector('.work-grid_wrapper') as HTMLElement;
  workGrid.addEventListener('mousemove', (e) => {
    const mouseYMovement = e.movementY;
    const setCursor = 'default';
    cursorArrowYMovement(setCursor, mouseYMovement);
  });
};
