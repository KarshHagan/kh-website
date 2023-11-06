// eslint-disable-next-line simple-import-sort/imports
import { getSVGPathData } from '$components/morphSVG';
import { getDeviceType } from '$utils/getDevice';
import { cloneNode } from '@finsweet/ts-utils';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin([SplitText, ScrollToPlugin, ScrollTrigger]);
gsap.registerPlugin(MorphSVGPlugin);

const device = getDeviceType();

//  Main scroll effect
export const servicesScrollEffect = () => {
  const sectionBG = document.querySelector('.section_services');
  const docStyle = getComputedStyle(document.documentElement);
  let colorMode = 'false';
  const colorPalette = [
    docStyle.getPropertyValue('--brand-red'),
    docStyle.getPropertyValue('--dark-orange'),
    docStyle.getPropertyValue('--orange'),
    docStyle.getPropertyValue('--brand-blue'),
    docStyle.getPropertyValue('--brand-green'),
    docStyle.getPropertyValue('--dark-blue'),
    docStyle.getPropertyValue('--dark-green'),
  ];
  const colorCombos = [
    [
      docStyle.getPropertyValue('--paper-light'),
      docStyle.getPropertyValue('--brand-red'),
      docStyle.getPropertyValue('--paper-light'),
    ],
    [
      docStyle.getPropertyValue('--brand-red'),
      docStyle.getPropertyValue('--paper-light'),
      docStyle.getPropertyValue('--dark'),
    ],
    [
      docStyle.getPropertyValue('--orange'),
      docStyle.getPropertyValue('--paper-light'),
      docStyle.getPropertyValue('--dark'),
    ],
    [
      docStyle.getPropertyValue('--brand-green'),
      docStyle.getPropertyValue('--paper-light'),
      docStyle.getPropertyValue('--dark'),
    ],
  ];

  if (device === 'mobile') {
    if (window.innerWidth > window.innerHeight) {
      const servicesWrapper = document.querySelector('.services_wrapper') as HTMLElement;
      const sectionHeaders = [...servicesWrapper.querySelectorAll('h2')];

      for (const i in sectionHeaders) {
        const temp = sectionHeaders[i] as HTMLElement;
        temp.style.fontSize = '4rem';
      }
    }
  }

  // Split service headers
  const splitMain = generateSplitText();
  const splitItems = splitMain[0];
  const splitHeaders = splitItems[0] as SplitText[];
  const splitOvers = splitItems[1] as SplitText[];
  const parentOvers = splitMain[1] as HTMLElement[];

  // Initializers
  setupMarkers();
  // setupSections();
  if (device === 'desktop') {
    infoHover();
  }

  // SVG Morph
  setTimeout(() => {
    scrollProgress();
    scrollSVG();

    // Service Scroll Main
    const sItems = [...document.querySelectorAll('.services_item')];
    const sMarkers = [...document.querySelectorAll('.services_scroll-spacer')].filter(
      (e) => !e.classList.contains('hide')
    );

    //skip first loop
    for (let i = 1; i < sMarkers.length; i++) {
      const curMarker = sMarkers[i] as HTMLElement;

      // OUT SECTION
      const outSection = sItems[i - 1] as HTMLElement;
      const outContent = outSection.querySelector('.services_info-main') as HTMLElement;
      const outHeader = splitHeaders[i - 1];
      const outSpan = outContent.querySelector('.span');
      const outOverview = splitOvers[i - 1];
      const outButton = outContent.querySelector('a');
      const outInfoParent = outContent.querySelector('.services_info-grid');
      const outInfo = [...outContent.querySelectorAll('li')];
      // // IN SECTION
      const inSection = sItems[i] as HTMLElement;
      const inContent = inSection.querySelector('.services_info-main') as HTMLElement;
      const inHeader = splitHeaders[i];
      const inSpan = inContent.querySelector('.span');
      const inOverview = splitOvers[i];
      const inButton = inContent.querySelector('a');
      const inInfoParent = inContent.querySelector('.services_info-grid');
      const inInfo = [...inContent.querySelectorAll('li')];
      // const inBolt = inContent.querySelector('.services-info_float-image') as HTMLElement;
      // const inBoltPath = inBolt.querySelector('path');

      const st = gsap.timeline({
        scrollTrigger: {
          trigger: curMarker,
          start: 'top 20%',
          end: 'top bottom',
          toggleActions: 'play complete none reverse',
          markers: true,
          preventOverlaps: true,
        },
      });

      // OUT ANIMATION
      st.to(outHeader.lines, {
        duration: 1,
        y: '-100%',
        skewX: '15deg',
        skewY: '-4deg',
        perspective: 400,
        opacity: 0,
        stagger: 0.1,
        ease: 'power4.inOut',
      });
      st.to(outSpan, { duration: 1, x: '100%', ease: 'power4.inOut' }, '<');
      st.to(
        outOverview.lines,
        { duration: 1, y: '-100%', stagger: 0.1, ease: 'power4.inOut' },
        '<'
      );
      st.to(outButton, { duration: 1, y: '-100%', opacity: 0, ease: 'power4.inOut' }, '<');
      st.to(
        outInfo,
        { duration: 1, y: '-2rem', opacity: 0, stagger: 0.1, ease: 'power4.inOut' },
        '<'
      );
      // if (colorMode === 'true') {
      //   st.to(
      //     sectionBG,
      //     { duration: 1, backgroundColor: colorCombos[i - 1][0], ease: 'power4.inOut' },
      //     '<'
      //   );
      //   st.to(outContent, { color: colorCombos[i - 1][1], ease: 'power4.inOut' }, '<');
      // }
      st.to(outInfoParent, { duration: 1, opacity: 0, ease: 'power4.inOut' }, '<0.2');

      // IN ANIMATION
      st.to(inSection, { duration: 0, display: 'flex' }, '<');
      st.from(
        inHeader.lines,
        {
          duration: 1,
          y: '100%',
          skewX: '-15deg',
          skewY: '4deg',
          perspective: 400,
          opacity: 0,
          stagger: 0.1,
          ease: 'power4.inOut',
        },
        '<0.6'
      );
      st.from(inSpan, { duration: 1, x: '-100%', ease: 'power4.inOut' }, '<');
      st.from(
        inOverview.lines,
        { duration: 1, y: '100%', stagger: 0.1, ease: 'power4.inOut' },
        '<'
      );
      st.from(inButton, { duration: 1, y: '100%', opacity: 0, ease: 'power4.inOut' }, '<');
      st.from(
        inInfo,
        { duration: 1, y: '2rem', opacity: 0, stagger: 0.1, ease: 'power4.inOut' },
        '<'
      );
      // if (colorMode === 'true') {
      //   st.to(inSeperator, { backgroundColor: colorCombos[i][1], ease: 'power4.inOut' }, '<');
      //   st.to(
      //     sectionBG,
      //     { duration: 1, backgroundColor: colorCombos[i][0], ease: 'power4.inOut' },
      //     '<'
      //   );
      //   st.to(inContent, { color: colorCombos[i][1] }, '<');
      //   st.to(inBoltPath, { fill: colorCombos[i][1] }, '<');
      //   st.to([inButton, inSpan], { backgroundColor: colorCombos[i][1] }, '<');
      //   st.to(inButton, { color: colorCombos[i][2] }, '<');
      // }
      st.from(inInfoParent, { duration: 1, opacity: 0, ease: 'power4.inOut' }, '<0.2');
      st.set(outSection, { display: 'none' });
    }
  }, 500);

  // HELPERS
  // -------
  function setupMarkers() {
    const sWrapper = document.querySelector('.services_wrapper') as HTMLElement;
    const sItems = [...document.querySelectorAll('.services_item')];
    const markerWrapper = document.querySelector('.services_scroll-spacers') as HTMLElement;
    const markerTemplate = document.querySelector('.services_scroll-spacer') as HTMLElement;

    sWrapper.style.height = String(sWrapper.dataset.nativeSize);
    markerWrapper.style.top = String('-' + sWrapper.dataset.nativeSize);
    colorMode = String(sWrapper.dataset.colorMode);

    // Setup Scroll Marker Conatiners
    for (let i = 0; i < sItems.length; i++) {
      const item = sItems[i] as HTMLElement;
      item.style.position = 'absolute';

      const newMarker = cloneNode(markerTemplate);
      newMarker.classList.remove('hide');
      markerWrapper.appendChild(newMarker);

      // newMarker.style.backgroundColor =
      //   '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0');
      // newMarker.classList.add('mbm-ex');
    }

    // Mobile Lanscape optimizations
    if (device === 'mobile') {
      const servicesWrapper = document.querySelector('.services_wrapper') as HTMLElement;
      const graphicWrap = document.querySelector('.services_graphic-wrap') as HTMLElement;
      const sectionInfo = [...document.querySelectorAll('.services_info-cursor-wrap')];

      if (window.innerWidth > window.innerHeight) {
        servicesWrapper.style.height = '100vh';
        graphicWrap.style.position = 'absolute';
        graphicWrap.style.bottom = '1rem';
        graphicWrap.style.justifyContent = 'flex-end';
        graphicWrap.style.alignItems = 'flex-end';

        for (const i in sectionInfo) {
          const temp = sectionInfo[i] as HTMLElement;
          temp.style.display = 'none';
        }
      }
    }
  }

  function generateSplitText() {
    const headerParent = [...document.querySelectorAll('.services-info_wrap')];

    const splitHeaders = [];
    const splitOvers = [];
    const parentOvers = [];

    for (const i in headerParent) {
      const temp = headerParent[i] as HTMLElement;
      const tempHeader = temp.querySelector('h2');
      const tempOver = temp.querySelector('p') as HTMLElement;
      gsap.set(tempHeader, { perspective: 100 });
      const gSplit = new SplitText(tempHeader, { linesClass: 'lineChild' });
      const gSplitParent = new SplitText(tempHeader, {
        type: 'lines',
        linesClass: 'split-text_parent',
      });
      const oSplit = new SplitText(tempOver, { linesClass: 'lineChild' });
      const oSplitParent = new SplitText(tempOver, {
        type: 'lines',
        linesClass: 'lines-parent',
      });
      splitHeaders.push(gSplit);
      splitOvers.push(oSplit);
      parentOvers.push(tempOver);
    }
    const final = [[splitHeaders, splitOvers], parentOvers];
    return final;
  }

  function infoHover() {
    const infoAreas = [...document.querySelectorAll('.services_info-cursor-wrap')];

    for (const i in infoAreas) {
      const temp = infoAreas[i] as HTMLElement;
      const bounds = temp.getBoundingClientRect();
      const tempBolt = temp.querySelector('.services-info_float-image') as HTMLElement;
      const boltFill = tempBolt.querySelector('.bolt');
      const cursorRange = bounds.bottom - bounds.top;
      const paletteRange = colorPalette.length;
      const segmentRange = Math.floor(cursorRange / paletteRange);

      temp.addEventListener('mousemove', (e) => {
        const bounds = temp.getBoundingClientRect();
        const cursorY = e.clientY - bounds.top;

        gsap.to(tempBolt, { y: cursorY, ease: 'power2.out' });

        if (cursorY <= segmentRange) {
          gsap.to(boltFill, { fill: colorPalette[0], ease: 'power2.out' });
        } else if (cursorY > segmentRange && cursorY <= segmentRange * 2) {
          gsap.to(boltFill, { fill: colorPalette[1], ease: 'power2.out' });
        } else if (cursorY > segmentRange * 2 && cursorY <= segmentRange * 3) {
          gsap.to(boltFill, { fill: colorPalette[2], ease: 'power2.out' });
        } else if (cursorY > segmentRange * 3 && cursorY <= segmentRange * 4) {
          gsap.to(boltFill, { fill: colorPalette[3], ease: 'power2.out' });
        } else if (cursorY > segmentRange * 4 && cursorY <= segmentRange * 5) {
          gsap.to(boltFill, { fill: colorPalette[4], ease: 'power2.out' });
        } else if (cursorY > segmentRange * 5 && cursorY <= segmentRange * 6) {
          gsap.to(boltFill, { fill: colorPalette[5], ease: 'power2.out' });
        } else if (cursorY > segmentRange * 6 && cursorY <= segmentRange * 7) {
          gsap.to(boltFill, { fill: colorPalette[6], ease: 'power2.out' });
        }
      });

      temp.addEventListener('mouseenter', () => {
        gsap.to(tempBolt, { scale: 1.5 });
      });
      temp.addEventListener('mouseleave', () => {
        gsap.to(tempBolt, { scale: 1 });
        gsap.to(boltFill, { fill: colorPalette[0], ease: 'power2.out' });
      });
    }
  }

  function scrollSVG() {
    const svgData = getSVGPathData();
    const kBase = svgData[0] as HTMLElement;
    const kPoints = svgData[1] as gsap.SVGPathValue[];
    const hBase = svgData[2] as HTMLElement;
    const hPoints = svgData[3] as gsap.SVGPathValue[];

    const sMarkers = [...document.querySelectorAll('.services_scroll-spacer')].filter(
      (e) => !e.classList.contains('hide')
    );

    sMarkers.forEach((marker, i) => {
      const isFirst = i === 0;

      if (!isFirst) {
        const inGraphicKPoints = kPoints[i];
        const inGraphicHPoints = hPoints[i];

        const st = gsap.timeline({
          scrollTrigger: {
            trigger: marker,
            start: 'top 20%',
            end: 'top 20%',
            // markers: true,
            toggleActions: 'play none none reverse',
            preventOverlaps: true,
          },
        });
        st.to(kBase, {
          duration: 1,
          morphSVG: { shape: inGraphicKPoints, type: 'rotational' },
          ease: 'power4.inOut',
        });
        st.to(
          hBase,
          {
            duration: 1,
            morphSVG: { shape: inGraphicHPoints, type: 'rotational' },
            ease: 'power4.inOut',
          },
          '<'
        );
      }
    });
  }

  function scrollProgress() {
    const sMarkers = [...document.querySelectorAll('.services_scroll-spacer')].filter(
      (e) => !e.classList.contains('hide')
    );
    const sSpans = [...document.querySelectorAll('.services-info_span-wrap')];

    sSpans.forEach((span, i) => {
      const isFirst = i === 0;

      if (!isFirst) {
        gsap.set(span, { opacity: 0 });
      }
    });

    sMarkers.forEach((marker, i) => {
      const isLast = i === sMarkers.length - 1;

      const st = gsap.timeline({
        scrollTrigger: {
          trigger: marker,
          start: 'bottom bottom',
          end: 'bottom 20%',
          scrub: 1,
          // markers: true,
          onLeave: () => {
            if (!isLast) {
              const tl = gsap.timeline();
              tl.to(sSpans[i].children[0], {
                delay: 0.2,
                duration: 1,
                y: st.progress() + 100 + '%',
              });
              tl.to(sSpans[i], { duration: 0.2, opacity: 0 });
              tl.to(sSpans[i + 1], { duration: 0.2, opacity: 1 }, '<');
            }
          },
          onEnterBack: () => {
            if (!isLast) {
              const tl = gsap.timeline();
              tl.to(sSpans[i], { duration: 0.2, opacity: 1 });
              tl.to(sSpans[i + 1], { duration: 0.2, opacity: 0 }, '<');
            }
          },
        },
      });
      st.to(sSpans[i].children[0], { y: st.progress() + '%', ease: 'linear' });
    });
  }
};

// Scroll To Section
export const scrollToServices = () => {
  const serviceLinks = [...document.querySelectorAll('.services_link-item')];
  const sMarkers = [...document.querySelectorAll('.services_scroll-spacer')].filter((e) => {
    if (!e.classList.contains('hide')) {
      return e;
    }
  });

  for (const i in sMarkers) {
    const tMarker = sMarkers[i] as HTMLElement;
    const tLink = serviceLinks[i] as HTMLElement;

    const tag = tLink.children[0].innerHTML.split(' ')[0];
    tMarker.id = tag;
  }

  for (let i = 0; i < serviceLinks.length; i++) {
    const tempLink = serviceLinks[i] as HTMLElement;
    const matchTag = tempLink.children[0].innerHTML.split(' ')[0];
    tempLink.addEventListener('click', () => {
      gsap.to(window, {
        duration: 0.2,
        scrollTo: { y: '#' + matchTag },
        ease: 'power4.out',
      });
    });
  }
};
