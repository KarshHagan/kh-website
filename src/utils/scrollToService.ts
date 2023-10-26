import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export const scrollToServices = () => {
  const serviceLinks = [...document.querySelectorAll('.services_link-item')];
  const sMarkers = [...document.querySelectorAll('.services_scroll-spacer')].filter((e) => {
    if (!e.classList.contains('hide')) {
      return e;
    }
  });

  const sPoints: number[] = [];

  for (const i in sMarkers) {
    const tMarker = sMarkers[i] as HTMLElement;
    const tLink = serviceLinks[i] as HTMLElement;

    const tag = tLink.children[0].innerHTML.split(' ')[0];
    tMarker.id = tag;

    console.log('TAG', tag);

    // const bounds = temp.getBoundingClientRect();
    // sPoints.push(bounds.top);
  }

  for (let i = 0; i < serviceLinks.length; i++) {
    const tempLink = serviceLinks[i] as HTMLElement;
    const matchTag = tempLink.children[0].innerHTML.split(' ')[0].toLowerCase();
    tempLink.addEventListener('click', (e) => {
      gsap.to(window, {
        duration: 2,
        scrollTo: { y: '#' + matchTag, offsetY: 50 },
        ease: 'power4.out',
      });
    });
  }

  //   for (const i in sMarkers) {
  //     const temp = sMarkers[i] as HTMLElement;
  //     const bounds = temp.getBoundingClientRect();
  //     sPoints.push(bounds.top);
  //   }

  //   for (let i = 0; i < serviceLinks.length; i++) {
  //     const tempLink = serviceLinks[i] as HTMLElement;
  //     tempLink.addEventListener('click', (e) => {
  //       gsap.to(window, {
  //         duration: 2,
  //         scrollTo: { y: sPoints[i], offsetY: 50 },
  //         ease: 'power4.out',
  //       });
  //     });
  //   }
};
