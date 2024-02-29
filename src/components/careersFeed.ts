/* eslint-disable simple-import-sort/imports */
import { cursorHover } from '$components/cursor';
import { cloneNode } from '@finsweet/ts-utils';

export const careersFeed = () => {
  setTimeout(() => {
    const careersList = document.querySelector('.careers-list_feed') as HTMLElement;
    const bambooContainer = careersList.querySelector('#BambooHR') as HTMLElement;
    const jobsContainer = bambooContainer.querySelector('.BambooHR-ATS-Jobs-List') as HTMLElement;
    const jobsList = [...jobsContainer.querySelectorAll('li')];

    jobsList.forEach((item) => {
      createJob(item);
    });
  }, 1500);

  function createJob(data: HTMLElement) {
    const jobList = document.querySelector('.careers-list_list') as HTMLElement;
    const jobTemplate = document.querySelector('.careers-list_item') as HTMLElement;
    const newJob = cloneNode(jobTemplate) as HTMLElement;

    newJob.classList.remove('is-template', 'hide');

    const titleData = data.querySelector('a') as HTMLAnchorElement;
    const locationData = data.querySelector('span') as HTMLElement;
    const setLink = newJob.querySelector('a') as HTMLAnchorElement;
    const setTitle = newJob.querySelector('h3') as HTMLElement;
    const setLocation = newJob.querySelector('.careers-list_location') as HTMLElement;
    const formatLocation = locationData.innerText.split('\n')[2].split('\t')[19];

    setLink.href = titleData.href;
    setTitle.innerText = titleData.innerText;
    setLocation.innerText = formatLocation;

    jobList.appendChild(newJob);

    cursorHover();
  }
};
