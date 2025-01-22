import { generateHubspotJSON } from '$utils/generateHubspotJSON';
import { postContactData } from '$utils/postContactForm';

export const hsSubmission = () => {
  class HSForm {
    private form: HTMLFormElement;
    constructor() {
      this.form = document.querySelector('[data-hs-form]') as HTMLFormElement;

      this.formListener();
    }

    private formListener() {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const formattedData = generateHubspotJSON(target);

        postContactData(formattedData, target);
      });
    }
  }

  new HSForm();
};
export default hsSubmission;
