// import { generateHubspotJSON } from '$utils/generateHubspotJSON';
import { footerTextMovement } from '$motion/footerMotion';
import { generateHubspotJSON } from '$utils/generateHubspotJSON';
import { getDeviceType } from '$utils/getDevice';
import { postContactData } from '$utils/postContactForm';

// import { gsap } from 'gsap';

export const footer = () => {
  const footerSpacer = document.querySelector('.section_footer-spacer') as HTMLElement;
  const footer = document.querySelector('.footer_component') as HTMLElement;
  const footerHeight = parseInt(getComputedStyle(footer).height.split('px')[0]) - 64;

÷  window.addEventListener('resize', () => {
    const footerHeight = parseInt(getComputedStyle(footer).height.split('px')[0]) - 64;

    footerSpacer.style.height = footerHeight + 'px';
  });

  // gsap.to(footerSpacer, { height: footerHeight, duration: 0.5, delay: 5 });

  console.log(footerHeight);

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
