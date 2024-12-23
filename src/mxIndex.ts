import { editorCheck } from '$utils/editorCheck';
import loadComponent from '$utils/loadComponent';
import lenis from '$utils/smoothScroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  // ---------------
  // Site Globals
  // ---------------
  console.log('MX INDEX');

  const isEditor = editorCheck();
  if (isEditor) {
    lenis.stop();
  }

  loadComponent('.preloader_component', () => import('$components/mxkh/preloader'));
  loadComponent('.cursor_component', () => import('$components/cursor'));
  loadComponent('.footer_component', () => import('$components/footer'));

  // Motion
  loadComponent('.header_component', () => import('$motion/mxkh/headerReveal'));
  loadComponent('.overview_component', () => import('$motion/mxkh/overviewReveal'));
});
