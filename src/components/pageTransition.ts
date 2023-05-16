import { pageTransitionIn, pageTransitionOut } from '$motion/pageTransitionMotion';

export const pageTransition = () => {
  //   console.log('PAGE');
  const allLinks = [...document.querySelectorAll('a')];

  const pageLocation = window.location.pathname;
  const hasFurtherIndex = pageLocation.substring(1);
  if (hasFurtherIndex !== '') {
    pageTransitionOut();
  }

  for (const i in allLinks) {
    const temp = allLinks[i] as HTMLAnchorElement;
    const linkSrc = temp.href;

    if (linkSrc.includes('karshhagan') && !linkSrc.includes('#')) {
      temp.addEventListener('click', (e) => {
        // console.log(temp.href);
        e.preventDefault();
        const animation = pageTransitionIn();
        animation.play();
        const animationDuration = animation.duration() * 1000;
        setTimeout(
          (url: Location) => {
            window.location = url;
          },
          animationDuration,
          linkSrc
        );
      });
    }
  }
};