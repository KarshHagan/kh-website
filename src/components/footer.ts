// eslint-disable-next-line simple-import-sort/imports
import { footerTextMovement } from '$motion/footerMotion';
import { generateHubspotJSON } from '$utils/generateHubspotJSON';
import { postContactData } from '$utils/postContactForm';

export const footer = () => {
  class Footer {
    constructor() {
      this.initFooterSizeAdjustments();
      footerTextMovement();
      this.initFooterForm();
    }

    private initFooterSizeAdjustments() {
      if (window.innerWidth >= 992) {
        this.updateFooter();
      }

      window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
          this.updateFooter();
        } else {
          const footerSpacer = document.querySelector('.section_footer-spacer') as HTMLElement;
          if (footerSpacer) footerSpacer.style.height = '0px';
        }
      });
    }

    private updateFooter() {
      const footerSpacer = document.querySelector('.section_footer-spacer') as HTMLElement;
      const footer = document.querySelector('.footer_component') as HTMLElement;
      if (footer) footerSpacer.style.minHeight = 'auto';
      if (footer) {
        const footerHeight = parseInt(getComputedStyle(footer).height.split('px')[0]) - 64;
        // console.log('FH', footerHeight);
        footerSpacer.style.height = `${footerHeight}px`;
      }
    }

    private initFooterForm() {
      const footerForm = document.querySelector('.footer_form') as HTMLElement;
      if (footerForm) {
        footerForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const target = e.target as HTMLFormElement;
          const formData = new FormData(target);

          const formattedData = generateHubspotJSON(formData, target);
          postContactData(formattedData, target);
        });
      }
    }
  }

  new Footer();
};

export default footer;
