import { stickyHeader } from '$components/stickyHeader';
import { peopleRevealAnimation } from '$motion/peopleTemplateMotion';

export const peopleTemplate = () => {
  // ---------------
  // Page Globals
  // ---------------
  stickyHeader();

  peopleRevealAnimation();
};
