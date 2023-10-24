// eslint-disable-next-line simple-import-sort/imports
import { getDeviceType } from '$utils/getDevice';
import { cloneNode } from '@finsweet/ts-utils';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin([SplitText, ScrollToPlugin]);
gsap.registerPlugin(MorphSVGPlugin);

// Reveal global properties
let scrollTriggerStart = 'top 70%';
let scrollTriggerEnd = 'top 70%';

const device = getDeviceType();

if (device === 'tablet' || device === 'mobile') {
  scrollTriggerStart = 'top 80%';
  scrollTriggerEnd = 'top 80%';
}

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
    docStyle.getPropertyValue('----dark-green'),
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

  // Split service headers
  const splitMain = generateSplitText();
  const splitItems = splitMain[0];
  const splitHeaders = splitItems[0] as SplitText[];
  const splitOvers = splitItems[1] as SplitText[];
  const parentOvers = splitMain[1] as HTMLElement[];

  // Initializers
  setup();
  infoHover();

  // SVG Morph
  setTimeout(() => {
    const svgEmbed = document.querySelector('.services_graphic-embed') as HTMLElement;
    const kGraphics = [...svgEmbed.querySelectorAll('.k-graphic')];
    const hGraphics = [...svgEmbed.querySelectorAll('.h-graphic')];

    const kPathPoints = [...kGraphics].slice(0).map((e) => {
      return e.getAttribute('d') as gsap.SVGPathValue;
    });
    const hPathPoints = [...hGraphics].slice(0).map((e) => {
      return e.getAttribute('d') as gsap.SVGPathValue;
    });

    const kBase = kGraphics[0] as HTMLElement;
    const hBase = hGraphics[0] as HTMLElement;

    // console.log('SVG MORPH', svgEmbed, kPathPoints);

    // Service Scroll Main
    const sItems = [...document.querySelectorAll('.services_item')];
    const sMarkers = [...document.querySelectorAll('.services_scroll-spacer')].filter((e) => {
      if (!e.classList.contains('hide')) {
        return e;
      }
    });
    const bottomGraphics = [...document.querySelectorAll('.services_bottom-image')];

    //skip first loop
    for (let i = 1; i < sMarkers.length; i++) {
      const curMarker = sMarkers[i] as HTMLElement;

      // OUT SECTION
      const outSection = sItems[i - 1] as HTMLElement;
      const outContent = outSection.querySelector('.services_info-main') as HTMLElement;
      const outHeader = splitHeaders[i - 1];
      const outSpan = outContent.querySelector('.span');
      const outOverview = splitOvers[i - 1];
      const outOverParent = parentOvers[i - 1];
      const outButton = outContent.querySelector('a');
      const outInfoParent = outContent.querySelector('.services_info-grid');
      const outInfo = [...outContent.querySelectorAll('li')];
      const outSeperator = outContent.querySelector('.span.is-vertical');
      const outGraphicKPoints = kPathPoints[i - 1];
      const outBottomGraphic = bottomGraphics[i - 1];
      // IN SECTION
      const inSection = sItems[i] as HTMLElement;
      const inContent = inSection.querySelector('.services_info-main') as HTMLElement;
      const inHeader = splitHeaders[i];
      const inSpan = inContent.querySelector('.span');
      const inOverview = splitOvers[i];
      const inOverParent = parentOvers[i];
      const inButton = inContent.querySelector('a');
      const inInfoParent = inContent.querySelector('.services_info-grid');
      const inInfo = [...inContent.querySelectorAll('li')];
      const inSeperator = inContent.querySelector('.span.is-vertical');
      const inBolt = inContent.querySelector('.services-info_float-image') as HTMLElement;
      const inBoltPath = inBolt.querySelector('path');
      const inGraphicKPoints = kPathPoints[i];
      const inGraphicHPoints = hPathPoints[i];
      const inBottomGraphic = bottomGraphics[i];

      gsap.set(sItems[i], { display: 'none' });

      // console.log('POINTS', kPathPoints, inGraphicKPoints);

      const st = gsap.timeline({
        scrollTrigger: {
          trigger: curMarker,
          start: 'top 20%',
          end: 'top bottom',
          preventOverlaps: true,
          markers: true,
          // scrub: 1,
          toggleActions: 'play none none reverse',
        },
      });

      // OUT ANIMATION
      st.to(outHeader.lines, {
        // duration: 1,
        y: '-100%',
        rotateZ: '-5deg',
        opacity: 0,
        stagger: 0.1,
        ease: 'power4.inOut',
      });
      st.to(outSpan, { duration: 1, width: '0%', ease: 'power4.inOut' }, '<');
      st.to(outOverParent, { duration: 1, y: '-2rem', ease: 'power2.inOut' }, '<');
      st.to(
        outOverview.lines,
        { duration: 1, y: '-100%', stagger: 0.1, ease: 'power2.inOut' },
        '<'
      );
      st.to(outButton, { duration: 1, y: '-2rem', opacity: 0, ease: 'power2.inOut' }, '<');
      st.to(
        outSeperator,
        { duration: 1, height: '0%', backgroundColor: colorCombos[i - 1][1], ease: 'power4.inOut' },
        '<'
      );
      st.to(
        outInfo,
        { duration: 1, y: '-2rem', opacity: 0, stagger: 0.1, ease: 'power4.inOut' },
        '<'
      );
      if (colorMode === 'true') {
        st.to(
          sectionBG,
          { duration: 1, backgroundColor: colorCombos[i - 1][0], ease: 'power4.out' },
          '<'
        );
        st.to(outContent, { color: colorCombos[i - 1][1], ease: 'power4.inOut' }, '<');
      }

      st.to(outBottomGraphic, { duration: 1, y: '-100%', opacity: 0, ease: 'expo.out' }, '<');
      st.to(outInfoParent, { duration: 1, opacity: 0, ease: 'power4.inOut' }, '<0.2');
      st.to(outSection, { duration: 0, display: 'none' });

      // IN ANIMATION
      st.to(inSection, { duration: 0, display: 'flex' });
      st.from(
        inHeader.lines,
        {
          // duration: 1,
          y: '100%',
          rotateZ: '5deg',
          opacity: 0,
          stagger: 0.1,
          ease: 'power4.inOut',
        },
        '<0.8'
      );
      st.from(inSpan, { duration: 1, width: '0%', ease: 'power4.inOut' }, '<');
      st.from(inOverParent, { duration: 1, y: '2rem', ease: 'power2.inOut' }, '<');
      st.from(
        inOverview.lines,
        { duration: 1, y: '100%', stagger: 0.1, ease: 'power2.inOut' },
        '<'
      );
      st.from(inButton, { duration: 1, y: '2rem', opacity: 0, ease: 'power2.inOut' }, '<');
      st.from(inSeperator, { duration: 1, height: '0%', ease: 'power4.inOut' }, '<');
      st.from(
        inInfo,
        { duration: 1, y: '2rem', opacity: 0, stagger: 0.1, ease: 'power4.inOut' },
        '<'
      );
      if (colorMode === 'true') {
        st.to(inSeperator, { backgroundColor: colorCombos[i][1], ease: 'power4.inOut' }, '<');
        st.to(
          sectionBG,
          { duration: 1, backgroundColor: colorCombos[i][0], ease: 'power4.out' },
          '<'
        );
        st.to(inContent, { color: colorCombos[i][1] }, '<');
        st.to(inBoltPath, { fill: colorCombos[i][1] }, '<');
        st.to([inButton, inSpan], { backgroundColor: colorCombos[i][1] }, '<');
        st.to(inButton, { color: colorCombos[i][2] }, '<');
      }
      st.to(
        kBase,
        {
          duration: 1.2,
          morphSVG: { shape: inGraphicKPoints, type: 'rotational' },
          ease: 'expo.out',
        },
        '<'
      );
      st.to(
        hBase,
        {
          duration: 1.2,
          morphSVG: { shape: inGraphicHPoints, type: 'rotational' },
          ease: 'expo.out',
        },
        '<'
      );
      st.from(inBottomGraphic, { duration: 1.2, y: '100%', opacity: 0, ease: 'expo.out' }, '<');

      st.from(inInfoParent, { duration: 1, opacity: 0, ease: 'power4.inOut' }, '<0.2');
    }
  }, 500);

  function setup() {
    const svgWrapper = document.querySelector('.services_graphic-data') as HTMLImageElement;
    const svgData = svgWrapper.src;

    loadSVGData(svgData);

    const sWrapper = document.querySelector('.services_wrapper') as HTMLElement;
    const sItems = [...document.querySelectorAll('.services_item')];
    const markerWrapper = document.querySelector('.services_scroll-spacers') as HTMLElement;
    const markerTemplate = document.querySelector('.services_scroll-spacer') as HTMLElement;

    sWrapper.style.height = String(sWrapper.dataset.nativeSize);
    markerWrapper.style.top = String('-' + sWrapper.dataset.nativeSize);
    colorMode = String(sWrapper.dataset.colorMode);

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
        type: 'lines, words',
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

    for (let i = 0; i < infoAreas.length; i++) {
      const temp = infoAreas[i] as HTMLElement;
      const tempBolt = temp.querySelector('.services-info_float-image');

      // console.log(calcOffset);

      temp.addEventListener('mousemove', (e) => {
        const bounds = temp.getBoundingClientRect();
        const relativeY = e.clientY - bounds.top;
        const calcOffset = bounds.bottom / colorPalette.length;

        gsap.set(tempBolt, { y: relativeY });

        if (relativeY > calcOffset * i && relativeY <= calcOffset * (i + 1)) {
          console.log(i, 'here');
        }
        if (relativeY > calcOffset * (i + 1) && relativeY <= calcOffset * (i + 2)) {
          console.log(i + 1, 'here');
        }
        console.log(relativeY, i, calcOffset, calcOffset * (i + 1));
      });
    }
  }

  function loadSVGData(file: string) {
    const svgEmbed = document.querySelector('.services_graphic-embed') as HTMLElement;
    // console.log('load', svgEmbed);
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        svgEmbed.innerHTML = xhttp.responseText;
      }
    };

    xhttp.open('GET', file, true);
    xhttp.send();
  }
};

