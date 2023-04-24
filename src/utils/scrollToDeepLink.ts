import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const setDeepLinks = () => {
  const serviceSections = [...document.querySelectorAll('.home-services_item')];

  for (const i in serviceSections) {
    const temp = serviceSections[i] as HTMLElement;
    const tempTitle = temp.querySelector('h3') as HTMLElement;
    const titleText = tempTitle.innerHTML as string;
    const serviceTag = titleText.split(' ')[0];
    const tempButton = temp.querySelector('.home-services_button-wrap')?.children[0] as HTMLElement;

    tempButton.addEventListener('click', () => {
      localStorage.setItem('scrollSection', serviceTag);
    });
  }
};

export const checkDeepLinks = () => {
  if (localStorage.length > 0) {
    const scrollSection = localStorage.getItem('scrollSection');

    gsap.to(window, {
      duration: 2,
      scrollTo: { y: '#' + scrollSection, offsetY: 100 },
      ease: 'power4.out',
      onComplete: () => {
        localStorage.clear();
      },
    });
  }
};
