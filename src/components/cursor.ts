// eslint-disable-next-line simple-import-sort/imports
import {
  cursorIconRevealIn,
  cursorIconRevealOut,
  cursorRevealIn,
  cursorRevealOut,
} from "$motion/cursorMotion";
import { getDeviceType } from "$utils/getDevice";
import { getVideoState } from "./videoPlayer";
import { gsap } from "gsap";

export const cursor = () => {
  class Cursor {
    private cursor: HTMLElement;
    private currentArea: HTMLElement | null = null;

    constructor() {
      this.cursor = document.querySelector(".cursor_component") as HTMLElement;
      this.initCursor();
      this.initHoverEvents();
    }

    private initCursor() {
      const device = getDeviceType();
      if (device === "tablet" || device === "mobile") {
        gsap.set(this.cursor, { display: "none" });
        return;
      }

      gsap.set(this.cursor, { xPercent: -50, yPercent: -50 });
      gsap.fromTo(this.cursor, { opacity: 0 }, { delay: 3, opacity: 1 });

      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const mouse = { x: pos.x, y: pos.y };
      const speed = 0.2;

      const xSet = gsap.quickSetter(this.cursor, "x", "px");
      const ySet = gsap.quickSetter(this.cursor, "y", "px");

      window.addEventListener("mousemove", (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      gsap.ticker.add(() => {
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
      });
    }

    private initHoverEvents() {
      // Use event delegation so dynamically-added elements work without a manual refresh
      const onEnter = (area: HTMLElement) => {
        const scale = Number(area.dataset.hoverScale || 1);
        const iconType = area.dataset.hoverIcon as string | undefined;
        cursorRevealIn(scale);
        if (iconType !== undefined) {
          const areaIcon = this.getAreaIcon(iconType) as HTMLElement;
          cursorIconRevealIn(areaIcon);
        }
      };

      const onLeave = (area: HTMLElement) => {
        const iconType = area.dataset.hoverIcon as string | undefined;
        cursorRevealOut();
        if (iconType !== undefined) {
          const areaIcon = this.getAreaIcon(iconType) as HTMLElement;
          cursorIconRevealOut(areaIcon);
        }
      };

      // Track pointer entering/leaving any element that matches [data-hover-scale]
      document.addEventListener("pointerover", (e) => {
        const target = (e.target as Element | null)?.closest(
          "[data-hover-scale]"
        ) as HTMLElement | null;
        if (!target) return;
        if (this.currentArea === target) return; // already active on this target
        if (this.currentArea && this.currentArea.contains(target)) return; // moving inside the same area

        if (this.currentArea) {
          onLeave(this.currentArea);
        }

        this.currentArea = target;
        onEnter(target);
      });

      document.addEventListener("pointerout", (e) => {
        if (!this.currentArea) return;
        const toEl = e.relatedTarget as Node | null;
        // If the new element is outside the current area, trigger leave
        if (!toEl || !this.currentArea.contains(toEl)) {
          onLeave(this.currentArea);
          this.currentArea = null;
        }
      });
    }

    private getAreaIcon(type: string) {
      const cursorImages = [...document.querySelectorAll(".cursor_image")];
      let returnIcon;
      if (type === "arrow") {
        returnIcon = cursorImages[0] as HTMLElement;
      }
      if (type === "media") {
        const isPaused = getVideoState();
        if (isPaused) {
          returnIcon = cursorImages[2] as HTMLElement;
        } else {
          returnIcon = cursorImages[1] as HTMLElement;
        }
      }
      if (type === "drag") {
        returnIcon = cursorImages[3] as HTMLElement;
      }
      if (type === "expand") {
        returnIcon = cursorImages[4] as HTMLElement;
      }
      return returnIcon;
    }
  }

  new Cursor();
};

export default cursor;
