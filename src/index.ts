import { cursorMovement } from '$components/cursor';
import { cursorHover } from '$components/cursor';
import { footer } from '$components/footer';
import { menu } from '$components/nav';
import { about } from '$pages/about';
import { careers } from '$pages/careers';
import { caseOverview } from '$pages/caseOverview';
import { caseTemplate } from '$pages/caseTemplate';
import { contact } from '$pages/contact';
import { home } from '$pages/home';
import { insights } from '$pages/insights';
import { insightsTemplate } from '$pages/insightsTemplate';
import { peopleTemplate } from '$pages/peopleTemplate';
import { services } from '$pages/services';
import { terms } from '$pages/terms';
import { inertiaMovement } from '$utils/intertiaMovement';
import { smoothScroll } from '$utils/smoothScroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// kh ///');

  const windowLocation = window.location.pathname as string;

  // document.addEventListener('click', (e) => {
  //   console.log(e.target);
  // });

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

  if (windowLocation === '/' || windowLocation === '/home2') {
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
  } else if (windowLocation.includes('/insights')) {
    const hasFurtherIndex = windowLocation.substring(14);
    if (hasFurtherIndex === '') {
      insights();
    } else {
      insightsTemplate();
    }
  } else if (windowLocation.includes('/contact')) {
    contact();
  } else if (windowLocation.includes('/terms')) {
    terms();
  } else if (windowLocation.includes('/people')) {
    peopleTemplate();
  }
});
