import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

class Banner {
  private component: HTMLElement;
  private svgElement: SVGElement;
  private baseState: SVGPathElement;
  private morphState: SVGPathElement;
  private baseD: string;
  private morphD: string;

  private bannerText: HTMLElement;
  private bannerButton: HTMLElement;
  private scrollSections: HTMLElement[];
  private splitText: SplitText;

  private showAnimation: GSAPTimeline;
  private hideAnimation: GSAPTimeline;
  private morphTween: GSAPTween;

  private isHidden = false;
  private initDone = false;

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

    this.baseD = this.baseState.getAttribute("d") || "";
    this.morphD = this.morphState.getAttribute("d") || "";

    this.splitText = new SplitText(this.bannerText, {
      type: "words",
      mask: "words",
    });

    this.morphState.style.visibility = "hidden";

    this.morphTween = gsap.to(this.baseState, {
      duration: 1,
      morphSVG: this.morphD,
      ease: "expoScale(0.5,7,none)",
      paused: true,
      immediateRender: false,
      overwrite: "auto",
    });

    this.showAnimation = this.buildShowTl();
    this.hideAnimation = this.buildHideTl();

    setTimeout(() => {
      this.setInitialState();
      this.bannerController();
    }, 3000);
  }

  private setInitialState() {
    gsap.set(this.component, { display: "block" });
    gsap.set(this.baseState, { morphSVG: this.baseD });

    if (this.morphTween) {
      this.morphTween.progress(0).pause(0);
    }

    // FOR TESTING
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

        if (this.isHidden) return; // already hidden
        // finish opposite TL instantly if mid-flight, then play target TL from start
        if (
          this.showAnimation.isActive() ||
          this.showAnimation.progress() < 1
        ) {
          this.showAnimation.progress(1).pause(0);
        }
        // drive morph to base (hidden) without creating competing tweens
        this.morphTween.reverse();
        this.hideAnimation.progress(0).play();
        this.isHidden = true;
        // if (this.showAnimation.isActive()) {
        //   console.log("conflicting anitmaion");
        //   this.showAnimation.pause(0).progress(0);
        // }

        // console.log(
        //   "before",
        //   this.hideAnimation.progress(),
        //   this.showAnimation.progress()
        // );

        // this.hideAnimation.progress(0).play();

        // gsap.delayedCall(this.hideAnimation.duration(), () => {
        //   console.log(
        //     "after",
        //     this.hideAnimation.progress(),
        //     this.showAnimation.progress()
        //   );
        // });
      },
      onEnterBack: () => {
        console.log("enter back");

        if (!this.isHidden) return; // already shown
        if (
          this.hideAnimation.isActive() ||
          this.hideAnimation.progress() < 1
        ) {
          this.hideAnimation.progress(1).pause(0);
        }
        // drive morph to shown state
        this.morphTween.play();
        this.showAnimation.progress(0).play();
        this.isHidden = false;

        // if (this.hideAnimation.isActive()) {
        //   console.log("conflicting animation");
        //   this.hideAnimation.pause(0).progress(0);
        // }

        // // this.showAnimation.progress(0);
        // this.showAnimation.progress(0).play();
      },
      onRefresh: (self) => {
        const pastStart = self.scroll() >= self.start;

        this.showAnimation.pause(0);
        this.hideAnimation.pause(0);

        console.log("init done", this.initDone);
        if (!this.initDone) {
          if (pastStart) {
            console.log("loaded past trigger");
            this.morphTween.progress(0).pause(0); // base shape
            this.hideAnimation.progress(1).pause(0);
            this.showAnimation.progress(0).pause(0);
            this.isHidden = true;
          } else {
            console.log("loaded before trigger");
            this.morphTween.progress(0).pause(0);
            this.morphTween.play(0);
            this.showAnimation.restart(true);
            this.isHidden = false;
          }

          this.initDone = true;
          return;
        }

        if (pastStart) {
          console.log("SNAP - past trigger");
          this.morphTween.progress(0).pause(0); // base (hidden)
          this.hideAnimation.progress(1).pause(0);
          this.showAnimation.progress(0).pause(0);
          this.isHidden = true;
        } else {
          console.log("SNAP - before trigger");
          this.morphTween.progress(1).pause(0); // shown
          this.showAnimation.progress(1).pause(0);
          this.hideAnimation.progress(0).pause(0);
          this.isHidden = false;
        }

        // if (pastStart) {
        //   console.log("loaded past trigger");
        //   // this.hideBanner();
        //   this.hideAnimation.play(0);
        // } else {
        //   console.log("loaded before trigger");
        //   // this.showBanner();
        //   this.showAnimation.play(0);
        // }
      },
    });
  }

  private buildShowTl() {
    const tl = gsap.timeline({
      paused: true,
      defaults: { overwrite: "auto", ease: "power2.out" },
    });

    // tl.to(this.baseState, {
    //   duration: 1,
    //   morphSVG: this.morphD,
    //   ease: "expo.out",
    // });
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

  private buildHideTl() {
    const tl = gsap.timeline({
      paused: true,
      defaults: { overwrite: "auto", ease: "expo.out" },
    });
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
    // tl.to(this.baseState, {
    //   duration: 0.8,
    //   morphSVG: this.baseD,
    //   ease: "expo.out",
    // });

    return tl;
  }
}

export const banner = () => {
  new Banner();
};
export default banner;
