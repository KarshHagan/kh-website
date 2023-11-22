export const initSVGMorph = () => {
  const svgEmbed = document.querySelector('[data-morph-embed]') as HTMLElement;
  const svgWrapper = document.querySelector('[data-morph-svg]') as HTMLImageElement;
  const svgData = svgWrapper.src;

  //   SETUP SVG
  function requestSVG(method: string, url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status >= 200 && this.status < 300) {
            resolve(this.responseText);
          } else {
            reject(new Error(`Request failed with status: ${this.status}`));
          }
        }
      };
      xhttp.open(method, url, true);
      xhttp.send();
    });
  }

  async function fetchData(): Promise<void> {
    try {
      const data: string = await requestSVG('GET', svgData);
      svgEmbed.innerHTML = data;
      //   console.log('HERE', data);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error('An unexpected error occurred');
      }
    }
  }

  fetchData();
};

export const getSVGPathData = () => {
  const svgEmbed = document.querySelector('[data-morph-embed]') as HTMLElement;
  const kGraphics = [...svgEmbed.querySelectorAll('.k-graphic')];
  const hGraphics = [...svgEmbed.querySelectorAll('.h-graphic')];
  const hideSection = svgEmbed.querySelector('#hide01');

  const kPathPoints = [...kGraphics].slice(0).map((e) => {
    return e.getAttribute('d') as gsap.SVGPathValue;
  });
  const hPathPoints = [...hGraphics].slice(0).map((e) => {
    return e.getAttribute('d') as gsap.SVGPathValue;
  });

  const kBase = kGraphics[0] as HTMLElement;
  const hBase = hGraphics[0] as HTMLElement;

  const returnData = [kBase, kPathPoints, hBase, hPathPoints, hideSection];

  return returnData;
};
