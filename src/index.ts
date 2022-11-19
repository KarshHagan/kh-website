import { Webflow } from '@finsweet/ts-utils';

import { brandHover } from '$motion/navBrandHover';
import { home } from '$pages/home';

window.Webflow ||= [];
window.Webflow.push(() => {
  //-------------------
  // Load page modules
  //-------------------
  // console.log('Welcome');
  const windowLocation = window.location.pathname as string;

  if (windowLocation === '/') {
    //load index module
    console.log('home');
    home();
  }

  //--------------------
  // Load global modules
  //--------------------
  // Preloader
  //--------------------------

  // Navbar brand hover effect
  //--------------------------
  const brandComponent = document.querySelector('.nav_brand-component');
  const brandMotion = brandHover();
  brandComponent?.addEventListener('mouseenter', (e) => {
    brandMotion.play();
  });
  brandComponent?.addEventListener('mouseleave', (e) => {
    brandMotion.reverse();
  });
});
