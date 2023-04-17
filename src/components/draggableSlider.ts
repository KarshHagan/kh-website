import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

gsap.registerPlugin(InertiaPlugin, Draggable);

export const draggableSlider = () => {
  const sliderParent = document.querySelector('.about-team_wrapper') as HTMLElement;
  const sliderContainer = document.querySelector('.about-team_list') as HTMLElement;

  Draggable.create(sliderContainer, {
    type: 'x',
    bounds: sliderParent,
    inertia: true,
  });
};
