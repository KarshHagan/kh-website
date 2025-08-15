import { gsap } from "gsap";

export const filterReveal = (elements: Element[]) => {
  const windowWidth = window.innerWidth;

  const animation = gsap.timeline();

  if (windowWidth > 767) {
    animation.set(elements, { y: "16px", display: "block", opacity: 0 });
    animation.to(elements, {
      duration: 1,
      y: "0px",
      opacity: 1,
      stagger: 0.1,
      ease: "expo.inOut",
    });
  } else {
    animation.set(elements, { y: "16px", display: "block", opacity: 0 });
    animation.to(elements, {
      duration: 1,
      y: "0px",
      opacity: 1,
      ease: "expo.inOut",
    });
  }
};
