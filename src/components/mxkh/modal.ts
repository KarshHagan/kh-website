/* eslint-disable simple-import-sort/imports */
import lenis from '$utils/smoothScroll';
import { gsap } from 'gsap';

export const modal = () => {
  class Modal {
    private component: HTMLElement;
    private workLinks: HTMLElement[];
    private workModals: HTMLElement[];
    private modalClose: HTMLAnchorElement;
    private activeModal: string;

    constructor() {
      this.component = document.querySelector('.section_work-modal') as HTMLElement;
      this.workLinks = [...document.querySelectorAll('.work_item')].map(
        (item) => item as HTMLElement
      );
      this.workModals = [...document.querySelectorAll('.w-modal_item')].map(
        (item) => item as HTMLElement
      );
      this.modalClose = document.querySelector('.modal_close') as HTMLAnchorElement;

      this.workModals.forEach((item) => {
        console.log('bbbb', item.dataset);
      });

      this.activeModal = '';

      console.log('MODAL', this.modalClose);

      this.setListeners();
    }

    private setListeners() {
      this.workLinks.forEach((item) => {
        console.log('Item', item);
        item.addEventListener('click', (e) => {
          console.log('click', e.target);
          const element = e.target as HTMLElement;
          const data = String(element.dataset.work);
          this.activeModal = data;
          this.animateIn(data);

          console.log(data);
        });
      });

      this.modalClose.addEventListener('click', () => {
        this.animateOut();
      });
    }

    private animateIn(work: string) {
      lenis.stop();
      const tl = gsap.timeline();
      const setModal = this.getElementByDataWork(work);

      console.log('SET', setModal);
      tl.to(this.component, { duration: 1, opacity: 1, display: 'block' });
    }

    private animateOut() {
      lenis.start();
      const tl = gsap.timeline();
      tl.to(this.component, { duration: 1, opacity: 0, display: 'none' });
    }

    private getElementByDataWork(value: string): HTMLElement | undefined {
      console.log(
        'ayp',
        this.workModals.find((item) => item)
      );
      return this.workModals.find((item) => item.dataset.work === value);
    }
  }
  new Modal();
};
export default modal;
