import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

gsap.registerPlugin(InertiaPlugin);

export const inertiaMovement = () => {
  const scrollSections = [...document.querySelectorAll('[data-scroll-section]')];
  // console.log('sections', scrollSections);

  for (const i in scrollSections) {
    const tempSection = scrollSections[i] as HTMLElement;
    const scrollElements = [...tempSection.querySelectorAll('[data-scroll-speed]')];
    // let setSpeed = 0;

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: tempSection,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        // markers: {
        //   startColor: 'yellow',
        //   endColor: 'orange',
        //   //   fontSize: '18px',
        //   //   fontWeight: 'bold',
        //   //   indent: 20,
        // },
      },
    });

    tempSection.addEventListener('wheel', (e) => {
      //   console.log(e.pageY);
      //   setSpeed = e.deltaY;

      for (const j in scrollElements) {
        const tempElement = scrollElements[j] as HTMLElement;
        const elementSpeed = Number(tempElement.dataset.scrollSpeed);
        const setSpeed = elementSpeed;
        // console.log('temp', setSpeed);

        animation.to(tempElement, { inertia: { y: setSpeed } });
      }
    });
  }

  //   console.log(scrollSection);
};
