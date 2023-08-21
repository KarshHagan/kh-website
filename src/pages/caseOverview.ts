import { stickyHeader } from '$components/stickyHeader';
import { caseHover, csoPageReveal } from '$motion/caseOverviewMotion';
import { cursorArrowYMovement } from '$motion/cursorMotion';
import { filterContent } from '$utils/filterContent';
import { filterDeepLinks } from '$utils/scrollToDeepLink';

export const caseOverview = () => {
  // ---------------
  // Page Globals
  // ---------------

  // stickyHeader();
  filterDeepLinks();

  // Page Reveal
  csoPageReveal();

  // Work Filtering
  filterContent();

  //  Item Hover
  caseHover();

  // Page Scrolling
  // caseScrollEffect();

  // Cursor Y Scroll
  const workGrid = document.querySelector('.work-grid_wrapper') as HTMLElement;
  workGrid.addEventListener('mousemove', (e) => {
    const mouseYMovement = e.movementY;
    const setCursor = 'default';
    cursorArrowYMovement(setCursor, mouseYMovement);
  });
};
