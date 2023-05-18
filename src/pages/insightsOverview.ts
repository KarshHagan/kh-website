import { stickyHeader } from '$components/stickyHeader';
import { cursorArrowYMovement } from '$motion/cursorMotion';
import { insightHover, isoRevealAnimation } from '$motion/insightsOverviewMotion';
import { filterContent } from '$utils/filterContent';

export const insights = () => {
  // ---------------
  // Page Globals
  // ---------------
  stickyHeader();

  // Hero
  isoRevealAnimation();

  filterContent();

  insightHover();

  // Cursor Y Movement
  const cursorArea = document.querySelector('.insights_list') as HTMLElement;
  cursorArea.addEventListener('mousemove', (e) => {
    const mouseY = e.movementY;

    cursorArrowYMovement('default', mouseY);
  });
};
