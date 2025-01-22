import { generateHubspotJSON } from '$utils/generateHubspotJSON';
import { postContactData } from '$utils/postContactForm';

export const postContactFrom = () => {
  const formElement = document.querySelector('[data-hs-form]') as HTMLElement;
  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formattedData = generateHubspotJSON(target);

    postContactData(formattedData, target);
  });
};
