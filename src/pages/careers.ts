import { careersFeed } from '$components/careersFeed';
import { stickyHeader } from '$components/stickyHeader';
import { careersOverviewReveal, careersPageReveal } from '$motion/careersMotion';
import { horizontalScrollText } from '$utils/horizontalScrollText';

export const careers = () => {
  // ---------------
  // Page Globals
  // ---------------
  console.log('careers');
  stickyHeader();

  // Hero
  careersPageReveal();

  //Overview
  careersOverviewReveal();

  // Media Grid
  horizontalScrollText();

  // Careers Feed
  careersFeed();
};
