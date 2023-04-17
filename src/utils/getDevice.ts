export const isTouchDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isTouch =
    /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
      userAgent
    );
  console.log('isTouch', isTouch);
  return isTouch;
};
