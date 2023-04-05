import { fixedHeader } from '$motion/fixedHeader';
import { filterContent } from '$utils/filterContent';

export const news = () => {
  // ---------------
  // Page Globals
  // ---------------

  // Fixed Header
  const headerElement = document.querySelector('#fixedHeader') as HTMLElement;
  fixedHeader(headerElement);

  filterContent();
};
