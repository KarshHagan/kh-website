import { fixedHeader } from '$motion/fixedHeader';

export const terms = () => {
  // ---------------
  // Page Globals
  // ---------------
  // Fixed Header
  const headerElement = document.querySelector('#fixedHeader') as HTMLElement;
  fixedHeader(headerElement);
};
