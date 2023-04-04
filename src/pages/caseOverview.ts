import { fixedHeader } from '$motion/fixedHeader';

export const caseOverview = () => {
  // ---------------
  // Page Globals
  // ---------------

  console.log('overview');

  // Fixed Header
  const headerElement = document.querySelector('#fixedHeader') as HTMLElement;
  fixedHeader(headerElement);

  // ---------------
  // Work Filtering
  // ---------------
  // const filterButtons = document.querySelectorAll('.work-filter_item');

  // console.log(filterButtons);

  // // Change color of text on click
  // for (let i = 0; i < filterButtons.length; i++) {
  //   let clicked = false;
  //   const temp = filterButtons[i] as HTMLElement;
  //   temp.addEventListener('click', () => {
  //     clicked = !clicked;
  //     if (clicked) {
  //       temp.style.backgroundColor = '#EC2543';
  //       temp.style.color = '#F8F4EE';
  //     } else {
  //       temp.style.backgroundColor = '#F8F4EE';
  //       temp.style.color = '#EC2543';
  //     }
  //   });
  // }
};
