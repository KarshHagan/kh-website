import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const pItems = [...document.querySelectorAll('.home-featured_image-item')];
pItems.reverse();
const pTitles = [...document.querySelectorAll('.home-featured_title')];
pTitles.reverse();
const pNumbers = [...document.querySelectorAll('.home-featured_number')];
pNumbers.reverse();
const pDescriptions = [...document.querySelectorAll('.home-featured_description')];
pDescriptions.reverse();
const pButtons = [...document.querySelectorAll('.home-featured_button')];
pButtons.reverse();
const pImages = [...document.querySelectorAll('.home-featured_image')];
pImages.reverse();

export const initSlider = () => {
  for (let i = 0; i < pItems.length; i++) {
    const titleTemp = pTitles[i] as HTMLElement;
    const numberTemp = pNumbers[i] as HTMLElement;
    const descTemp = pDescriptions[i] as HTMLElement;
    const buttonTemp = pButtons[i] as HTMLElement;
    const imageTemp = pImages[i] as HTMLElement;
    numberTemp.innerHTML = '0' + (i + 1);
    if (i > 0) {
      gsap.set([titleTemp, numberTemp], { y: '100%' });
      gsap.set(descTemp, { opacity: 0 });
      gsap.set(buttonTemp, { display: 'none' });
      gsap.set(imageTemp, { x: '-100%' });
    }
  }
};

export const showNext = (curItem: number, prevItem: number) => {
  // console.log('shown next', curItem, prevItem);
  const moveCurTitle = pTitles[curItem] as HTMLElement;
  const movePrevTitle = pTitles[prevItem] as HTMLElement;
  const moveCurNumber = pNumbers[curItem] as HTMLElement;
  const movePrevNumber = pNumbers[prevItem] as HTMLElement;
  const moveCurDescription = pDescriptions[curItem] as HTMLElement;
  const movePrevDescription = pDescriptions[prevItem] as HTMLElement;
  const moveCurButton = pButtons[curItem] as HTMLElement;
  const movePrevButton = pButtons[prevItem] as HTMLElement;

  const infoAnimation = gsap.timeline();
  infoAnimation.to(
    [moveCurTitle, moveCurNumber],
    { duration: 0.8, y: '0%', ease: 'expo.inOut' },
    '<'
  );
  infoAnimation.to(
    [movePrevTitle, movePrevNumber],
    {
      duration: 0.8,
      y: '-100%',
      ease: 'expo.inOut',
    },
    '<'
  );
  infoAnimation.to(movePrevDescription, { duration: 1, opacity: 0, ease: 'power4.out' }, '<');
  infoAnimation.to(moveCurDescription, { duration: 1, opacity: 1, ease: 'power4.out' }, '<0.5');
  infoAnimation.set(movePrevButton, { duration: 0, display: 'none' }, '<');
  infoAnimation.set(moveCurButton, { duration: 0, display: 'flex' }, '<');

  infoAnimation.set([movePrevTitle, movePrevNumber], { y: '100%' });

  const curImage = pImages[curItem];
  const prevImage = pImages[prevItem];

  const imageAnimation = gsap.timeline();
  imageAnimation.set(curImage, { zIndex: 1 });
  imageAnimation.set(prevImage, { zIndex: 0 });
  imageAnimation.to(curImage, { duration: 1, x: '0%', ease: 'expo.inOut' });
  imageAnimation.to(prevImage, { duration: 1, ease: 'expo.inOut' }, '<');
  imageAnimation.set(prevImage, { x: '-100%' });
};

export const showPrev = (curItem: number, prevItem: number) => {
  // console.log('shown prev', curItem, prevItem);
  const moveCurTitle = pTitles[curItem] as HTMLElement;
  const movePrevTitle = pTitles[prevItem] as HTMLElement;
  const moveCurNumber = pNumbers[curItem] as HTMLElement;
  const movePrevNumber = pNumbers[prevItem] as HTMLElement;
  const moveCurDescription = pDescriptions[curItem] as HTMLElement;
  const movePrevDescription = pDescriptions[prevItem] as HTMLElement;
  const moveCurButton = pButtons[curItem] as HTMLElement;
  const movePrevButton = pButtons[prevItem] as HTMLElement;

  const infoAnimation = gsap.timeline();
  infoAnimation.to(
    [moveCurTitle, moveCurNumber],
    { duration: 1, y: '0%', ease: 'expo.inOut' },
    '<'
  );
  infoAnimation.to(
    [movePrevTitle, movePrevNumber],
    {
      duration: 1,
      y: '-100%',
      ease: 'expo.inOut',
    },
    '<'
  );
  infoAnimation.to(movePrevDescription, { duration: 1, opacity: 0, ease: 'power4.out' }, '<0.5');
  infoAnimation.to(moveCurDescription, { duration: 1, opacity: 1, ease: 'power4.out' }, '<');
  infoAnimation.set(movePrevButton, { duration: 0, display: 'none' }, '<');
  infoAnimation.set(moveCurButton, { duration: 0, display: 'flex' }, '<');

  infoAnimation.set([movePrevTitle, movePrevNumber], { y: '100%' });

  const curImage = pImages[curItem];
  const prevImage = pImages[prevItem];

  const imageAnimation = gsap.timeline();
  imageAnimation.set(curImage, { zIndex: 1 });
  imageAnimation.set(prevImage, { zIndex: 0 });
  imageAnimation.to(curImage, { duration: 1, x: '0%', ease: 'expo.inOut' });
  imageAnimation.to(prevImage, { duration: 1, ease: 'expo.inOut' }, '<');
  imageAnimation.set(prevImage, { x: '-100%' });
};

export const textYMovement = (movement: number) => {
  const featuredBGText = document.querySelector('#featuredBGText');
  const featuredMaskedText = document.querySelector('#featuredMaskText');

  const animation = gsap.timeline();
  animation.to([featuredBGText, featuredMaskedText], {
    duration: 0.4,
    rotate: -movement * 0.2,
    ease: 'power1.inOut',
  });
};

export const viewMoreHoverIn = (element: HTMLElement) => {
  const linkText = element.children[0];
  const linkIcon = element.children[1];
  const animation = gsap.timeline();
  animation.to(linkText, { letterSpacing: '4px', ease: 'expo.out' });
  animation.to(linkIcon, { scale: 0.8, rotate: '45deg', ease: 'expo.out' }, '<');
};
export const viewMoreHoverOut = (element: HTMLElement) => {
  const linkText = element.children[0];
  const linkIcon = element.children[1];
  const animation = gsap.timeline();
  animation.to(linkText, { letterSpacing: '0px', ease: 'expo.out' });
  animation.to(linkIcon, { scale: 1, rotate: '0deg', ease: 'expo.out' }, '<');
};
