import { menu } from '$components/nav';
import { about } from '$pages/about';
import { caseOverview } from '$pages/caseOverview';
import { caseTemplate } from '$pages/caseTemplate';
import { home } from '$pages/home';
import { news } from '$pages/news';
import { newsTemplate } from '$pages/newsTemplate';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// kh ///');

  // ---------------
  // Site Globals
  // ---------------
  menu();

  // ---------------
  // Page Routing
  // ---------------
  const windowLocation = window.location.pathname as string;

  if (windowLocation === '/') {
    home();
  } else if (windowLocation === '/about') {
    about();
  } else if (windowLocation.includes('/case-studies')) {
    const hasFurtherIndex = windowLocation.substring(13);
    if (hasFurtherIndex === '') {
      caseOverview();
    } else {
      caseTemplate();
    }
  } else if (windowLocation.includes('/news')) {
    const hasFurtherIndex = windowLocation.substring(14);
    if (hasFurtherIndex === '') {
      news();
    } else {
      newsTemplate();
    }
  }
});
