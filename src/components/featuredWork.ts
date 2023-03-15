import { showNext, showPrev } from '$motion/featuredWorkMotion';

export const featuredWork = () => {
  const featuredWrap = document.querySelector('.home-featured_mask') as HTMLElement;

  let featuredCount = 0;

  featuredWrap.addEventListener('click', (e) => {
    const wrapperWidth = featuredWrap.offsetWidth;
    const clickX = e.pageX;

    if (clickX <= wrapperWidth / 2) {
      if (featuredCount > 0) {
        featuredCount -= 1;
        showPrev(featuredCount);
      }
      console.log('prev');
    } else {
      console.log('next');
      if (featuredCount < 2) {
        featuredCount += 1;
        showNext(featuredCount);
      }
    }
  });
};
