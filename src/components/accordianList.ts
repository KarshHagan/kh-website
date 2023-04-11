import {
  accordianClose,
  accordianHoverIn,
  accordianHoverOut,
  accordianImageHover,
  accordianOpen,
  initAccordian,
} from '$motion/accordianMotion';

export const accordianList = () => {
  initAccordian();

  // Set service number
  // ------------------
  const serviceNumbers = [...document.querySelectorAll('.home-services_number')];

  for (let i = 0; i < serviceNumbers.length; i++) {
    const temp = serviceNumbers[i] as HTMLElement;
    temp.innerHTML = '0' + (i + 1);
  }

  // Service accordian
  // -----------------
  const services = [...document.querySelectorAll('.home-services_item')];
  const servicesImages = [...document.querySelectorAll('.home-services_image')];

  for (let i = 0; i < services.length; i++) {
    let isOpen = false;
    const temp = services[i] as HTMLElement;
    temp.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (isOpen === false) {
        accordianOpen(target);
      } else if (isOpen === true) {
        accordianClose(target);
      }

      isOpen = !isOpen;
    });

    // Hover Effects
    temp.addEventListener('mouseenter', (e) => {
      const target = e.target as HTMLElement;
      const curService = target.children[0].children[0].innerHTML;
      const changeImage = getImage(curService);
      accordianHoverIn(changeImage);
    });
    temp.addEventListener('mouseleave', (e) => {
      const target = e.target as HTMLElement;
      const curService = target.children[0].children[0].innerHTML;
      const changeImage = getImage(curService);
      accordianHoverOut(changeImage);
    });

    function getImage(service: string) {
      const defaultImage = servicesImages[0] as HTMLElement;
      let image: HTMLElement = defaultImage;
      for (const item in servicesImages) {
        const tempImage = servicesImages[item] as HTMLElement;
        const tempParent = tempImage.parentElement as HTMLElement;
        if (tempParent.children[0].innerHTML === service) {
          image = tempImage;
        }
      }
      return image;
    }
  }

  // Service Hover Effects
  // --------------------
  const servicesContainer = document.querySelector('.section_home-services') as HTMLElement;
  servicesContainer.addEventListener('mousemove', (e) => {
    accordianImageHover(e.clientX, e.clientY);
  });
};
