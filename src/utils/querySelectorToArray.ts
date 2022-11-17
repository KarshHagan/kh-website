export const querySelectorToArray = (selector: string) => {
  const list = document.querySelectorAll(selector);
  const array = [...list].map((item) => {
    return item;
  });
  return array;
};
