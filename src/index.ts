import { menu } from "$components/nav";
import { pageTransition } from "$components/pageTransition";
// import { spline } from '$components/spline';
import { about } from "$pages/about";
import { careers } from "$pages/careers";
import { caseOverview } from "$pages/caseOverview";
import { caseTemplate } from "$pages/caseTemplate";
import { contact } from "$pages/contact";
import { home } from "$pages/home";
import { insights } from "$pages/insightsOverview";
import { insightsTemplate } from "$pages/insightsTemplate";
import { links } from "$pages/links";
import { peopleTemplate } from "$pages/peopleTemplate";
import { services } from "$pages/services";
import { terms } from "$pages/terms";
import { editorCheck } from "$utils/editorCheck";
import { inertiaMovement } from "$utils/intertiaMovement";
import { loadComponent } from "$utils/loadComponent";
import { setDeepLinks } from "$utils/scrollToDeepLink";
// import { smoothScroll } from '$utils/smoothScroll';
import lenis from "$utils/smoothScroll";

window.Webflow ||= [];
window.Webflow.push(() => {
  const windowLocation = window.location.pathname as string;

  // ---------------
  // Site Globals
  // ---------------
  const isEditor = editorCheck();
  if (!isEditor) {
    lenis.start();
  }

  // TESTING
  // spline();

  // window.addEventListener('click', (e) => {
  //   console.log('-->', e.target);
  // });

  menu();
  inertiaMovement();
  pageTransition();
  setDeepLinks();

  loadComponent(
    ".section_home-hero",
    () => import("$components/heroTextMovement")
  );
  loadComponent(
    ".inter-map_component",
    () => import("$components/interactiveMap")
  );
  loadComponent(".cursor_component", () => import("$components/cursor"));
  loadComponent(".clients_component", () => import("$components/logoHover"));
  loadComponent(".footer_component", () => import("$components/footer"));

  // ---------------
  // Page Routing
  // ---------------

  if (windowLocation === "/") {
    home();
  } else if (windowLocation === "/about") {
    about();
  } else if (windowLocation.includes("/services")) {
    services();
  } else if (windowLocation.includes("/jobs")) {
    careers();
  } else if (windowLocation.includes("/case-studies")) {
    const hasFurtherIndex = windowLocation.substring(13);
    if (hasFurtherIndex === "") {
      caseOverview();
    } else {
      caseTemplate();
    }
  } else if (windowLocation.includes("/insights")) {
    const hasFurtherIndex = windowLocation.substring(14);
    if (hasFurtherIndex === "") {
      insights();
    } else {
      insightsTemplate();
    }
  } else if (windowLocation.includes("/contact")) {
    contact();
  } else if (windowLocation.includes("/terms")) {
    terms();
  } else if (windowLocation.includes("/people")) {
    peopleTemplate();
  } else if (windowLocation.includes("/links")) {
    links();
  }
});
