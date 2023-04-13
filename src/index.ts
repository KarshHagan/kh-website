import { cursorMovement } from '$components/cursor';
import { cursorHover } from '$components/cursor';
import { footer } from '$components/footer';
import { menu } from '$components/nav';
import { about } from '$pages/about';
import { careers } from '$pages/careers';
import { caseOverview } from '$pages/caseOverview';
import { caseTemplate } from '$pages/caseTemplate';
import { home } from '$pages/home';
import { news } from '$pages/news';
import { newsTemplate } from '$pages/newsTemplate';
import { services } from '$pages/services';
import { inertiaMovement } from '$utils/intertiaMovement';
import { smoothScroll } from '$utils/smoothScroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// kh ///');

  const windowLocation = window.location.pathname as string;

  // ---------------
  // Site Globals
  // ---------------
  menu();

  smoothScroll();
  inertiaMovement();

  cursorMovement();
  cursorHover();

  footer();

  // ---------------
  // Page Routing
  // ---------------

  if (windowLocation === '/') {
    home();
  } else if (windowLocation === '/about') {
    about();
  } else if (windowLocation.includes('/services')) {
    services();
  } else if (windowLocation.includes('/jobs')) {
    careers();
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
