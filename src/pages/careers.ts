import { careersOverviewReveal, careersPageReveal, mediaGridReveal } from '$motion/careersMotion';
import { fixedHeader } from '$motion/fixedHeader';
import { horizontalScrollText } from '$utils/horizontalScrollText';

export const careers = () => {
  // ---------------
  // Page Globals
  // ---------------
  console.log('careers');

  // Fixed Header
  const headerElement = document.querySelector('#fixedHeader') as HTMLElement;
  fixedHeader(headerElement);

  // Hero
  careersPageReveal();

  //Overview
  careersOverviewReveal();

  // Media Grid\
  mediaGridReveal();
  horizontalScrollText();
};
