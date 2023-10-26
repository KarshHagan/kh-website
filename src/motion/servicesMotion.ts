// eslint-disable-next-line simple-import-sort/imports
import { getDeviceType } from '$utils/getDevice';
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

// Scroll to Service
// export const scrollToServices = () => {
//   const serviceSections = [...document.querySelectorAll('.services_item')];
//   const serviceLinks = [...document.querySelectorAll('.services_link-item')];

//   const servicesScrollSections = [...document.querySelectorAll('.services_scroll-spacer')].filter(
//     (e) => {
//       if (!e.classList.contains('hide')) {
//         return e;
//       }
//     }
//   );

//   // console.log('HERE', serviceLinks);

//   // for (const i in servicesScrollSections) {
//   //   const tempSection = serviceSections[i] as HTMLElement;
//   //   const sectionTitle = tempSection.querySelector('h2') as HTMLElement;
//   //   let sectionTag = sectionTitle.innerHTML as string;
//   //   sectionTag = sectionTag.split(' ')[0] as string;

//   //   tempSection.id = sectionTag;
//   // }

//   window.addEventListener('click', (e) => {
//     console.log(e.target);
//   });

//   for (const i in serviceLinks) {
//     const tempLink = serviceLinks[i] as HTMLElement;
//     tempLink.addEventListener('click', (e) => {
//       const target = e.target as HTMLElement;
//       let linkTag = target.innerHTML as string;
//       linkTag = linkTag.split(' ')[0] as string;

//       console.log('click', linkTag);
//       // gsap.to(window, {
//       //   duration: 2,
//       //   scrollTo: { y: '#' + linkTag, offsetY: 50 },
//       //   ease: 'power4.out',
//       // });
//     });
//   }
// };

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
