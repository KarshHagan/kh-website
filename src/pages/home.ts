import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { heroTextMotion } from '$motion/heroTextMotion';
import { preloader } from '$motion/preoloader';
import { querySelectorToArray } from '$utils/querySelectorToArray';

gsap.registerPlugin(ScrollTrigger);

export const home = () => {
  //----------------------
  // Page Globals
  //----------------------

  // test

  //----------------------
  // Preloader
  //----------------------

  // Get svg data
  //----------------------
  const svgEmbed = document.querySelector('.preloader_graphic-embed') as HTMLImageElement;
  const svgData = svgEmbed.src;
  const testCanvas = document.querySelector('.preloader_svg') as HTMLEmbedElement;

  function loadfile(file: string) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        testCanvas.innerHTML = xhttp.responseText;
      }
    };

    xhttp.open('GET', file, true);
    xhttp.send();
  }

  loadfile(svgData);

  // run preloader
  //----------------------
  preloader();

  //----------------------
  // Hero Section
  //----------------------
  const heroParent = document.querySelector('.section_home-hero');
  const bgParent = document.querySelector('.home-hero_bg-track') as HTMLElement;

  const bgTextItems = querySelectorToArray('.bg-text_track-item');
  const bgImageTextWrap = document.querySelector('.home-hero_inner-text');

  // animate bg and image text
  heroTextMotion(bgTextItems);

  const heroImageTL = gsap.timeline({
    scrollTrigger: {
      trigger: heroParent,
      start: 'top top',
      end: '50% top',
      toggleActions: 'play none none reverse',
      scrub: 1,
      // markers: true,
    },
  });

  heroImageTL.to(bgParent, {
    width: '50%',
    height: '85%',
    borderRadius: '2rem',
    duration: 1,
  });

  const heroTextTL = gsap.timeline({
    scrollTrigger: {
      trigger: '.home-hero_scrolled',
      start: '40% 50%',
      end: '50% 50%',
      toggleActions: 'play none none reverse',
      scrub: 1,
      // markers: true,
    },
  });

  heroTextTL.to(bgImageTextWrap, { opacity: 1, ease: 'power4.out' });
};
