import { postContactFrom } from '$components/contactFrom';
import { contactForm, contactHover } from '$components/contactMain';
import { contactPageReveal } from '$motion/contactMotion';

export const contact = () => {
  // ---------------
  // Page Globals
  // ---------------
  console.log('contact');

  contactPageReveal();

  // Link Hover
  contactHover();

  // Contact From
  contactForm();
  postContactFrom();
};
