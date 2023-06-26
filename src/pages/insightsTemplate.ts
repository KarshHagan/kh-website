import { stickyHeader } from '$components/stickyHeader';
import { istRevealAnimation } from '$motion/insightsTemplateMotion';

export const insightsTemplate = () => {
  // ---------------
  // Page Globals
  // ---------------
  stickyHeader();

  istRevealAnimation();

  // Share Link Setting
  const shareLinks = [...document.querySelectorAll('.social_text-link')];
  const curUrl = window.location.pathname as string;
  const subLink = curUrl.split('/')[2];

  for (const i in shareLinks) {
    const temp = shareLinks[i] as HTMLLinkElement;
    const tempLink = temp.href;
    const insightLink = tempLink + subLink;

    temp.href = insightLink;
    // console.log(subLink);
  }
};
