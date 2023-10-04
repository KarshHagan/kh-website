import type { Webflow } from '@finsweet/ts-utils';

export const editorCheck = () => {
  let isEditor;
  if (Webflow.env('editor') === undefined) {
    console.log('no editor');
    isEditor = false;
  } else {
    console.log('editor');
    isEditor = true;
    const body = document.querySelector('body') as HTMLElement;
    body.style.cursor = 'default';
  }

  return isEditor;
};
