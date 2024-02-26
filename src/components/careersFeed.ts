/* eslint-disable simple-import-sort/imports */
import { cursorHover } from '$components/cursor';
import { cloneNode } from '@finsweet/ts-utils';

export const careersFeed = () => {
  // console.log('AYO');
  setTimeout(() => {
    const careersList = document.querySelector('.careers-list_feed') as HTMLElement;
    const bambooContainer = careersList.querySelector('#BambooHR') as HTMLElement;
    const jobsContainer = bambooContainer.querySelector('.BambooHR-ATS-Jobs-List') as HTMLElement;
    const jobsList = [...jobsContainer.querySelectorAll('li')];

    // const bhImage = bambooContainer.querySelector('img') as HTMLElement;
    // bhImage.style.width = 'auto';

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
    const setLink = newJob.querySelector('a') as HTMLAnchorElement;
    const setTitle = newJob.querySelector('h3') as HTMLElement;
    setLink.href = titleData.href;
    setTitle.innerText = titleData.innerText;

    jobList.appendChild(newJob);

    cursorHover();

    // console.log('create job', data, jobTemplate, setLink);
  }
};