// Scroll to Service
export const scrollToServices = () => {
  const serviceSections = [...document.querySelectorAll('.services_item')];
  const serviceLinks = [...document.querySelectorAll('.services_link-item')];

  const servicesScrollSections = [...document.querySelectorAll('.services_scroll-spacer')].filter(
    (e) => {
      if (!e.classList.contains('hide')) {
        return e;
      }
    }
  );

  // console.log('HERE', serviceLinks);

  // for (const i in servicesScrollSections) {
  //   const tempSection = serviceSections[i] as HTMLElement;
  //   const sectionTitle = tempSection.querySelector('h2') as HTMLElement;
  //   let sectionTag = sectionTitle.innerHTML as string;
  //   sectionTag = sectionTag.split(' ')[0] as string;

  //   tempSection.id = sectionTag;
  // }

  window.addEventListener('click', (e) => {
    console.log(e.target);
  });

  for (const i in serviceLinks) {
    const tempLink = serviceLinks[i] as HTMLElement;
    tempLink.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      let linkTag = target.innerHTML as string;
      linkTag = linkTag.split(' ')[0] as string;

      console.log('click', linkTag);
      // gsap.to(window, {
      //   duration: 2,
      //   scrollTo: { y: '#' + linkTag, offsetY: 50 },
      //   ease: 'power4.out',
      // });
    });
  }
};

