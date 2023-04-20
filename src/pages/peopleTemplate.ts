import { fixedHeader } from '$motion/fixedHeader';

export const peopleTemplate = () => {
  // ---------------
  // Page Globals
  // ---------------
  console.log('people template');
  // Fixed Header
  const headerElement = document.querySelector('#fixedHeader') as HTMLElement;
  fixedHeader(headerElement);
};
