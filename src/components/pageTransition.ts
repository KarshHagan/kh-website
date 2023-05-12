import { pageTransitionIn, pageTransitionOut } from '$motion/pageTransitionMotion';

export const pageTransition = () => {
  const allLinks = [...document.querySelectorAll('a')];

  pageTransitionOut();

  for (const i in allLinks) {
    const temp = allLinks[i] as HTMLAnchorElement;
    const linkSrc = temp.href;

    if (linkSrc.includes('karshhagan')) {
      //   console.log(temp.href);
      //   console.log('site link');
      temp.addEventListener('click', (e) => {
        // console.log(animationDuration);
        const animation = pageTransitionIn();
        animation.play();
        const animationDuration = animation.duration() * 1000;
        e.preventDefault();
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
