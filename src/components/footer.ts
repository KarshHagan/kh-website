// import { generateHubspotJSON } from '$utils/generateHubspotJSON';
import { footerTextMovement } from '$motion/footerMotion';
import { generateHubspotJSON } from '$utils/generateHubspotJSON';
import { getDeviceType } from '$utils/getDevice';
import { postContactData } from '$utils/postContactForm';

export const footer = () => {
  // Footer Text Movement
  // --------------------
  // footerTextMovement();

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
