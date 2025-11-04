// src/components/banner.ts
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

  // state flags
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

    // cache path data strings (morph to strings, not nodes)
    this.baseD = this.baseState.getAttribute("d") || "";
    this.morphD = this.morphState.getAttribute("d") || "";

    this.splitText = new SplitText(this.bannerText, {
      type: "words",
      mask: "words",
    });

    // reference path may remain hidden
    this.morphState.style.visibility = "hidden";

    // single morph tween shared by both directions
    this.morphTween = gsap.to(this.baseState, {
      duration: 1,
      morphSVG: this.morphD,
      ease: "expo.out",
      paused: true,
      immediateRender: false,
      overwrite: "auto",
    });

    // build timelines
    this.showAnimation = this.buildShowTl();
    this.hideAnimation = this.buildHideTl();

    // small settle if you need it for assets; keep your original delay
    setTimeout(() => {
      this.setInitialState();
      this.bannerController();
    }, 3000);
  }

  private setInitialState() {
    // prevent flash and set base shape
    gsap.set(this.component, { display: "block" });
    gsap.set(this.baseState, { morphSVG: this.baseD, immediateRender: false });
    // ensure the shared tween is snapped to the base on init
    if (this.morphTween) {
      this.morphTween.progress(0).pause(0);
    }

    // if/when you animate these later, start hidden via autoAlpha instead of display:none
    gsap.set([this.bannerText, this.bannerButton], { autoAlpha: 0 });
  }

  private bannerController() {
    ScrollTrigger.create({
      trigger: this.scrollSections[0],
      start: "10% top",
      end: "10% top",
      markers: true,
      invalidateOnRefresh: true,

      // Scroll DOWN across start => hide
      onEnter: () => {
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
      },

      // Scroll UP back across start => show
      onEnterBack: () => {
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
      },

      // Decide initial state once; thereafter only snap (no animation) on refresh
      onRefresh: (self) => {
        const pastStart = self.scroll() >= self.start;

        // stop both UI timelines before snapping/playing
        this.showAnimation.pause(0);
        this.hideAnimation.pause(0);

        if (!this.initDone) {
          if (pastStart) {
            // loaded past trigger: snap hidden
            this.morphTween.progress(0).pause(0); // base shape
            this.hideAnimation.progress(1).pause(0);
            this.showAnimation.progress(0).pause(0);
            this.isHidden = true;
          } else {
            // loaded before trigger: play reveal once
            this.morphTween.progress(0).pause(0);
            this.morphTween.play(0);
            this.showAnimation.restart(true);
            this.isHidden = false;
          }
          this.initDone = true;
          return;
        }

        // subsequent refreshes: snap morph and UI to correct state (no animation here)
        if (pastStart) {
          this.morphTween.progress(0).pause(0); // base (hidden)
          this.hideAnimation.progress(1).pause(0);
          this.showAnimation.progress(0).pause(0);
          this.isHidden = true;
        } else {
          this.morphTween.progress(1).pause(0); // shown
          this.showAnimation.progress(1).pause(0);
          this.hideAnimation.progress(0).pause(0);
          this.isHidden = false;
        }
      },
    });
  }

  private buildShowTl() {
    const tl = gsap.timeline({
      paused: true,
      defaults: { overwrite: "auto", ease: "power2.out" },
    });

    // text/button reveal could go here if used later
    // tl.fromTo(this.splitText.words, { y: "3rem", autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.05 }, 0.2);
    // tl.fromTo(this.bannerButton, { y: "3rem", autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8 }, 0.5);

    return tl;
  }

  private buildHideTl() {
    const tl = gsap.timeline({
      paused: true,
      defaults: { overwrite: "auto", ease: "expo.out" },
    });

    // text/button hide could go here if used later
    // tl.to(this.splitText.words, { autoAlpha: 0, duration: 0.5 }, 0);
    // tl.to(this.bannerButton, { y: "-3rem", autoAlpha: 0, duration: 0.5 }, 0);

    return tl;
  }
}

export const banner = () => {
  new Banner();
};
export default banner;
