import { cursorGlobal } from '$components/cursor';
import { cursorGlobalButton } from '$components/cursor';
import { footer } from '$components/footer';
import { menu } from '$components/nav';
import { menuTransition } from '$motion/navMotion';
import { about } from '$pages/about';
import { caseOverview } from '$pages/caseOverview';
import { caseTemplate } from '$pages/caseTemplate';
import { home } from '$pages/home';
import { news } from '$pages/news';
import { newsTemplate } from '$pages/newsTemplate';
import { smoothScroll } from '$utils/smoothScroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// kh ///');

  // ---------------
  // Site Globals
  // ---------------
  menu();
  menuTransition();

  smoothScroll();

  cursorGlobal();
  cursorGlobalButton();

  footer();

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
