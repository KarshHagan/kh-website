import { toggleMuteMotion, togglePlayMotion } from '$motion/videoPlayerMotion';

export const videoPlayer = () => {
  const videoEmbed = document.querySelector('.case-hero_video-embed') as HTMLElement;
  const videoElement = videoEmbed.querySelector('video') as HTMLVideoElement;
  const muteButton = document.querySelector('.case-hero_mute-button') as HTMLElement;

  videoEmbed.addEventListener('click', () => {
    togglePlay();
  });

  muteButton.addEventListener('click', () => {
    toggleMute();
  });

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
