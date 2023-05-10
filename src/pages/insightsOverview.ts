import { stickyHeader } from '$components/stickyHeader';
import { isoRevealAnimation } from '$motion/insightsOverviewMotion';
import { filterContent } from '$utils/filterContent';

export const insights = () => {
  // ---------------
  // Page Globals
  // ---------------
  console.log('insights');
  stickyHeader();

  // Hero
  isoRevealAnimation();

  filterContent();
};
