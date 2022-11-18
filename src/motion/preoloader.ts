import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

import { querySelectorToArray } from '$utils/querySelectorToArray';

gsap.registerPlugin(MorphSVGPlugin);

export const preloader = () => {
  setTimeout(() => {
    const svgWrapper = document.querySelector('.preloader_svg');
    const kGraphics = querySelectorToArray('.k-graphic');
    const hGraphics = querySelectorToArray('.h-graphic');
    const kPathPoints = [...kGraphics].slice(1).map((e) => {
      return e.getAttribute('d');
    });
    const hPathPoints = [...hGraphics].slice(1).map((e) => {
      return e.getAttribute('d');
    });
    const kBase = kGraphics[0] as HTMLElement;
    const hBase = hGraphics[0] as HTMLElement;

    const preloaderTL = gsap.timeline();

    for (let i = 0; i <= kPathPoints.length - 1; i++) {
      const kTemp = kPathPoints[i] as gsap.SVGPathValue;
      const hTemp = hPathPoints[i] as gsap.SVGPathValue;

      preloaderTL.to(kBase, { duration: 0.8, morphSVG: kTemp, ease: 'expo.inOut' });
      preloaderTL.to(hBase, { duration: 0.8, morphSVG: hTemp, ease: 'expo.inOut' }, '-=0.8');
    }
  }, 500);
};
