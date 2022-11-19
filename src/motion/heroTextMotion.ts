import { gsap } from 'gsap';

export const heroTextMotion = (elements: Element[]) => {
  const upperText: Element[] = [];
  const lowerText: Element[] = [];

  for (let i = 0; i < elements.length; i++) {
    const isImageText = elements[i].classList.contains('is-top');
    if (isImageText === true) {
      upperText.push(elements[i]);
    } else {
      lowerText.push(elements[i]);
    }
  }

  const heroUpperTL = gsap.timeline({});
  heroUpperTL.to(upperText, {
    x: '-33%',
    duration: 60,
    yoyo: true,
    repeat: 10,
    ease: 'power2.InOut',
  });

  const heroLowerTL = gsap.timeline({ repeat: -1 });
  heroLowerTL.to(lowerText, {
    x: '33%',
    duration: 60,
    yoyo: true,
    repeat: -1,
    ease: 'power2.InOut',
  });
};
