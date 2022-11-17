import { preloader } from '$motion/preoloader';

// import * as khSVG from '../assets/khGraphic.svg';

export const index = () => {
  const svgEmbed = document.querySelector('.preloader_graphic-embed') as HTMLImageElement;
  const svgData = svgEmbed.src;

  const testCanvas = document.querySelector('.preloader_svg') as HTMLEmbedElement;

  function loadfile(file: string) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        testCanvas.innerHTML = xhttp.responseText;
      }
    };

    xhttp.open('GET', file, true);
    xhttp.send();
  }

  loadfile(svgData);

  //----------------------
  // run preloader
  //----------------------
  preloader();
};
