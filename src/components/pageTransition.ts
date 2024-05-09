// import { pageTransitionIn, pageTransitionOut } from '$motion/pageTransitionMotion';
import { gsap } from 'gsap';

export const pageTransition = () => {
  const transitionElement = document.querySelector('.transition_component');
  const allLinks = [...document.querySelectorAll('a')];

  // Remove Transition on Page load
  gsap.to(transitionElement, {
    delay: 0.5,
    duration: 0.5,
    opacity: 0,
    display: 'none',
    ease: 'power3.out',
    onComplete: () => {
      // Reenable Scrolling
      gsap.set('html', { height: 'auto' });
      gsap.set('body', { overflow: 'auto' });
    },
  });

  // Link Routing
  for (const i in allLinks) {
    const temp = allLinks[i] as HTMLAnchorElement;
    temp.addEventListener('click', (e) => {
      if (
        temp.hostname === window.location.host &&
        temp.href.indexOf('#') === -1 &&
        temp.target !== '_blank'
      ) {
        e.preventDefault();
        const destination = temp.href;

        // Transition In when link clicked
        gsap.to(transitionElement, {
          display: 'block',
          duration: 0.5,
          opacity: 1,
          ease: 'power3.out',
          onComplete: () => {
            window.location.href = destination;
          },
        });
      }
    });
  }

  // On Back Button
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };

  // for (const i in allLinks) {
  //   const temp = allLinks[i] as HTMLAnchorElement;
  //   const linkSrc = temp.href;
  //   if (
  //     linkSrc.includes('karshhagan') &&
  //     !linkSrc.includes('#') &&
  //     !linkSrc.includes('facebook') &&
  //     !linkSrc.includes('twitter') &&
  //     !linkSrc.includes('linkedin') &&
  //     !linkSrc.includes('instagram')
  //   ) {
  //     temp.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       const animation = pageTransitionIn();
  //       animation.play();
  //       const animationDuration = animation.duration() * 1000;
  //       setTimeout(
  //         (url: Location) => {
  //           window.location = url;
  //         },
  //         animationDuration,
  //         linkSrc
  //       );
  //     });
  //   }
  // }
};
