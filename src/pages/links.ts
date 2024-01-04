/* eslint-disable simple-import-sort/imports */
import { videoPlayer } from '$components/videoPlayer';
import { gsap } from 'gsap';

export const links = () => {
  videoPlayer();
  const footer = document.querySelector('.footer_component');
  const nav = document.querySelector('.nav-ui_component');
  gsap.set([footer, nav], { display: 'none' });
  console.log('LINKS', footer);
};
