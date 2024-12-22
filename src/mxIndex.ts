import { editorCheck } from '$utils/editorCheck';
import loadComponent from '$utils/loadComponent';
import lenis from '$utils/smoothScroll';

// import { smoothScroll } from '$utils/smoothScroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  // ---------------
  // Site Globals
  // ---------------
  console.log('MX INDEX');
  const isEditor = editorCheck();
  if (!isEditor) {
    // smoothScroll();
    lenis.start();
  }

  loadComponent('.cursor_component', () => import('$components/cursor'));
});
