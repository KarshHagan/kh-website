import { draggableSlider } from '$components/draggableSlider';
import { abAwardsReveal, abClientsReveal, abPageReveal, abTeamReveal } from '$motion/aboutMotion';
import { fixedHeader } from '$motion/fixedHeader';
import { horizontalScrollText } from '$utils/horizontalScrollText';

export const about = () => {
  // ---------------
  // Page Globals
  // ---------------

  // Fixed Header
  const headerElement = document.querySelector('#fixedHeader') as HTMLElement;
  fixedHeader(headerElement);

  // Hero
  abPageReveal();

  // Clients
  abClientsReveal();

  // Team
  draggableSlider();
  abTeamReveal();

  // Media
  // mediaSliderTextMovement();
  horizontalScrollText();

  // Awwards
  abAwardsReveal();
};
