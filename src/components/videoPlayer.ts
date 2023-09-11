import { toggleMuteMotion, togglePlayMotion } from '$motion/videoPlayerMotion';
import { getDeviceType } from '$utils/getDevice';

export const videoPlayer = () => {
  const device = getDeviceType();

  const videoEmbed = document.querySelector('[data-video-player]') as HTMLElement;
  const videoElement = videoEmbed.querySelector('video') as HTMLVideoElement;
  const muteButton = document.querySelector('.case-hero_mute-button.is-mute') as HTMLElement;
  const expandButton = document.querySelector('.case-hero_mute-button.is-expand') as HTMLElement;

  if (device !== 'mobile') {
    videoElement.addEventListener('click', () => {
      togglePlay(videoElement);
    });

    muteButton.addEventListener('click', () => {
      toggleMute(videoElement);
    });

    expandButton.addEventListener('click', () => {
      toggleFullScreen(videoElement);
    });
  } else {
    videoElement.setAttribute('controls', '');
    videoElement.style.pointerEvents = 'auto';
    const removeControls = document.querySelector('[data-player-controls]') as HTMLElement;
    removeControls.style.display = 'none';
  }
};

export const toggleFullScreen = (videoElement: HTMLVideoElement) => {
  videoElement.requestFullscreen();
};

export const togglePlay = (videoElement: HTMLVideoElement) => {
  if (videoElement.paused || videoElement.ended) {
    videoElement.play();
    togglePlayMotion(true);
  } else {
    videoElement.pause();
    togglePlayMotion(false);
  }
};

export const toggleMute = (videoElement: HTMLVideoElement) => {
  if (videoElement.muted) {
    videoElement.muted = false;
    toggleMuteMotion(false);
  } else {
    videoElement.muted = true;
    toggleMuteMotion(true);
  }
};

export const getVideoState = () => {
  const videoEmbed = document.querySelector('.case-hero_video-embed') as HTMLElement;
  const videoElement = videoEmbed.querySelector('video') as HTMLVideoElement;
  const isPaused = videoElement.paused;
  return isPaused;
};
