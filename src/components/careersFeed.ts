// import { cursorHover } from '$components/cursor';
import { cloneNode } from '@finsweet/ts-utils';

export const careersFeed = () => {
  const emptyMessage = document.querySelector('.careers_empty') as HTMLElement | null;
  const jobList = document.querySelector('.careers-list_list') as HTMLElement | null;
  const jobTemplate = document.querySelector('.careers-list_item') as HTMLElement | null;

  if (!jobList || !jobTemplate) return;

  let hasRendered = false;

  const renderFromBamboo = (root: ParentNode) => {
    if (hasRendered) return;

    const jobs = [...root.querySelectorAll('.BambooHR-ATS-Jobs-Item')];

    if (jobs.length) {
      hasRendered = true;

      jobs.forEach((item) => createJob(item, jobList, jobTemplate));

      return true;
    }

    const noJobsEl =
      root.querySelector('.BambooHR-ATS-Jobs-Empty') ||
      root.querySelector('.BambooHR-ATS-Jobs-List:empty');

    if (noJobsEl) {
      hasRendered = true;
      emptyMessage?.classList.remove('hide');
      return true;
    }

    return false;
  };

  const waitForContainer = () => {
    const container = document.querySelector('#BambooHR') as HTMLElement | null;
    if (container) {
      // console.log('[Careers] #BambooHR already exists');
      return Promise.resolve(container);
    }

    // console.log('[Careers] Waiting for #BambooHR to mount');

    return new Promise<HTMLElement>((resolve) => {
      const obs = new MutationObserver(() => {
        const el = document.querySelector('#BambooHR') as HTMLElement | null;
        if (el) {
          // console.log('[Careers] #BambooHR detected via MutationObserver');
          obs.disconnect();
          resolve(el);
        }
      });

      obs.observe(document.documentElement, { childList: true, subtree: true });
    });
  };

  waitForContainer().then((bambooContainer) => {
    if (renderFromBamboo(bambooContainer)) {
      // console.log('[Careers] Render completed on initial pass');
      return;
    }

    const obs = new MutationObserver(() => {
      // console.log('[Careers] Bamboo mutation detected');
      if (renderFromBamboo(bambooContainer)) {
        // console.log('[Careers] Render completed, disconnecting observer');
        obs.disconnect();
      }
    });

    obs.observe(bambooContainer, { childList: true, subtree: true });
    window.setTimeout(() => {
      if (!hasRendered) {
        console.warn('[Careers] Timeout reached, showing empty state');
        obs.disconnect();
        emptyMessage?.classList.remove('hide');
      }
    }, 15000);
  });

  function createJob(data: Element, jobListEl: HTMLElement, jobTemplateEl: HTMLElement) {
    const newJob = cloneNode(jobTemplateEl) as HTMLElement;
    newJob.classList.remove('is-template', 'hide');

    const titleData = data.querySelector('a') as HTMLAnchorElement | null;
    const locationData = data.querySelector('span') as HTMLElement | null;

    if (!titleData || !locationData) return;

    const setLink = newJob.querySelector('a') as HTMLAnchorElement | null;
    const setTitle = newJob.querySelector('h3') as HTMLElement | null;
    const setLocation = newJob.querySelector('.careers-list_location') as HTMLElement | null;

    if (!setLink || !setTitle || !setLocation) return;

    const parts = locationData.innerText.split('\n');
    const formatLocation = parts[2]?.trim() ?? locationData.innerText.trim();

    setLink.href = titleData.href;
    setTitle.innerText = titleData.innerText;
    setLocation.innerText = formatLocation;

    jobListEl.appendChild(newJob);
  }
};
