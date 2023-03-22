export const footer = () => {
  const footerElement = document.querySelector('.footer_component') as HTMLElement;
  const footerSpacer = document.querySelector('.section_footer-spacer') as HTMLElement;

  const footerCornerFix = 5 * 16;
  const footerHeight = footerElement.clientHeight;

  //   console.log(footerHeight);
  footerSpacer.style.height = footerHeight - footerCornerFix + 'px';

  //   console.log(footerHeight - footerCornerFix);

  //   console.log('height', footerHeight, footerElement, footerSpacer);
};
