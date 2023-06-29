import { cmsMediaGrid } from '$components/cmsMediaGrid';
import { mediaSlider } from '$components/mediaSlider';
import { stickyHeader } from '$components/stickyHeader';
import { videoPlayer } from '$components/videoPlayer';
import {
  csMediaSliderReveal,
  csOverviewReveal,
  csPageReveal,
  csStatsReveal,
} from '$motion/caseTemplateMotion';
import { cursorArrowYMovement } from '$motion/cursorMotion';
import { horizontalScrollText } from '$utils/horizontalScrollText';

export const caseTemplate = () => {
  // ---------------
  // Page Globals
  // ---------------

  // stickyHeader();

  // Hero
  csPageReveal();

  // Featured Content
  videoPlayer();

  // Overview Section
  csOverviewReveal();

  // Media Grids
  cmsMediaGrid();

  // Media Slider
  csMediaSliderReveal();
  mediaSlider();

  // Stats Section
  csStatsReveal();

  // Next Project
  horizontalScrollText();

  // Cursor Y Movement
  const cursorArea = document.querySelector('.case-next_image-wrap') as HTMLElement;
  cursorArea.addEventListener('mousemove', (e) => {
    const mouseY = e.movementY;

    cursorArrowYMovement('default', mouseY);
  });
};
