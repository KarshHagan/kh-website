import { caseScrollEffect, csoPageReveal } from '$motion/caseOverviewMotion';
import { cursorArrowYMovement } from '$motion/cursorMotion';
import { fixedHeader } from '$motion/fixedHeader';
import { filterContent } from '$utils/filterContent';

export const caseOverview = () => {
  // ---------------
  // Page Globals
  // ---------------

  console.log('overview');

  // Fixed Header
  const headerElement = document.querySelector('#fixedHeader') as HTMLElement;
  fixedHeader(headerElement);

  // Page Reveal
  csoPageReveal();

  // Work Filtering
  filterContent();

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
