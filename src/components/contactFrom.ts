import { generateHubspotJSON } from '$utils/generateHubspotJSON';
import { postContactData } from '$utils/postContactForm';

export const postContactFrom = () => {
  const formElement = document.querySelector('#contact-form') as HTMLElement;
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    const formData = new FormData(target);

    const formattedData = generateHubspotJSON(formData, target);
    postContactData(formattedData, target);
  });
};