// Page Reveal
export const servicesPageReveal = () => {
  const fixedHeaderSection = document.querySelector('.section_sticky-header') as HTMLElement;
  const heroSection = document.querySelector('.section_services-hero') as HTMLElement;

  const heroTitle = fixedHeaderSection.querySelector('h1');
  const headerSplit = new SplitText(heroTitle, { type: 'lines', linesClass: 'lineChild' });
  const textSplitParent = new SplitText(heroTitle, {
    type: 'lines',
    linesClass: 'split-text_parent',
  });
  const headerOverview = fixedHeaderSection.querySelector('p');
  const overline = heroSection.querySelector('.fixed-header_overline');
  const filterButtons = [...document.querySelectorAll('.services-hero_link-item')];
  const heroText = heroSection.querySelector('h2');
  const heroImageWrap = heroSection.querySelector('.services-hero_image-wrap') as HTMLElement;
  const heroChildren = [...heroImageWrap.children];

  const animation = gsap.timeline({
    onComplete: () => {
      textSplitParent.revert();
      headerSplit.revert();
    },
  });
  animation.from(headerSplit.lines, {
    delay: 1,
    duration: 1,
    y: '4rem',
    opacity: 0,
    stagger: 0.1,
    ease: 'power4.inOut',
  });
  animation.from(overline, { duration: 1, width: 0, ease: 'expo.inOut' }, '<');
  animation.from(headerOverview, { duration: 1, opacity: 0, y: '1rem', ease: 'power4.inOut' }, '<');
  animation.from(
    filterButtons,
    {
      duration: 1,
      y: '2rem',
      opacity: 0,
      stagger: 0.1,
      ease: 'power4.out',
    },
    '<0.2'
  );
  animation.from(heroText, { duration: 1, opacity: 0, y: '2rem', ease: 'power4.out' }, '<0.5');
  animation.from(heroChildren, { duration: 1, opacity: 0, scale: 1.05, ease: 'power4.out' }, '<');
};

