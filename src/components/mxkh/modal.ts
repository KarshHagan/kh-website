/* eslint-disable simple-import-sort/imports */
import lenis from '$utils/smoothScroll';
import { gsap } from 'gsap';

export const modal = () => {
  class Modal {
    private component: HTMLElement;
    private workLinks: HTMLElement[];
    private workModals: HTMLElement[];
    private modalClose: HTMLAnchorElement;
    private activeModal: HTMLElement | null;

    constructor() {
      this.component = document.querySelector('.section_work-modal') as HTMLElement;
      this.workLinks = [...document.querySelectorAll('.work_item')].map(
        (item) => item as HTMLElement
      );
      this.workModals = [...document.querySelectorAll('.modal_item')].map(
        (item) => item as HTMLElement
      );
      this.modalClose = document.querySelector('.modal_close') as HTMLAnchorElement;
      this.activeModal = null;

      this.setListeners();
    }

    private setListeners() {
      this.workLinks.forEach((item) => {
        item.addEventListener('click', (e) => {
          const element = e.target as HTMLElement;
          const data = String(element.dataset.work);
          const aModal = this.workModals.filter((item) => {
            return item.dataset.work === data;
          });

          this.activeModal = aModal[0] as HTMLElement;
          this.animateIn(aModal[0]);
        });
      });

      this.modalClose.addEventListener('click', () => {
        this.animateOut();
      });
    }

    private animateIn(work: HTMLElement) {
      lenis.stop();
      work.classList.remove('hide');

      const tl = gsap.timeline();

      tl.fromTo(
        this.component,
        { y: '100vh', opacity: 0, display: 'none' },
        { duration: 1, y: '0vh', opacity: 1, display: 'block', ease: 'expo.inOut' }
      );
      tl.fromTo(
        work,
        { opacity: 0, display: 'none' },
        { duration: 1, opacity: 1, display: 'grid', ease: 'sine.out' },
        '<0.8'
      );
    }

    private animateOut() {
      lenis.start();
      const tl = gsap.timeline();
      tl.to(this.component, {
        duration: 1,
        y: '100vh',
        opacity: 0,
        display: 'none',
        ease: 'expo.inOut',
      });
      tl.to(this.activeModal, { duration: 1, opacity: 0, display: 'none', ease: 'expo.inOut' });
      if (this.activeModal !== null) this.activeModal.classList.add('hide');
    }
  }
  new Modal();
};
export default modal;
