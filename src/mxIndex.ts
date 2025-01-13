import {
  capabilityMotion,
  metricsMotion,
  offerMotion,
  teamMotion,
  workMotion,
} from '$motion/mxkh/mxMotion';
import { editorCheck } from '$utils/editorCheck';
import { horizontalScrollText } from '$utils/horizontalScrollText';
import loadComponent from '$utils/loadComponent';
import lenis from '$utils/smoothScroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  // ---------------
  // Site Globals
  // ---------------
  console.log('MX INDEX');

  // window.addEventListener('click', (e) => {
  //   console.log('-->', e.target);
  // });

  const isEditor = editorCheck();
  if (isEditor) {
    lenis.stop();
  }

  horizontalScrollText();

  loadComponent('.preloader_component', () => import('$components/mxkh/preloader'));
  loadComponent('.cursor_component', () => import('$components/cursor'));
  loadComponent('.modal_component', () => import('$components/mxkh/modal'));
  loadComponent('.clients_component', () => import('$components/logoHover'));
  loadComponent('.footer_component', () => import('$components/footer'));

  // Motion
  loadComponent('.header_component', () => import('$motion/mxkh/headerReveal'));
  loadComponent('.overview_component', () => import('$motion/mxkh/overviewReveal'));
  metricsMotion();
  offerMotion();
  workMotion();
  capabilityMotion();
  teamMotion();
});