// Overview Reveal
export const servicesOverviewReveal = () => {
  const overviewSection = document.querySelector('.section_serivces-info') as HTMLElement;

  const overviewHeader = overviewSection.querySelector('.services-info_overview-header');
  const overviewSpan = overviewSection.querySelector('.span');

  const industriesSection = overviewSection.querySelector(
    '.services-info_industries'
  ) as HTMLElement;
  const industriesHeader = industriesSection.querySelector('.services-info_industries-header');
  const industriesTag = industriesSection.querySelectorAll('.services-info_grid');

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: overviewSection,
      start: scrollTriggerStart,
      end: scrollTriggerEnd,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
  });
  animation.from(overviewHeader, { duration: 1, opacity: 0, y: '2rem', ease: 'power4.out' });
  animation.from(overviewSpan, { duration: 1, width: 0, ease: 'power4.out' }, '<');
  animation.from(industriesHeader, { duration: 1, opacity: 0, y: '2rem', ease: 'power4.out' }, '<');
  animation.from(
    industriesTag,
    {
      duration: 1,
      opacity: 0,
      y: '2rem',
      ease: 'power4.out',
    },
    '<'
  );
};

// Service Item Reveal
export const serviceSectionReveal = () => {
  const serviceSections = [...document.querySelectorAll('.services_item')];
  const servicesHeader = document.querySelector('.services-info_header');

  const headerAnimation = gsap.timeline({
    scrollTrigger: {
      trigger: serviceSections[0],
      start: scrollTriggerStart,
      end: scrollTriggerEnd,
      // markers: true,
      // toggleActions: 'play none none reverse',
    },
  });

  headerAnimation.from(servicesHeader, { duration: 1, opacity: 0, y: '1rem', ease: 'power4.out' });

  for (const i in serviceSections) {
    const tempSection = serviceSections[i] as HTMLElement;
    const revealWrap = tempSection.querySelector('.services_image-reveal');
    const contentMain = tempSection.querySelector('.services_info-main');
    const contentSecondary = tempSection.querySelector('.services_info-grid');
    const sectionSpan = [...tempSection.querySelectorAll('.services_span')];

    gsap.set(revealWrap, { y: '0%' });

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: tempSection,
        start: scrollTriggerStart,
        end: scrollTriggerStart,
        // markers: true,
        // toggleActions: 'play none none reverse',
      },
    });

    animation.to(revealWrap, { duration: 1, y: '-100%', ease: 'expo.inOut' }, '<');
    animation.from(contentMain, { duration: 1, opacity: 0, y: '2rem', ease: 'power4.inOut' }, '<');
    animation.from(
      contentSecondary,
      { duration: 1, opacity: 0, y: '2rem', ease: 'power4.inOut' },
      '<'
    );
    animation.from(sectionSpan, { duration: 1, width: '0%', ease: 'power4.inOut' }, '<');
  }
};
