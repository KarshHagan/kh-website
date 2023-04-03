export const footer = () => {
  const footerElement = document.querySelector('.footer_component') as HTMLElement;
  const footerSpacer = document.querySelector('.section_footer-spacer') as HTMLElement;

  const footerCornerFix = 5 * 16;
  const footerHeight = footerElement.clientHeight;

  footerSpacer.style.height = footerHeight - footerCornerFix + 'px';

  // const footerText = document.querySelector('.')
  // const animation = gsap.timeline();
};
