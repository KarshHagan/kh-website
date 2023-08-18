import { gsap } from 'gsap';

const lenisContainer = document.querySelector('html');

export const videoModal = () => {
  const overviewVideo = document.querySelector('.home-overview_video') as HTMLElement;

  const modalSection = document.querySelector('.home-video_reel') as HTMLElement;
  const modalCloseButton = modalSection.querySelector('.home-video_close') as HTMLElement;
  const modalCloseArea = modalSection.querySelector('.home-video_close-area') as HTMLElement;
  const modalVideo = modalSection.querySelector('video') as HTMLVideoElement;

  overviewVideo.addEventListener('click', () => {
    openModal();
  });

  modalCloseButton.addEventListener('click', () => {
    closeModal();
    modalVideo.pause();
  });
  modalCloseArea.addEventListener('click', () => {
    closeModal();
    modalVideo.pause();
  });
};

export const openModal = () => {
  const modalSection = document.querySelector('.home-video_reel') as HTMLElement;
  const modalVideo = modalSection.querySelector('.home-video_emebed');

  const animation = gsap.timeline();
  animation.set(lenisContainer, { height: '100%' });
  //   animation.set('body', { overflow: 'hidden' });
  animation.set(modalSection, { display: 'block' });
  animation.set(modalVideo, { opacity: 0, y: '3rem' });

  animation.to(modalSection, { duration: 1, opacity: 1, ease: 'power3.out' });
  animation.to(modalVideo, { duration: 2, opacity: 1, y: '0rem', ease: 'power4.out' }, '<');
};

export const closeModal = () => {
  const modalSection = document.querySelector('.home-video_reel') as HTMLElement;
  const modalVideo = modalSection.querySelector('.home-video_emebed');

  const animation = gsap.timeline();
  animation.set(lenisContainer, { height: 'auto' });
  animation.set('body', { overflow: 'auto' });

  animation.to([modalVideo, modalSection], { duration: 1, opacity: 0, ease: 'power4.out' });
  animation.set(modalSection, { display: 'none' });
};
