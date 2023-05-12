import { gsap } from 'gsap';

export const initContact = () => {
  const sublinks = [...document.querySelectorAll('.contact_sub-link')];
  //   console.log(sublinks);

  gsap.set(sublinks, { y: '1rem', opacity: 0 });
};

export const linkHoverIn = (curNote: HTMLElement, curLink: HTMLElement) => {
  const animation = gsap.timeline();
  animation.to(curLink.children[0], { color: '#D5CFC6', ease: 'expo.out' });
  //   animation.to(curLink, { letterSpacing: '3px', ease: 'expo.out' }, '<');
  animation.to(curNote, { color: '#EC2543', ease: 'expo.inout' }, '<');
};

export const linkHoverOut = (curNote: HTMLElement, curLink: HTMLElement) => {
  const animation = gsap.timeline();
  animation.to(curLink.children[0], { color: 'rgba(248,244,238,0)', ease: 'expo.out' });
  //   animation.to(curLink, { letterSpacing: '0px', ease: 'expo.out' }, '<');
  animation.to(curNote, { color: 'rgb(238, 235, 230, .2)', ease: 'expo.out' }, '<');

  curLink.classList.add('text-stroke-white');
};

export const sublinksHoverIn = (sublinks: Element[]) => {
  const animation = gsap.timeline();
  animation.to(sublinks, { opacity: 1, y: '0rem', stagger: { each: 0.1 }, ease: 'expo.out' });
};

export const sublinksHoverOut = (sublinks: Element[]) => {
  const animation = gsap.timeline();
  animation.to(sublinks, { opacity: 0, y: '1rem', stagger: { each: 0.1 }, ease: 'expo.out' });
};

export const openContactForm = () => {
  const formParent = document.querySelector('.section_contact-form') as HTMLElement;
  const formComponent = formParent.querySelector('.contact-form_component');

  const animation = gsap.timeline();
  animation.set(formParent, { duration: 0, opacity: 0, display: 'block' });
  animation.set(formComponent, { duration: 0, opacity: 0 });
  animation.to(formParent, { opacity: 1, ease: 'power4.out' });
  animation.to(formComponent, { opacity: 1, ease: 'power4.out' });
};
export const closeContactForm = () => {
  const formParent = document.querySelector('.section_contact-form') as HTMLElement;
  const formComponent = formParent.querySelector('.contact-form_component');

  const animation = gsap.timeline();
  animation.to(formParent, { opacity: 0, ease: 'power4.out' });
  animation.to(formComponent, { opacity: 0, ease: 'power4.out' }, '<');

  animation.set(formParent, { duration: 0, display: 'none' });
};

// Reveal Animations
// -----------------
export const contactPageReveal = () => {
  const contactSection = document.querySelector('.section_contact') as HTMLElement;
  const contactBlocks = [...contactSection.querySelectorAll('.contact_block')];
  const overviewText = contactSection.querySelector('.contact_overview-text');
  const footerSpan = contactSection.querySelector('.contact_footer-span');
  const footerStamp = contactSection.querySelector('.contact_stamp');

  const animation = gsap.timeline();
  animation.from(contactBlocks, {
    delay: 1,
    duration: 1,
    stagger: { each: 0.1 },
    y: '100%',
    opacity: 0,
    rotation: 7,
    ease: 'expo.out',
  });
  animation.from(footerSpan, { duration: 2, width: '0%', ease: 'power4.out' }, '<');
  animation.from(footerStamp, { duration: 2, opacity: 0, rotation: -7, ease: 'power4.out' }, '<');
  animation.from(overviewText, { duration: 1, y: '2rem', opacity: 0, ease: 'power4.out' }, '<0.5');
};
