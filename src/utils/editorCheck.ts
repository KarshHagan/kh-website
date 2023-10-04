import type { Webflow } from '@finsweet/ts-utils';

export const editorCheck = () => {
  let isEditor;
  if (Webflow.env('editor') === undefined) {
    console.log('code no editor');
    isEditor = false;
  } else {
    console.log('code editor');
    isEditor = true;
  }

  return isEditor;
  //   setTimeout(() => {
  //     const editorButton = document.querySelector(
  //       '.w-reset.w-editor-bem-EditSiteButton '
  //     ) as HTMLElement;

  //     if (editorButton) {
  //       console.log('//editor avaiable');
  //       editorButton.addEventListener('click', () => {
  //         const body = document.querySelector('body') as HTMLElement;
  //         body.style.cursor = 'default';
  //       });
  //     }
  //   }, 2000);
};
