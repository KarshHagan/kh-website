import { toggleMuteMotion, togglePlayMotion } from '$motion/videoPlayerMotion';
import { getBrowserType, getDeviceType } from '$utils/getDevice';

export const videoPlayer = () => {
  const device = getDeviceType();

  const videoEmbed = document.querySelector('.case-hero_video-embed') as HTMLElement;
  const videoElement = videoEmbed.querySelector('video') as HTMLVideoElement;
  const muteButton = document.querySelector('.case-hero_mute-button.is-mute') as HTMLElement;
  const expandButton = document.querySelector('.case-hero_mute-button.is-expand') as HTMLElement;

  if (device !== 'mobile') {
    videoElement.addEventListener('click', () => {
      togglePlay();
    });

    muteButton.addEventListener('click', () => {
      toggleMute();
    });

    expandButton.addEventListener('click', () => {
      toggleFullScreen();
    });
  } else {
    videoElement.setAttribute('controls', '');
    const removeControls = document.querySelector('.case-hero_controls-wrap') as HTMLElement;
    removeControls.style.display = 'none';
  }

  function toggleFullScreen() {
    videoElement.requestFullscreen();
  }

  function togglePlay() {
    if (videoElement.paused || videoElement.ended) {
      videoElement.play();
      togglePlayMotion(true);
    } else {
      videoElement.pause();
      togglePlayMotion(false);
    }
  }

  function toggleMute() {
    if (videoElement.muted) {
      videoElement.muted = false;
      toggleMuteMotion(false);
    } else {
      videoElement.muted = true;
      toggleMuteMotion(true);
    }
  }
};

export const getVideoState = () => {
  const videoEmbed = document.querySelector('.case-hero_video-embed') as HTMLElement;
  const videoElement = videoEmbed.querySelector('video') as HTMLVideoElement;
  const isPaused = videoElement.paused;
  return isPaused;
};
