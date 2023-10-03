export const editorCheck = () => {
  setTimeout(() => {
    const editorButton = document.querySelector(
      '.w-reset.w-editor-bem-EditSiteButton '
    ) as HTMLElement;

    if (editorButton) {
      console.log('editor avaiable');
      editorButton.addEventListener('click', () => {
        const body = document.querySelector('body') as HTMLElement;
        body.style.cursor = 'default';
      });
    }
  }, 2000);
};
