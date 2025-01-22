export const generateHubspotJSON = (target: HTMLFormElement) => {
  if (window.location.pathname.includes('/contact')) {
    target.querySelector('#newsletter_signup_checkbox')?.classList.add('w-input');
  }

  const ignoredFields = new Set([
    'cc-num',
    'cc-number',
    'gdpr',
    'LEGAL_CONSENT',
    'goToWebinarWebinarKey',
    'sfdcCampaignId',
  ]);

  const formInputs = [...target.querySelectorAll('.w-input')];
  const parsedFormData = Array.from(formInputs).map((input) => {
    const inputElement = input as HTMLInputElement;
    return {
      name: inputElement.name,
      value:
        inputElement.type === 'checkbox'
          ? inputElement.checked
            ? 'true'
            : 'false'
          : inputElement.value,
    };
  });

  const processingPrompt = target.querySelector("[id*='gdpr-processing-prompt']");
  const communicationConsent = parsedFormData
    .filter((item) => item.name.includes('LEGAL_CONSENT'))
    .map((item) => ({
      value: true,
      text: '',
      subscriptionTypeId: parseInt(item.name.split('LEGAL_CONSENT.subscription_type_')[1]),
    }));

  const legalConsentOptions = processingPrompt
    ? {
        legalConsentOptions: {
          consent: {
            consentToProcess: true,
            text: processingPrompt.textContent || '',
            communications: communicationConsent,
          },
        },
      }
    : {};

  return JSON.stringify({
    fields: parsedFormData,
    context: {
      pageUri: window.location.href,
      pageName: document.title,
      sfdcCampaignId: parsedFormData.find((input) => input.name === 'sfdcCampaignId')?.value,
      goToWebinarKey: parsedFormData.find((input) => input.name === 'goToWebinarWebinarKey')?.value,
      hutk:
        document.cookie.replace(/(?:(?:^|.*;\s*)hubspotutk\s*\=\s*([^;]*).*$)|^.*$/, '$1') ||
        undefined,
    },
    ...legalConsentOptions,
  });
};
