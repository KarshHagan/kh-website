import barba from '@barba/core';
import { restartWebflow } from '@finsweet/ts-utils';
import { gsap } from 'gsap';

export const barbaTransition = () => {
  console.log('BARBA');
  barba.init({
    transitions: [
      {
        name: 'pageFade',
        async leave(data) {
          console.log('leave', data);
          await gsap.to(data.current.container, { opacity: 0, duration: 1, ease: 'power3.out' });
        },
        async enter(data) {
          console.log('enter', data);
          await gsap.set(data.next.container, { opacity: 0 });
          await gsap.to(data.next.container, { opacity: 1, duration: 1, ease: 'power3.out' });
        },
      },
    ],
  });

  barba.hooks.after(async () => {
    console.log('after - Webflow restart');
    const restart = await restartWebflow();
    console.log('restart', restart);
  });
};
