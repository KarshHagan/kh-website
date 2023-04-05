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

  // ---------------
  // Work Filtering
  // ---------------
  filterContent();
};
