import { accordianList } from '$components/accordianList';
import { featuredWork } from '$components/featuredWork';
import { videoModal } from '$components/videoModal';
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
import { setDeepLinks } from '$utils/scrollToDeepLink';

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
  videoModal();

  // Featured Work
  horizontalScrollText();
  featuredReveal();
  featuredWork();

  // Services
  // setDeepLinks();
  servicesReveal();
  accordianList();

  // Our Focus
  focusReveal();
};
