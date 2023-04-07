import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

// -----------------
// Reveal Animations
// -----------------

// Page Reveal
export const abPageReveal = () => {
  const heroSection = document.querySelector('.section_about-header') as HTMLElement;
  const aboutSecton = document.querySelector('.section_about-hero') as HTMLElement;

  const heroTitle = heroSection.querySelector('h1');
  const headerSplit = new SplitText(heroTitle, { type: 'lines', linesClass: 'lineChild' });
  const textSplitParent = new SplitText(heroTitle, {
    type: 'lines',
    linesClass: 'split-text_parent',
  });
  const heroStamp = heroSection.querySelector('.about-header_stamp');

  const aboutOverline = aboutSecton.querySelector('.fixed-header_overline');
  const aboutTitle = aboutSecton.querySelector('h2');
  const aboutOverview = aboutSecton.querySelector('p');
  const aboutImage = aboutSecton.querySelector('.about-hero_image');
  const animation = gsap.timeline({
    onComplete: () => {
      textSplitParent.revert();
      headerSplit.revert();
    },
  });

  animation.from(headerSplit.lines, {
    duration: 1,
    y: '6rem',
    opacity: 0,
    stagger: { each: 0.1 },
    ease: 'power4.inOut',
  });

  animation.from(aboutOverline, { duration: 1, width: 0, ease: 'expo.inOut' }, '<');

  animation.from(
    heroStamp,
    {
      duration: 1,
      scale: 1.2,
      rotate: '0deg',
      opacity: 0,
      ease: 'power4.inOut',
    },
    '<0.5'
  );

  animation.from(
    [aboutTitle, aboutOverview],
    {
      duration: 1,
      opacity: 0,
      y: '2rem',
      ease: 'power4.out',
    },
    '<0.2'
  );
  animation.from(
    aboutImage,
    {
      duration: 1,
      opacity: 0,
      y: '2rem',
      ease: 'power4.out',
    },
    '<0.2'
  );
};

// Clients Reveal
export const abClientsReveal = () => {
  const clientSection = document.querySelector('.section_about-clients') as HTMLElement;
  const clientLabel = clientSection.querySelector('.module_label');
  const clientLogos = [...clientSection.querySelectorAll('.about-clients_image')];

  const logoFirst = [];
  const logoSecond = [];

  for (let i = 0; i < clientLogos.length; i++) {
    if (i < clientLogos.length / 2) {
      logoFirst.push(clientLogos[i]);
    } else {
      logoSecond.push(clientLogos[i]);
    }
  }

  logoSecond.reverse();

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: clientSection,
      start: 'top 50%',
      end: 'top 50%',
      //   markers: true,
      toggleActions: 'play none none reverse',
    },
  });

  animation.from(clientLabel, { duration: 1, y: '2rem', opacity: 0, ease: 'power4.out' });
  animation.from(
    logoFirst,
    { duration: 0.5, opacity: 0, stagger: { each: 0.1 }, ease: 'power3.inOut' },
    '<'
  );
  animation.from(
    logoSecond,
    { duration: 0.5, opacity: 0, stagger: { each: 0.1 }, ease: 'power3.inOut' },
    '<'
  );
};

export const abTeamReveal = () => {
  const teamSection = document.querySelector('.section_about-team') as HTMLElement;
  const sectionLabel = teamSection.querySelector('.module_label');
  const teamCards = [...teamSection.querySelectorAll('.about-team_item')];
  const seeMore = teamSection.querySelector('.show-more_component');
  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: teamSection,
      start: 'top 50%',
      end: 'top 50%',
      //   markers: true,
      toggleActions: 'play none none reverse',
    },
  });

  animation.from(sectionLabel, { duration: 1, y: '2rem', opacity: 0, ease: 'power4.out' });
  animation.from(
    teamCards,
    { duration: 1, x: '2rem', opacity: 0, stagger: { each: 0.1 }, ease: 'power4.out' },
    '<'
  );
  animation.from(seeMore, { duration: 1, y: '2rem', opacity: 0, ease: 'power4.out' }, '<0.2');
};

export const abAwardsReveal = () => {
  const awardsSection = document.querySelector('.section_about-awards') as HTMLElement;
  const bgText = awardsSection.querySelector('.about-awards_header');
  const maskedText = awardsSection.querySelector('.about-awards-mask-header');
  const overviewText = awardsSection.querySelector('p');
  const overviewSpan = awardsSection.querySelector('.about-awards_span');
  const awardItems = [...awardsSection.querySelectorAll('.about-awards_item')];

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: awardsSection,
      start: 'top 50%',
      end: 'top 50%',
      //   markers: true,
      toggleActions: 'play none none reverse',
    },
  });
  animation.from(bgText, { duration: 1.2, y: '2rem', opacity: 0, ease: 'power4.out' });
  animation.from(maskedText, { duration: 1.2, y: '-2rem', opacity: 0, ease: 'power4.out' }, '<');
  animation.from(overviewText, { duration: 1, y: '2rem', opacity: 0, ease: 'power4.out' }, '<');
  animation.from(overviewSpan, { duration: 1, width: 0, ease: 'power4.out' }, '<');
  animation.from(
    awardItems,
    { duration: 1, y: '2rem', opacity: 0, stagger: { each: 0.1 }, ease: 'power4.out' },
    '<0.5'
  );
};
