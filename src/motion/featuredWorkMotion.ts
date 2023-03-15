import { gsap } from 'gsap';

const projectsImages = [...document.querySelectorAll('.home-featured_image')];
projectsImages.reverse();
const projectTitles = document.querySelectorAll('.home-featured_title');

console.log('titles', projectTitles);

export const showNext = (count: number) => {
  const imageAnimation = gsap.timeline();
  imageAnimation.to(projectsImages[count - 1], { x: '100%' });

  console.log('images', projectsImages, 'image', projectsImages[count - 1], 'count', count);
};

export const showPrev = (count: number) => {
  const imageAnimation = gsap.timeline();
  imageAnimation.to(projectsImages[count], { x: '0%' });

  console.log('images', projectsImages, 'image', projectsImages[count - 1], 'count', count);
};
