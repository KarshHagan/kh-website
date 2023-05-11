export const cmsMediaGrid = () => {
  // const mediaGrids = [...document.querySelectorAll('.section_media-grid')];
  // for (const i in mediaGrids) {
  //   const tempGrid = mediaGrids[i] as HTMLElement;

  // }

  const mediaBlocks = [...document.querySelectorAll('[data-media-block]')];
  let setIndex = 0;

  for (let i = 0; i < mediaBlocks.length; i++) {
    const tempMediaBlock = mediaBlocks[i] as HTMLElement;
    const videoSet = isVideoSet(tempMediaBlock);
    // console.log('has video', videoSet);

    if (videoSet === false) {
      setMedia(tempMediaBlock, setIndex);
      setIndex += 1;
    }
  }

  function setMedia(block: HTMLElement, index: number) {
    const feedContent = [...document.querySelectorAll('.content-feed_image')];

    const blockImageElement = block.children[0] as HTMLImageElement;
    const setImage = feedContent[index] as HTMLImageElement;
    blockImageElement.src = setImage.src;
    blockImageElement.srcset = setImage.srcset;
  }

  function isVideoSet(block: HTMLElement) {
    const blockVideo = block.children[1] as HTMLElement;
    let videoSet = false;
    if (blockVideo !== undefined) {
      const videoInvisible = blockVideo.classList.contains('w-condition-invisible');
      videoSet = !videoInvisible;
    }
    return videoSet;
  }
};
