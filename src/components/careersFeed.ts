export const careersFeed = () => {
  // console.log('AYO');
  setTimeout(() => {
    const careersList = document.querySelector('.careers-list_feed') as HTMLElement;
    const bambooList = careersList.querySelector('#BambooHR') as HTMLElement;

    const bhImage = bambooList.querySelector('img') as HTMLElement;
    bhImage.style.width = 'auto';

    // console.log(bambooList, bhImage);
  }, 500);
  // console.log('bamboo', bambooList);
};
