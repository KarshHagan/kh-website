import { accordianList } from '$components/accordianList';
import { featuredWork } from '$components/featuredWork';
import { initSVGMorph } from '$components/morphSVG';
import { videoPlayer } from '$components/videoPlayer';
import {
  featuredReveal,
  focusReveal,
  heroHide,
  heroReveal,
  heroScroll,
  heroZText,
  overviewReveal,
  servicesReveal,
} from '$motion/homeMotion';
import { preloaderMotion } from '$motion/preloaderMotion';
import { horizontalScrollText } from '$utils/horizontalScrollText';

export const home = () => {
  // ---------------
  // Page Globals
  // ---------------

  preloaderMotion();

  // Hero
  heroReveal();
  heroScroll();
  heroHide();
  heroZText();

  // Overview
  overviewReveal();
  // videoModal();
  videoPlayer();

  // Featured Work
  horizontalScrollText();
  featuredReveal();
  featuredWork();

  // Services
  initSVGMorph();
  servicesReveal();
  accordianList();

  // Our Focus
  focusReveal();
};
