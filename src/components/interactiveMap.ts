import { gsap } from 'gsap';

export const interactiveMap = () => {
  class InteractiveMap {
    private mapParent: HTMLElement;
    private images: HTMLElement[];
    private content: HTMLElement[];
    private mapElement: HTMLElement;
    private next: HTMLElement;
    private prev: HTMLElement;

    private currentIndex: number;

    constructor() {
      this.mapParent = document.querySelector('.inter-map_main') as HTMLElement;
      this.images = [...this.mapParent.querySelectorAll('.inter-map_img-item')].map(
        (item) => item as HTMLElement
      );
      this.content = [...this.mapParent.querySelectorAll('.inter-map_content-item')].map(
        (item) => item as HTMLElement
      );
      this.next = document.querySelector('.media-slider_button.is-next') as HTMLElement;
      this.prev = document.querySelector('.media-slider_button.is-prev') as HTMLElement;
      this.currentIndex = 0;

      this.mapElement = document.querySelector('.inter-map_svg') as HTMLElement;

      this.init();
      this.setListeners();
      this.initMap();
    }
    private init() {
      this.images.forEach((image, index) => {
        gsap.set(image, { autoAlpha: index === 0 ? 1 : 0 });
      });
      this.content.forEach((content, index) => {
        gsap.set(content, { autoAlpha: index === 0 ? 1 : 0 });
      });
    }

    private setListeners() {
      this.next.addEventListener('click', () => {
        this.switchSlide(this.currentIndex + 1);
      });
      this.prev.addEventListener('click', () => {
        this.switchSlide(this.currentIndex - 1);
      });
    }

    private switchSlide(nextIndex: number) {
      const totalSlides = this.images.length;

      const tl = gsap.timeline();

      if (nextIndex >= totalSlides) {
        nextIndex = 0;
      } else if (nextIndex < 0) {
        nextIndex = totalSlides - 1;
      }

      if (nextIndex !== this.currentIndex) {
        tl.to(this.images[this.currentIndex], { autoAlpha: 0, duration: 0.5 })
          .to(this.content[this.currentIndex], { autoAlpha: 0, duration: 0 }, '<')
          .to(this.images[nextIndex], { autoAlpha: 1, duration: 0.5 }, '<')
          .to(this.content[nextIndex], { autoAlpha: 1, duration: 0 }, '<');

        this.currentIndex = nextIndex;
      }
    }

    private initMap() {
      console.log('map', this.mapElement);
    }
  }

  new InteractiveMap();
};
export default interactiveMap;
