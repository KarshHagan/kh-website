import { fixedHeader } from '$motion/fixedHeader';

export const newsTemplate = () => {
  // ---------------
  // Page Globals
  // ---------------

  // Fixed Header
  const headerElement = document.querySelector('#fixedHeader') as HTMLElement;
  fixedHeader(headerElement);
};
