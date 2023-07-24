import { draggableSlider, largestCard } from '$components/draggableSlider';
import { abAwardsReveal, abClientsReveal, abPageReveal, abTeamReveal } from '$motion/aboutMotion';
import { horizontalScrollText } from '$utils/horizontalScrollText';

export const about = () => {
  // ---------------
  // Page Globals
  // ---------------
  // stickyHeader();

  // Hero
  abPageReveal();

  // Clients
  abClientsReveal();

  // Team
  window.addEventListener('load', (e) => {
    console.log('load', e);
    const slideHeight = largestCard();
    console.log('ab slide height', slideHeight);
  });
  draggableSlider();
  abTeamReveal();

  // Media
  horizontalScrollText();

  // Awwards
  abAwardsReveal();
};
