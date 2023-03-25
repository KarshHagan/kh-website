import { cmsMediaGrid } from '$components/cmsMediaGrid';
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

  // Media Grids
  // -------------
  cmsMediaGrid();
};
