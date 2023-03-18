import { gsap } from 'gsap';

const projectsItem = [...document.querySelectorAll('.home-featured_image-item')];
projectsItem.reverse();
const projectTitles = [...document.querySelectorAll('.home-featured_title')];
projectTitles.reverse();

// console.log('titles', projectTitles);
// console.log('images', projectsItem);

export const showNext = (count: number) => {
  const scaleElement = projectsItem[count];
  const scaleImage = scaleElement.children[1];

  const imageAnimation = gsap.timeline();
  imageAnimation.set(scaleImage, { scale: '1.4' });
  imageAnimation.to(projectsItem[count - 1], { duration: 1, x: '100%', ease: 'expo.inOut' });
  imageAnimation.to(scaleImage, { duration: 1, scale: '1', ease: 'expo.inOut' }, '<');

  // console.log('images', projectsItem, 'image', projectsItem[count - 1], 'count', count);
};

export const showPrev = (count: number) => {
  const scaleElement = projectsItem[count + 1];
  const scaleImage = scaleElement.children[1];

  const imageAnimation = gsap.timeline();
  imageAnimation.to(projectsItem[count], { duration: 1, x: '0%', ease: 'expo.inOut' });
  imageAnimation.to(scaleImage, { duration: 1, scale: '1.4', ease: 'expo.inOut' }, '<');

  // console.log('images', projectsItem, 'image', projectsItem[count - 1], 'count', count);
};
