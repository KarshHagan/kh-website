import { fixedHeader } from '$motion/fixedHeader';

export const insightsTemplate = () => {
  // ---------------
  // Page Globals
  // ---------------
  console.log('insights template');

  // Fixed Header
  const headerElement = document.querySelector('#fixedHeader') as HTMLElement;
  fixedHeader(headerElement);
};
