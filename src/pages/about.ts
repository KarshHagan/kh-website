import { draggableSlider } from '$components/draggableSlider';
import {
  abAwardsReveal,
  abClientsReveal,
  abPageReveal,
  abTeamReveal,
  clientsHover,
} from '$motion/aboutMotion';
import { horizontalScrollText } from '$utils/horizontalScrollText';
import { loadContent } from '$utils/loadContent';

export const about = () => {
  // ---------------
  // Page Globals
  // ---------------

  // Hero
  abPageReveal();

  // Clients
  abClientsReveal();
  // clientsHover();

  // Team
  draggableSlider();
  abTeamReveal();

  // Media
  horizontalScrollText();

  // Awwards
  loadContent();
  abAwardsReveal();
};
