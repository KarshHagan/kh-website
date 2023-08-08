import { draggableSlider } from '$components/draggableSlider';
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
  draggableSlider();
  abTeamReveal();

  // Media
  horizontalScrollText();

  // Awwards
  abAwardsReveal();
};
