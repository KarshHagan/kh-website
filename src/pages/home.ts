import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { preloader } from '$motion/preoloader';
import { querySelectorToArray } from '$utils/querySelectorToArray';

gsap.registerPlugin(ScrollTrigger);

export const home = () => {
  //----------------------
  // Page Globals
  //----------------------

  //----------------------
  // Preloader
  //----------------------

  console.log('test');

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
  console.log(bgParent);
  const bgTextItems = querySelectorToArray('.bg-text_track-item');
  console.log(bgTextItems);
  // const bgImage = document.querySelector('.home-hero_bg-mask');
  // const bgInnerText = bgContainer.children[1] as HTMLElement;
  // console.log(bgImage, bgInnerText);

  const heroScrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: heroParent,
      start: 'top top',
      end: '50% top',
      toggleActions: 'play none none reverse',
      scrub: 1,
      markers: true,
    },
  });

  heroScrollTL.to(bgParent, {
    width: '60%',
    height: '85%',
    borderRadius: '2rem',
    duration: 1,
  });
  // heroScrollTL.to(bgInnerText, { opacity: 1, ease: 'power4.out', delay: 4 });
};
