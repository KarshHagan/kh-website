// eslint-disable-next-line simple-import-sort/imports
import { getDeviceType } from "$utils/getDevice";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

// -----------------
// Reveal Animations
// -----------------

// Reveal global properties
let scrollTriggerStart = "top 75%";
let scrollTriggerEnd = "top 75%";
let setDelay = 0;

const device = getDeviceType();

if (device === "tablet" || device === "mobile") {
  scrollTriggerStart = "top 90%";
  scrollTriggerEnd = "top 90%";
  setDelay = 1.5;
}
// Page Reveal
export const csPageReveal = () => {
  const fixedHeaderSection = document.querySelector(
    ".section_sticky-header",
  ) as HTMLElement;
  const featuredSection = document.querySelector(
    ".section_case-hero",
  ) as HTMLElement;

  const headerTitle = fixedHeaderSection.querySelector("h1");
  const headerSplit = new SplitText(headerTitle, {
    type: "lines",
    linesClass: "lineChild",
  });
  const textSplitParent = new SplitText(headerTitle, {
    type: "lines",
    linesClass: "split-text_parent",
  });
  const headerOverview = fixedHeaderSection.querySelector("p");
  const headerTexture = document.querySelector(".case-hero_texture");

  const overline = featuredSection.querySelector(".fixed-header_overline");
  const featuredContent = featuredSection.querySelector(
    ".case-hero_featured-wrap",
  );

  const animation = gsap.timeline({
    onComplete: () => {
      textSplitParent.revert();
      headerSplit.revert();
    },
  });
  animation.from(headerSplit.lines, {
    delay: 1,
    duration: 1,
    y: "4rem",
    opacity: 0,
    stagger: 0.1,
    ease: "power4.out",
  });
  animation.from(
    overline,
    { duration: 1, width: "0%", ease: "expo.inOut" },
    "<",
  );
  animation.from(
    headerOverview,
    { duration: 1, opacity: 0, y: "1rem", ease: "power4.inOut" },
    "<",
  );
  animation.from(
    featuredContent,
    { duration: 1, opacity: 0, y: "2rem", ease: "power4.out" },
    "<0.6",
  );
  animation.from(headerTexture, { opacity: 0, ease: "power4.out" });
};

// Overview Reveal
export const csOverviewReveal = () => {
  const overviewSection = document.querySelector(
    ".section_case-overview",
  ) as HTMLElement;
  const overviewTitle = document.querySelector("h2");
  const overviewRichText = overviewSection.querySelector(
    ".rich-text",
  ) as HTMLElement;

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: overviewSection,
      start: scrollTriggerStart,
      end: scrollTriggerEnd,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
    // delay: setDelay,
  });

  animation.from(overviewTitle, {
    duration: 1,
    y: "2rem",
    opacity: 0,
    stagger: 0.1,
    ease: "power4.inOut",
  });

  animation.from(
    overviewRichText,
    { duration: 1, y: "2rem", opacity: 0, ease: "power4.inOut" },
    "<",
  );
};

// Image Slider Reveal
export const csMediaSliderReveal = () => {
  const sliderSection = document.querySelector(
    ".section_media-large-overlay",
  ) as HTMLElement;
  if (sliderSection) {
    const revealContainer = sliderSection.querySelector(
      ".media-slider_reveal-wrap",
    );
    const mediaControls = [
      ...sliderSection.querySelectorAll(".media-slider_button"),
    ];

    gsap.set(revealContainer, { y: 0 });
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: sliderSection,
        start: scrollTriggerStart,
        end: scrollTriggerEnd,
        // markers: true,
        // toggleActions: 'play none none reverse',
      },
    });
    animation.to(revealContainer, {
      duration: 1,
      y: "-100%",
      ease: "power4.inOut",
    });
    animation.from(
      mediaControls,
      { duration: 1, y: "2rem", opacity: 0, ease: "power4.inOut" },
      "<",
    );
  }
};

// Stats Section Reveal
export const csStatsReveal = () => {
  const statsSection = document.querySelector(
    ".section_case-stats",
  ) as HTMLElement;
  const statsComponent = statsSection.querySelector(".case-overview_component");

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: statsSection,
      start: scrollTriggerStart,
      end: scrollTriggerEnd,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
  });
  animation.from(statsComponent, {
    duration: 1,
    y: "2rem",
    opacity: 0,
    ease: "power4.inOut",
  });
};
