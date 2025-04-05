import { gsap } from 'gsap';

export const heroTextMovement = () => {
  class HeroTextMovement {
    private heroSection: HTMLElement;
    private tracks: HTMLElement[];
    private midTracks: HTMLElement[];
    private outTracks: HTMLElement[];
    private computedMove: number;
    private tl: gsap.core.Timeline | null;
    private speed: number;

    constructor() {
      this.heroSection = document.querySelector('.section_home-hero') as HTMLElement;
      this.tracks = [...this.heroSection.querySelectorAll('.home-hero_item-wrap')].map(
        (item) => item as HTMLElement
      );
      this.midTracks = [];
      this.outTracks = [];
      this.computedMove = 0;
      this.tl = null;
      this.speed = parseInt(this.heroSection.dataset.textSpeed as string);

      // console.log('speed', this.speed);

      this.sortText();
      this.calculateMovement();
      this.animate();

      this.handleResize(() => {
        this.calculateMovement();
        this.animate();
      }, 100);
    }

    private sortText() {
      this.tracks.forEach((item) => {
        if (item.classList.contains('is-mid')) {
          this.midTracks.push(item);
        } else {
          this.outTracks.push(item);
        }
      });
    }

    private calculateMovement() {
      const paddingGlobal = document.querySelector('.padding-global') as HTMLElement;
      const paddingObject = window
        .getComputedStyle(paddingGlobal, null)
        .getPropertyValue('padding-left');

      const winWidth = window.innerWidth;
      const paddingValue = parseInt(paddingObject);
      const textWidth = this.tracks[0].scrollWidth;

      this.computedMove = textWidth - winWidth + paddingValue;
    }

    private animate() {
      if (this.tl) {
        this.tl.kill();
      }

      this.tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        onComplete: () => {
          if (this.tl) this.tl.reverse();
        },
      });

      this.tl.set(this.midTracks, { x: -this.computedMove });
      this.tl.set(this.outTracks, { x: 0 });
      this.tl.to(this.midTracks, { duration: this.speed, x: 0, ease: 'linear' });
      this.tl.to(
        this.outTracks,
        {
          duration: this.speed,
          x: -this.computedMove,
          ease: 'linear',
        },
        '<'
      );
    }

    private handleResize(callback: () => void, delay = 200) {
      let timeoutId: number;
      window.addEventListener('resize', () => {
        clearTimeout(timeoutId);
        timeoutId = window.setTimeout(callback, delay);
      });
    }
  }
  new HeroTextMovement();
};
export default heroTextMovement;
