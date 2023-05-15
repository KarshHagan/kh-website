import { cursorMovement } from '$components/cursor';
import { cursorHover } from '$components/cursor';
import { footer } from '$components/footer';
import { menu } from '$components/nav';
import { pageTransition } from '$components/pageTransition';
import { about } from '$pages/about';
import { careers } from '$pages/careers';
import { caseOverview } from '$pages/caseOverview';
import { caseTemplate } from '$pages/caseTemplate';
import { contact } from '$pages/contact';
import { home } from '$pages/home';
import { insights } from '$pages/insightsOverview';
import { insightsTemplate } from '$pages/insightsTemplate';
import { peopleTemplate } from '$pages/peopleTemplate';
import { services } from '$pages/services';
import { terms } from '$pages/terms';
import { barbaTransition } from '$utils/barba';
import { inertiaMovement } from '$utils/intertiaMovement';
import { smoothScroll } from '$utils/smoothScroll';

// document.addEventListener('DOMContentLoaded', () => {
//   console.log('dom content');
//   const windowLocation = window.location.pathname;
//   if (windowLocation === '/') {
//     console.log('home preloader');
//     const preloaderElement = document.querySelector('.preloader_component') as HTMLElement;
//     preloaderElement.style.display = 'flex';
//     preloaderElement.style.opacity = '1';
//   } else {
//     console.log('regular transition');
//     const transitionElement = document.querySelector('.transition_component') as HTMLElement;
//     transitionElement.style.display = 'block';
//     transitionElement.style.opacity = '1';
//   }
// });

// barbaTransition();

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// kh ///');
  console.log('webflow');

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
  // pageTransition();
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
