import { gsap } from 'gsap';

export const togglePlayMotion = (isPlaying: boolean) => {
  const playIcon = document.querySelector('.cursor_image.is-play') as HTMLElement;
  const pauseIcon = document.querySelector('.cursor_image.is-pause') as HTMLElement;

  if (isPlaying) {
    gsap.set(pauseIcon, { display: 'block', opacity: 1 });
    gsap.set(playIcon, { display: 'none', opacity: 0 });
  } else {
    gsap.set(pauseIcon, { display: 'none', opacity: 0 });
    gsap.set(playIcon, { display: 'block', opacity: 1 });
  }
};

export const toggleMuteMotion = (isMuted: boolean) => {
  const muteIcon = document.querySelector('.case-hero_mute-image.is-mute');
  const soundIcon = document.querySelector('.case-hero_mute-image.is-sound');

  if (isMuted) {
    gsap.set(soundIcon, { display: 'none ', opacity: 0 });
    gsap.set(muteIcon, { display: 'block ', opacity: 1 });
  } else {
    gsap.set(soundIcon, { display: 'block ', opacity: 1 });
    gsap.set(muteIcon, { display: 'none ', opacity: 0 });
  }
};
