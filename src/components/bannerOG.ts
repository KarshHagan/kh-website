import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

class Banner {
  private component: HTMLElement;
  private svgElement: SVGElement;
  private baseState: SVGPathElement;
  private morphState: SVGPathElement;
  private bannerText: HTMLElement;
  private bannerButton: HTMLElement;
  private scrollSections: HTMLElement[];
  private splitText: SplitText;
  private showAnimation: GSAPTimeline;
  private hideAnimation: GSAPTimeline;

  constructor() {
    this.component = document.querySelector(
      ".component_hero-banner"
    ) as HTMLElement;
    this.svgElement = this.component.querySelector(
      ".hero-banner_svg"
    ) as SVGElement;
    this.baseState = this.svgElement.querySelector("#base") as SVGPathElement;
    this.morphState = this.svgElement.querySelector("#morph") as SVGPathElement;
    this.bannerText = this.component.querySelector(
      ".hero-banner_text"
    ) as HTMLElement;
    this.bannerButton = this.component.querySelector(".button") as HTMLElement;
    this.scrollSections = [
      ...document.querySelectorAll(".home-hero_sizing-wrap"),
    ] as HTMLElement[];
    this.splitText = new SplitText(this.bannerText, {
      type: "words",
      mask: "words",
    });

    this.morphState.style.visibility = "hidden";

    this.showAnimation = this.showBanner();
    this.hideAnimation = this.hideBanner();

    setTimeout(() => {
      this.setInitialState();
      this.bannerController();
    }, 3000);
  }

  private setInitialState() {
    gsap.set(this.component, { display: "block" });
    gsap.set(this.baseState, { morphSVG: this.baseState });

    gsap.set([this.bannerText, this.bannerButton], { display: "none" });
  }

  private bannerController() {
    const st = ScrollTrigger.create({
      trigger: this.scrollSections[0],
      start: "10% top",
      end: "10% top",
      markers: true,
      // toggleActions: "play none none reverse",
      onEnter: () => {
        console.log("enter");

        if (this.showAnimation.isActive()) {
          console.log("conflicting anitmaion");
          this.showAnimation.pause(0).progress(0);
        }

        this.hideAnimation.play(0);
        gsap.delayedCall(this.hideAnimation.duration(), () => {
          console.log(
            "after",
            this.hideAnimation.progress(),
            this.hideAnimation
          );
        });
      },
      onEnterBack: () => {
        console.log("enter back");

        if (this.hideAnimation.isActive()) {
          console.log("conflicting animation");
          this.hideAnimation.pause(0).progress(0);
        }

        // this.showAnimation.progress(0);
        this.showAnimation.play(0);
      },
      onRefresh: (self) => {
        const pastStart = self.scroll() >= self.start;
        if (pastStart) {
          console.log("loaded past trigger");
          // this.hideBanner();
          this.hideAnimation.play(0);
        } else {
          console.log("loaded before trigger");
          // this.showBanner();
          this.showAnimation.play(0);
        }
      },
    });
  }

  private showBanner() {
    const tl = gsap.timeline({ paused: true });
    tl.to(this.baseState, {
      duration: 1,
      morphSVG: this.morphState,
      ease: "expo.out",
    });
    // tl.fromTo(
    //   this.splitText.words,
    //   { y: "3rem", autoAlpha: 0 },
    //   { duration: 0.8, autoAlpha: 1, y: 0, stagger: 0.05, ease: "power2.out" },
    //   "<0.2"
    // );
    // tl.fromTo(
    //   this.bannerButton,
    //   { y: "3rem", autoAlpha: 0 },
    //   { duration: 0.8, autoAlpha: 1, y: 0, stagger: 0.05, ease: "power2.out" },
    //   "<0.5"
    // );

    // tl.fromTo(
    //   this.baseState,
    //   { morphSVG: this.baseState },
    //   { duration: 1, morphSVG: this.morphState, ease: "expo.out" }
    // );
    // tl.fromTo(
    //   this.splitText.words,
    //   { y: "3rem", autoAlpha: 0 },
    //   { duration: 0.8, autoAlpha: 1, y: 0, stagger: 0.05, ease: "power2.out" },
    //   "<0.2"
    // );
    // tl.fromTo(
    //   this.bannerButton,
    //   { y: "3rem", autoAlpha: 0 },
    //   { duration: 0.8, autoAlpha: 1, y: 0, stagger: 0.05, ease: "power2.out" },
    //   "<0.5"
    // );

    return tl;
  }

  private hideBanner() {
    const tl = gsap.timeline({ paused: true });
    // tl.to(this.splitText.words, {
    //   duration: 0.5,
    //   autoAlpha: 0,
    //   ease: "expo.out",
    // });
    // tl.to(
    //   this.bannerButton,
    //   {
    //     duration: 0.5,
    //     y: "-3rem",
    //     autoAlpha: 0,
    //     stagger: 0.05,
    //     ease: "expo.out",
    //   },
    //   "<"
    // );
    tl.to(this.baseState, {
      duration: 0.8,
      morphSVG: this.baseState,
      ease: "expo.out",
    });

    return tl;
  }
}

export const banner = () => {
  new Banner();
};
export default banner;
