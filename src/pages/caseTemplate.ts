import { cmsMediaGrid } from '$components/cmsMediaGrid';
import { mediaSlider } from '$components/mediaSlider';
import { videoPlayer } from '$components/videoPlayer';
import { fixedHeader } from '$motion/fixedHeader';

export const caseTemplate = () => {
  // ---------------
  // Page Globals
  // ---------------
  console.log('case detail');

  // Fixed Header
  const headerElement = document.querySelector('#fixedHeader') as HTMLElement;
  fixedHeader(headerElement);

  // Video Module
  // -------------
  videoPlayer();

  // Media Grids
  // -------------
  cmsMediaGrid();

  // Media Slider
  // -------------
  mediaSlider();
};
