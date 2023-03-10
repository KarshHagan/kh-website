import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('/// karsh hagan - 2023 ///');

  const splitMenu = new SplitText('#menuText', { type: 'words, chars' });
  const tl = gsap.timeline();
  tl.to(splitMenu.chars, { duration: 0.6, y: '1rem', stagger: { each: 0.2 } });
});
