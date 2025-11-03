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

    setTimeout(() => {
      this.bannerController();
    }, 3000);
  }

  private bannerController() {
    this.showBanner();

    new ScrollTrigger({
      trigger: this.scrollSections[0],
      start: "10% top",
      end: "10% top",
      // markers: true,
      toggleActions: "play none none reverse",
      onEnter: () => {
        this.hideBanner();
      },

      onEnterBack: () => {
        this.showBanner();
      },
    });
  }

  private showBanner() {
    const tl = gsap.timeline();
    tl.set(this.component, { display: "block" });
    tl.fromTo(
      this.baseState,
      { morphSVG: this.baseState },
      { duration: 1, morphSVG: this.morphState, ease: "expo.out" }
    );
    tl.fromTo(
      this.splitText.words,
      { y: "3rem", opacity: 0 },
      { duration: 0.8, opacity: 1, y: 0, stagger: 0.05, ease: "power2.out" },
      "<0.2"
    );
    tl.fromTo(
      this.bannerButton,
      { y: "3rem", opacity: 0 },
      { duration: 0.8, opacity: 1, y: 0, stagger: 0.05, ease: "power2.out" },
      "<0.5"
    );
  }

  private hideBanner() {
    const tl = gsap.timeline();
    tl.to(this.splitText.words, {
      duration: 0.5,
      // y: '-3rem',
      opacity: 0,
      // stagger: 0.05,
      ease: "expo.out",
    });
    tl.to(
      this.bannerButton,
      {
        duration: 0.5,
        y: "-3rem",
        opacity: 0,
        stagger: 0.05,
        ease: "expo.out",
      },
      "<"
    );
    tl.to(
      this.baseState,
      { duration: 1, morphSVG: this.baseState, ease: "expo.out" },
      "<0.1"
    );
  }
}

export const banner = () => {
  new Banner();
};
export default banner;
