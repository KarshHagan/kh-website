import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const scrollToServices = () => {
  const serviceSections = [...document.querySelectorAll('.services_item')];
  const serviceLinks = [...document.querySelectorAll('.services-hero_link-item')];

  for (const i in serviceSections) {
    const tempSection = serviceSections[i] as HTMLElement;
    const sectionTitle = tempSection.querySelector('h2') as HTMLElement;
    let sectionTag = sectionTitle.innerHTML as string;
    sectionTag = sectionTag.split(' ')[0] as string;

    tempSection.id = sectionTag;
  }

  for (const i in serviceLinks) {
    const tempLink = serviceLinks[i] as HTMLElement;
    tempLink.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      let linkTag = target.innerHTML as string;
      linkTag = linkTag.split(' ')[0] as string;

      const targetContainer = document.querySelector('#' + linkTag);

      gsap.to(window, {
        duration: 2,
        scrollTo: { y: '#' + linkTag, offsetY: 50 },
        ease: 'power4.out',
      });
    });
  }
};
