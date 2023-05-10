import { stickyHeader } from '$components/stickyHeader';
import { isoRevealAnimation } from '$motion/insightsOverviewMotion';
import { istRevealAnimation } from '$motion/insightsTemplateMotion';

export const insightsTemplate = () => {
  // ---------------
  // Page Globals
  // ---------------
  console.log('insights template');
  stickyHeader();

  istRevealAnimation();
};
