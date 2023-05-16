// import { generateHubspotJSON } from '$utils/generateHubspotJSON';
import { footerTextMovement } from '$motion/footerMotion';
import { generateHubspotJSON } from '$utils/generateHubspotJSON';
import { getDeviceType } from '$utils/getDevice';
import { postContactData } from '$utils/postContactForm';

export const footer = () => {
  // Footer Spacer Sizing
  // --------------------
  const footerElement = document.querySelector('.footer_component') as HTMLElement;
  const footerSpacer = document.querySelector('.section_footer-spacer') as HTMLElement;

  const footerCornerFix = 4 * 16;
  const footerHeight = footerElement.clientHeight;
  let setHeight = footerHeight - footerCornerFix + 'px';

  const device = getDeviceType();
  if (device === 'mobile') {
    setHeight = '0px';
  }
  footerSpacer.style.height = setHeight;

  // console.log(footerHeight);
  // console.log(footerSpacer.style.height);

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
