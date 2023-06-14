export const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return 'mobile';
  }
  return 'desktop';
};

export const getBrowserType = () => {
  let type = '';
  if ((navigator.userAgent.indexOf('Opera') || navigator.userAgent.indexOf('OPR')) !== -1) {
    type = 'Opera';
  } else if (navigator.userAgent.indexOf('Edg') !== -1) {
    type = 'Edge';
  } else if (navigator.userAgent.indexOf('Chrome') !== -1) {
    type = 'Chrome';
  } else if (navigator.userAgent.indexOf('Safari') !== -1) {
    type = 'Safari';
  } else if (navigator.userAgent.indexOf('Firefox') !== -1) {
    type = 'Firefox';
  } else {
    type = 'unknown';
  }

  return type;
};
