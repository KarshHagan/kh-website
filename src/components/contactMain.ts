import {
  closeContactForm,
  initContact,
  linkHoverIn,
  linkHoverOut,
  openContactForm,
  sublinksHoverIn,
  sublinksHoverOut,
} from '$motion/contactMotion';
import { getDeviceType } from '$utils/getDevice';

export const contactHover = () => {
  const device = getDeviceType();

  if (device === 'desktop') {
    initContact();

    const contactLinksWraps = [...document.querySelectorAll('.contact_block')];

    for (const i in contactLinksWraps) {
      const tempWrap = contactLinksWraps[i] as HTMLElement;

      tempWrap.addEventListener('mouseenter', (e) => {
        const target = e.target as HTMLElement;
        const targetNote = target.querySelector('.contact_note-text') as HTMLElement;
        const targetLink = target.querySelector('.contact_link') as HTMLElement;
        const targetLinkParent = target.querySelector('.contact_info-wrap') as HTMLElement;

        linkHoverIn(targetNote, targetLink);

        if (targetLinkParent.children.length > 1) {
          const sublinks = [...target.querySelectorAll('.contact_sub-link')];
          sublinksHoverIn(sublinks);
        }
      });
      tempWrap.addEventListener('mouseleave', (e) => {
        const target = e.target as HTMLElement;
        const targetNote = target.querySelector('.contact_note-text') as HTMLElement;
        const targetLink = target.querySelector('.contact_link') as HTMLElement;
        const targetLinkParent = target.querySelector('.contact_info-wrap') as HTMLElement;

        linkHoverOut(targetNote, targetLink);

        if (targetLinkParent.children.length > 1) {
          const sublinks = [...target.querySelectorAll('.contact_sub-link')];
          sublinksHoverOut(sublinks);
        }
      });
    }
  }
};

export const contactForm = () => {
  const formParent = document.querySelector('.section_contact-form') as HTMLElement;
  const openFormButton = document.querySelector('#openForm') as HTMLElement;
  const closeFormButton = formParent.querySelector('.contact-from_close-wrap') as HTMLElement;
  const closeFormWrap = formParent.querySelector('.contact-form_close-wrap') as HTMLElement;

  openFormButton.addEventListener('click', () => {
    openContactForm();
  });
  closeFormButton.addEventListener('click', () => {
    closeContactForm();
  });
  closeFormWrap.addEventListener('click', () => {
    closeContactForm();
  });
};
