import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const pInfoParent = [...document.querySelectorAll('.home-featured_info-item')];
const pInfoItem = [...document.querySelectorAll('.home-featured_item-wrap')];

const pNumbers = [...document.querySelectorAll('.home-featured_number')];

export const initSliderContent = () => {
  for (let i = 0; i < pInfoParent.length; i++) {
    const parentTemp = pInfoParent[i];
    const itemTemp = pInfoItem[i];
    const numberTemp = pNumbers[i] as HTMLElement;

    // console.log('header', itemTemp);
    numberTemp.innerHTML = '0' + (i + 1);
    if (i > 0) {
      gsap.set(parentTemp, { display: 'none' });
      gsap.set(itemTemp, { y: '100%', opacity: 0 });
    }
  }
};

export const showNextContent = (curIndex: number, prevIndex: number) => {
  const curParent = pInfoParent[curIndex];
  const prevParent = pInfoParent[prevIndex];

  const curItem = pInfoItem[curIndex];
  const prevItem = pInfoItem[prevIndex];

  const animation = gsap.timeline();

  animation.set(curParent, { display: 'flex' });

  animation.to(curItem, { duration: 0.8, opacity: 1, y: '0%', ease: 'power4.inOut' });
  animation.to(
    prevItem,
    {
      duration: 0.8,
      opacity: 0,
      y: '-100%',
      ease: 'power4.inOut',
    },
    '<'
  );

  animation.set(prevItem, { y: '100%' });
  animation.set(prevParent, { display: 'none' });
};

export const showPrevContent = (curIndex: number, prevIndex: number) => {
  const curParent = pInfoParent[curIndex];
  const prevParent = pInfoParent[prevIndex];

  const curItem = pInfoItem[curIndex];
  const prevItem = pInfoItem[prevIndex];

  const animation = gsap.timeline();

  animation.set(curParent, { display: 'flex' });
  animation.set(curItem, { y: '-100%' });

  animation.to(curItem, { duration: 0.8, opacity: 1, y: '0%', ease: 'power4.inOut' });
  animation.to(
    prevItem,
    {
      duration: 0.8,
      opacity: 0,
      y: '100%',
      ease: 'power4.inOut',
    },
    '<'
  );

  // animation.to(prevItem, { y: '100%' });

  animation.set(prevParent, { display: 'none' });
};

// export const showNextContent = (curItem: number, prevItem: number) => {
//   const moveCurTitle = pTitles[curItem] as HTMLElement;
//   const movePrevTitle = pTitles[prevItem] as HTMLElement;
//   const moveCurNumber = pNumbers[curItem] as HTMLElement;
//   const movePrevNumber = pNumbers[prevItem] as HTMLElement;
//   const moveCurDescription = pDescriptions[curItem] as HTMLElement;
//   const movePrevDescription = pDescriptions[prevItem] as HTMLElement;
//   const moveCurButton = pButtons[curItem] as HTMLElement;
//   const movePrevButton = pButtons[prevItem] as HTMLElement;

//   // console.log(moveCurTitle, movePrevTitle);

//   const infoAnimation = gsap.timeline();
//   infoAnimation.to(
//     [moveCurTitle, moveCurNumber, moveCurDescription],
//     { duration: 0.8, y: '0%', opacity: 1, ease: 'power4.inOut' },
//     '<'
//   );
//   infoAnimation.to(
//     [movePrevTitle, movePrevNumber, movePrevDescription],
//     { duration: 0.8, y: '-100%', opacity: 0, ease: 'power4.inOut' },
//     '<'
//   );
//   // infoAnimation.to(
//   //   movePrevDescription,
//   //   { duration: 0.6, y: '-100%', opacity: 0, ease: 'expo.inOut' },
//   //   '<'
//   // );
//   // infoAnimation.to(
//   //   moveCurDescription,
//   //   { duration: 0.6, y: '0%', opacity: 1, ease: 'expo.inOut' },
//   //   '<0.2'
//   // );

//   infoAnimation.set(movePrevButton, { display: 'none' });
//   infoAnimation.set(moveCurButton, { display: 'flex' });
//   infoAnimation.set([movePrevTitle, movePrevNumber, movePrevDescription], { y: '100%' });
// };

// export const showPrevContent = (curItem: number, prevItem: number) => {
//   const moveCurTitle = pTitles[curItem] as HTMLElement;
//   const movePrevTitle = pTitles[prevItem] as HTMLElement;
//   const moveCurNumber = pNumbers[curItem] as HTMLElement;
//   const movePrevNumber = pNumbers[prevItem] as HTMLElement;
//   const moveCurDescription = pDescriptions[curItem] as HTMLElement;
//   const movePrevDescription = pDescriptions[prevItem] as HTMLElement;
//   const moveCurButton = pButtons[curItem] as HTMLElement;
//   const movePrevButton = pButtons[prevItem] as HTMLElement;

//   const infoAnimation = gsap.timeline();
//   infoAnimation.to(
//     [moveCurTitle, moveCurNumber],
//     { duration: 0.6, y: '0%', ease: 'expo.inOut' },
//     '<'
//   );
//   infoAnimation.to(
//     [movePrevTitle, movePrevNumber],
//     {
//       duration: 0.6,
//       y: '-100%',
//       ease: 'expo.inOut',
//     },
//     '<'
//   );
//   infoAnimation.to(movePrevDescription, { duration: 0.6, opacity: 0, ease: 'power4.out' }, '<0.5');
//   infoAnimation.to(moveCurDescription, { duration: 0.6, opacity: 1, ease: 'power4.out' }, '<');

//   infoAnimation.set([movePrevTitle, movePrevNumber], { y: '100%' });
//   infoAnimation.set(movePrevButton, { duration: 0, display: 'none' });
//   infoAnimation.set(moveCurButton, { duration: 0, display: 'flex' });
// };

// export const textYMovement = (movement: number) => {
//   const featuredBGText = document.querySelector('#featuredBGText');
//   const featuredMaskedText = document.querySelector('#featuredMaskText');

//   const animation = gsap.timeline();
//   animation.to([featuredBGText, featuredMaskedText], {
//     duration: 0.4,
//     rotate: -movement * 0.2,
//     ease: 'power1.inOut',
//   });
// };

export const viewMoreHoverIn = (element: HTMLElement) => {
  const linkText = element.children[0];
  const linkIcon = element.children[1];
  const animation = gsap.timeline();
  // animation.to(linkText, { letterSpacing: '4px', ease: 'expo.out' });
  animation.to(linkIcon, { duration: 1, scale: 0.8, rotate: '45deg', ease: 'expo.inOut' }, '<');
};
export const viewMoreHoverOut = (element: HTMLElement) => {
  const linkText = element.children[0];
  const linkIcon = element.children[1];
  const animation = gsap.timeline();
  // animation.to(linkText, { letterSpacing: '0px', ease: 'expo.out' });
  animation.to(linkIcon, { duration: 1, scale: 1, rotate: '0deg', ease: 'expo.inOut' }, '<');
};
