import { stickyHeader } from '$components/stickyHeader';
import { filterContent } from '$utils/filterContent';

export const insights = () => {
  // ---------------
  // Page Globals
  // ---------------
  console.log('insights');
  stickyHeader();

  filterContent();
};
