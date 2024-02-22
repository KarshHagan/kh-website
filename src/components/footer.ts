// import { generateHubspotJSON } from '$utils/generateHubspotJSON';
import { footerTextMovement } from '$motion/footerMotion';
import { generateHubspotJSON } from '$utils/generateHubspotJSON';
import { postContactData } from '$utils/postContactForm';

// import { gsap } from 'gsap';

export const footer = () => {
  // Footer Size Adjustments
  // --------------------

  if (window.innerWidth >= 992) {
    updateFooter();
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
      updateFooter();
    } else {
      const footerSpacer = document.querySelector('.section_footer-spacer') as HTMLElement;
      footerSpacer.style.height = '0px';
    }
  });

  function updateFooter() {
    const footerSpacer = document.querySelector('.section_footer-spacer') as HTMLElement;
    const footer = document.querySelector('.footer_component') as HTMLElement;
    const footerHeight = parseInt(getComputedStyle(footer).height.split('px')[0]) - 64;

    footerSpacer.style.height = footerHeight + 'px';
  }

  // Footer Text Movement
  // --------------------
  footerTextMovement();

  // Footer Form
  // -----------
  const footerForm = document.querySelector('.footer_form') as HTMLElement;
  footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    const formattedData = generateHubspotJSON(formData, target);
    postContactData(formattedData, target);
  });
};
