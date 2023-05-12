import { stickyHeader } from '$components/stickyHeader';
import { cursorArrowYMovement } from '$motion/cursorMotion';
import { isoRevealAnimation } from '$motion/insightsOverviewMotion';
import { filterContent } from '$utils/filterContent';

export const insights = () => {
  // ---------------
  // Page Globals
  // ---------------
  console.log('insights');
  stickyHeader();

  // Hero
  isoRevealAnimation();

  filterContent();

  // Cursor Y Movement
  const cursorArea = document.querySelector('.insights_list') as HTMLElement;
  cursorArea.addEventListener('mousemove', (e) => {
    const mouseY = e.movementY;

    cursorArrowYMovement('default', mouseY);
  });
};
