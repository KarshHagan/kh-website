export const careersFeed = () => {
  const careersList = document.querySelector('.careers-list_feed') as HTMLElement;
  const bambooList = [...careersList.querySelectorAll('.BambooHR-ATS-Department-Item')];

  console.log(careersList.children[0].children[0].children);
  console.log('bamboo', bambooList);
};
