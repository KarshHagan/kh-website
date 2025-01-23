import { gsap } from 'gsap';

export const preloader = () => {
  class Preloader {
    private component: HTMLElement;
    private logo: SVGElement;
    private svgElements: Element[];
    private svgG1: Element[];
    private svgG2: Element[];

    constructor() {
      this.component = document.querySelector('.preloader_component') as HTMLElement;
      this.logo = document.querySelector('.preloader_svg') as SVGElement;
      this.svgElements = [];
      this.svgG1 = [];
      this.svgG2 = [];

      this.init();
      this.animate();
    }

    private init() {
      if (this.logo) {
        this.svgElements = Array.from(this.logo.children);

        this.svgG1 = this.svgElements.slice(0, 2);
        this.svgG2 = this.svgElements.slice(2, 4);
      }
    }

    private animate() {
      const tl = gsap.timeline();
      tl.fromTo(
        this.svgG1,
        { opacity: 0, y: '100%' },
        { duration: 1, opacity: 1, y: '0%', ease: 'power2.inOut' }
      );
      tl.fromTo(
        this.svgG2,
        { opacity: 0, y: '-100%' },
        { duration: 1, opacity: 1, y: '0%', ease: 'power2.inOut' },
        '<'
      );
      tl.to(this.logo, { delay: 0.5, duration: 1, top: '1rem', ease: 'expo.inOut' });
      tl.to(this.component, { opacity: 0, display: 'none', ease: 'power2.inOut' });
    }
  }
  new Preloader();
};
export default preloader;
