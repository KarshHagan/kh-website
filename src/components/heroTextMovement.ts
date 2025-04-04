import { gsap } from 'gsap';

export const heroTextMovement = () => {
  class HeroTextMovement {
    private heroSection: HTMLElement;
    private maskedSection: HTMLElement;
    private bgTrack: HTMLElement;
    private tracks: HTMLElement[];
    private midTracks: HTMLElement[];
    private outTracks: HTMLElement[];
    private computedMove: number;
    // private maskedText: HTMLElement[];
    // private bgText: HTMLElement[];
    // private midText: HTMLElement[];
    // private outText: HTMLElement[];

    constructor() {
      this.heroSection = document.querySelector('.section_home-hero') as HTMLElement;
      this.maskedSection = heroSection.querySelector(
        '.home-hero_text-track.is-masked'
      ) as HTMLElement;
      this.bgTrack = heroSection.querySelector('.home-hero_text-track.is-bg') as HTMLElement;
      this.tracks = [...heroSection.querySelectorAll('.home-hero_item-wrap')].map(
        (item) => item as HTMLElement
      );
      this.midTracks = [];
      this.outTracks = [];

      this.computedMove = 0;

      console.log('HERE', this.tracks);
      this.sortText();
      this.calculateMovement();
    }

    private sortText() {
      this.tracks.forEach((item) => {
        if (item.classList.contains('is-mid')) {
          this.midTracks.push(item);
        } else {
          this.outTracks.push(item);
        }
      });

      console.log('mid', this.midTracks, 'out', this.outTracks);
    }

    private calculateMovement() {
      const paddingGlobal = document.querySelector('.padding-global') as HTMLElement;
      const paddingObject = window
        .getComputedStyle(paddingGlobal, null)
        .getPropertyValue('padding-left');

      const winWidth = window.innerWidth;

      const paddingValue = parseInt(paddingObject);

      const textWidth = bgTrack.scrollWidth;
      const computedMovement = textWidth - textWidth / 3;

      const newComputed = textWidth - winWidth;

      const textSpeed = 10;

      console.log('HERE', winWidth, textWidth, newComputed, computedMovement);
    }

    private animate() {
      const midAnimation = gsap.timeline({
        repeat: -1,
        yoyo: true,
        onComplete: () => {
          midAnimation.reverse();
        },
      });
      midAnimation.set(midChildren, { x: -newComputed - paddingValue });
      midAnimation.to(midChildren, { duration: textSpeed, x: 0, ease: 'linear' });
      midAnimation.to(
        outChildren,
        {
          duration: textSpeed,
          x: -newComputed - paddingValue,
          ease: 'linear',
        },
        '<'
      );
    }
  }

  const heroSection = document.querySelector('.section_home-hero') as HTMLElement;
  const maskedTrack = heroSection.querySelector('.home-hero_text-track.is-masked') as HTMLElement;
  const bgTrack = heroSection.querySelector('.home-hero_text-track.is-bg') as HTMLElement;

  const maskedChildren = [...maskedTrack.childNodes].map((item) => item as HTMLElement);
  const bgChildren = [...bgTrack.childNodes];

  // const midChildren = [];
  // const outChildren = [];

  // for (let i = 0; i < 3; i++) {
  //   const maskedTemp = maskedChildren[i] as HTMLElement;
  //   const bgTemp = bgChildren[i] as HTMLElement;

  //   if (maskedTemp.classList.contains('is-mid') || bgTemp.classList.contains('is-mid')) {
  //     midChildren.push(maskedTemp);
  //     midChildren.push(bgTemp);
  //   } else {
  //     outChildren.push(maskedTemp);
  //     outChildren.push(bgTemp);
  //   }
  // }

  // const paddingGlobal = document.querySelector('.padding-global') as HTMLElement;
  // const paddingObject = window
  //   .getComputedStyle(paddingGlobal, null)
  //   .getPropertyValue('padding-left');

  // const winWidth = window.innerWidth;

  // const paddingValue = parseInt(paddingObject);

  // const textWidth = bgTrack.scrollWidth;
  // const computedMovement = textWidth - textWidth / 3;

  // const newComputed = textWidth - winWidth;

  // const textSpeed = 10;

  // console.log('HERE', winWidth, textWidth, newComputed, computedMovement);

  // const outAnimation = gsap.timeline({
  //   onComplete: () => {
  //     outAnimation.restart();
  //   },
  // });
  // outAnimation.to(outChildren, {
  //   duration: textSpeed,
  //   x: -computedMovement - paddingValue,
  //   ease: 'linear',
  // });

  new HeroTextMovement();
};
export default heroTextMovement;
