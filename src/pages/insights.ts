import { fixedHeader } from '$motion/fixedHeader';
import { filterContent } from '$utils/filterContent';

export const insights = () => {
  // ---------------
  // Page Globals
  // ---------------
  console.log('insights');

  // Fixed Header
  const headerElement = document.querySelector('#fixedHeader') as HTMLElement;
  fixedHeader(headerElement);

  filterContent();
};
