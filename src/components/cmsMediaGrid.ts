export const cmsMediaGrid = () => {
  const mediaGrids = [...document.querySelectorAll('.section_media-grid')];
  for (const i in mediaGrids) {
    const tempGrid = mediaGrids[i] as HTMLElement;
    const feedContent = [...tempGrid.querySelectorAll('.content-feed_image')];
    const fillContainers = [...tempGrid.querySelectorAll('.media-grid_image')];

    console.log(feedContent, fillContainers);

    if (feedContent.length === 1) {
      // console.log('load block 2');
      const container = fillContainers[1] as HTMLImageElement;
      const replaceImage = feedContent[0] as HTMLImageElement;
      const updateLink = replaceImage.src;
      const updateSrcSet = replaceImage.srcset;

      container.src = updateLink;
      container.srcset = updateSrcSet;
    } else {
      // console.log('load all');
      for (const j in fillContainers) {
        const container = fillContainers[j] as HTMLImageElement;
        const replaceImage = feedContent[j] as HTMLImageElement;
        const updateLink = replaceImage.src;
        const updateSrcSet = replaceImage.srcset;

        container.src = updateLink;
        container.srcset = updateSrcSet;
      }
    }
  }
};
