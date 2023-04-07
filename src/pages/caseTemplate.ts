import { cmsMediaGrid } from '$components/cmsMediaGrid';
import { mediaSlider } from '$components/mediaSlider';
import { videoPlayer } from '$components/videoPlayer';
import {
  csMediaSliderReveal,
  csOverviewReveal,
  csPageReveal,
  csStatsReveal,
} from '$motion/caseTemplateMotion';
import { fixedHeader } from '$motion/fixedHeader';
import { horizontalScrollText } from '$utils/horizontalScrollText';

export const caseTemplate = () => {
  // ---------------
  // Page Globals
  // ---------------
  console.log('case detail');

  // Fixed Header
  const headerElement = document.querySelector('#fixedHeader') as HTMLElement;
  fixedHeader(headerElement);

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
};
