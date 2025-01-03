import { gsap } from 'gsap';

export const clientsHover = () => {
  const clientSection = document.querySelector('.clients_wrapper') as HTMLElement;
  const clientLogos = [...document.querySelectorAll('.clients_logo')];
  const cursor = document.querySelector('.cursor_component') as HTMLElement;
  clientSection.addEventListener('mouseenter', () => {
    cursor.classList.add('mbm-ex');
    gsap.to(cursor, {
      duration: 1,
      backgroundColor: '#13dabc',
      width: '10rem',
      height: '10rem',
      ease: 'power4.out',
    });
  });
  clientSection.addEventListener('mouseleave', () => {
    cursor.classList.remove('mbm-ex');
    gsap.to(cursor, {
      duration: 1,
      backgroundColor: '#F09F43',
      width: '0.75rem',
      height: '0.75rem',
      ease: 'power4.out',
    });
  });

  for (const i in clientLogos) {
    const temp = clientLogos[i] as HTMLElement;
    temp.addEventListener('mouseenter', () => {
      //   console.log('in');
      gsap.to(temp, { duration: 1, scale: 1.4, ease: 'power4.out', inertia: { x: 50, y: -50 } });
    });
    temp.addEventListener('mouseleave', () => {
      //   console.log('out');
      gsap.to(temp, { duration: 1, scale: 1, ease: 'power4.out' });
      gsap.to(temp, { x: 0, y: 0 });
    });
    temp.addEventListener('mousemove', (e) => {
      const setX = e.movementX * 1;
      const setY = e.movementY * 1;

      gsap.to(temp, { x: setX, y: setY });
    });
  }
};
export default clientsHover;
