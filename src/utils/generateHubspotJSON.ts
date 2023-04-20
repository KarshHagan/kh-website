export const generateHubspotJSON = (formData: FormData, target: HTMLFormElement) => {
  // const parsedFormData = [...formData.entries()].map((dataObject) => ({
  //   name: dataObject[0],
  //   value: dataObject[1],
  // }));

  // console.log('PP', parsedFormData);

  const checkbox = target.querySelector('#newsletter_signup_checkbox') as HTMLElement;
  checkbox.classList.add('w-input');

  const formInputs = [...target.querySelectorAll('.w-input')];
  const parsedFormData: { name: string; value: string }[] = [];

  for (let i = 0; i < formInputs.length; i++) {
    // console.log(formInputs[i]);
    const tempInput = formInputs[i] as HTMLInputElement;

    if (tempInput.name === 'newsletter_signup_checkbox') {
      const isChecked = tempInput.checked;
      let setValue = '';
      if (isChecked) {
        setValue = 'true';
      } else {
        setValue = 'false';
      }

      const tempData = {
        name: tempInput.name,
        value: setValue,
      };

      parsedFormData.push(tempData);
    } else {
      const tempData = {
        name: tempInput.name,
        value: tempInput.value,
      };
      // console.log('temp', tempData);
      parsedFormData.push(tempData);
    }
  }

  console.log('parsed', parsedFormData);

  const goToWebinarWebinarKey = parsedFormData.find(
    (input) => input.name === 'goToWebinarWebinarKey'
  )?.value;

  const sfdcCampaignId = parsedFormData.find((input) => input.name === 'sfdcCampaignId')?.value;
  const hutk =
    document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/, '$1') || undefined;

  const processingPrompt = $(target).find("[id*='gdpr-processing-prompt']");

  const communicationConsent = parsedFormData
    .filter((item) => item.name.includes('LEGAL_CONSENT'))
    .map((item) => {
      const label = '';
      return {
        value: true,
        text: label,
        subscriptionTypeId: parseInt(item.name.split('LEGAL_CONSENT.subscription_type_')[1]),
      };
    });
  const ignoredFields = [
    'cc-num',
    'cc-number',
    'gdpr',
    'LEGAL_CONSENT',
    'goToWebinarWebinarKey',
    'sfdcCampaignId',
  ];
  const data = {
    fields: parsedFormData,
    context: {
      pageUri: window.location.href,
      pageName: document.title,
      sfdcCampaignId: sfdcCampaignId,
      goToWebinarKey: goToWebinarWebinarKey,
      hutk: hutk,
    },
    ...(!processingPrompt
      ? {}
      : {
          legalConsentOptions: {
            consent: {
              ...(!processingPrompt
                ? {}
                : {
                    consentToProcess: true,
                    text: processingPrompt.text(),
                  }),
              ...(!communicationConsent
                ? {}
                : {
                    communications: communicationConsent,
                  }),
            },
          },
        }),
  };
  const final_data = JSON.stringify(data);
  return final_data;
};
