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

  animation.set(prevParent, { display: 'none' });
};

export const viewMoreHoverIn = (element: HTMLElement) => {
  const linkIcon = element.children[1];
  const animation = gsap.timeline();
  animation.to(linkIcon, { duration: 1, scale: 0.8, rotate: '45deg', ease: 'expo.inOut' }, '<');
};
export const viewMoreHoverOut = (element: HTMLElement) => {
  const linkIcon = element.children[1];
  const animation = gsap.timeline();
  animation.to(linkIcon, { duration: 1, scale: 1, rotate: '0deg', ease: 'expo.inOut' }, '<');
};
