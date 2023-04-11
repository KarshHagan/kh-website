import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export const servicesPageReveal = () => {
  const fixedHeaderSection = document.querySelector('.section_fixed-header') as HTMLElement;
  const heroSection = document.querySelector('.section_services-hero') as HTMLElement;

  const headerTitle = fixedHeaderSection.querySelector('h1');
  const headerSplit = new SplitText(headerTitle, { type: 'words', linesClass: 'wordChild' });
  const textSplitParent = new SplitText(headerTitle, {
    type: 'words',
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
  animation.from(headerSplit.words, {
    duration: 1,
    y: '6rem',
    opacity: 0,
    stagger: { each: 0.1 },
    ease: 'power4.inOut',
  });
  animation.from(overline, { duration: 1, width: 0, ease: 'expo.inOut' }, '<');
  animation.from(
    headerOverview,
    { duration: 1, opacity: 0, y: '1rem', ease: 'power4.inOut' },
    '<0.2'
  );
  animation.from(
    filterButtons,
    {
      duration: 1,
      y: '2rem',
      opacity: 0,
      stagger: { each: 0.1 },
      ease: 'power4.out',
    },
    '<0.2'
  );
  animation.from(heroText, { duration: 1, opacity: 0, y: '1rem', ease: 'power4.out' }, '<0.5');
  animation.from(heroChildren, { duration: 1, opacity: 0, scale: 1.05, ease: 'power4.out' }, '<');
};

export const serviceSectionReveal = () => {
  const serviceSections = [...document.querySelectorAll('.services_item')];

  for (const i in serviceSections) {
    const tempSection = serviceSections[i] as HTMLElement;
    const revealWrap = tempSection.querySelector('.services_image-reveal');
    const contentMain = tempSection.querySelector('.services_info-main');
    const contentSecondary = tempSection.querySelector('.services_info-grid');

    gsap.to(revealWrap, { y: '0%' });

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: tempSection,
        start: 'top 50%',
        end: 'top 50%',
        // markers: true,
        toggleActions: 'play none none reverse',
      },
    });

    animation.to(revealWrap, { duration: 1, y: '-100%', ease: 'expo.inOut' });
    animation.from(
      contentMain,
      { duration: 1, opacity: 0, y: '2rem', ease: 'power4.inOut' },
      '<0.2'
    );
    animation.from(
      contentSecondary,
      { duration: 1, opacity: 0, y: '2rem', ease: 'power4.inOut' },
      '<0.2'
    );
  }
};
