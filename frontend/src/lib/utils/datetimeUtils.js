export const getFormatedRelativeDateTime = (currentDate, relativeToDate, locale) => {
  const formatter = new Intl.RelativeTimeFormat(locale, { numeric: 'auto', style: 'long' });
  const ranges = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };
  const secondsElapsed = (relativeToDate.getTime() - currentDate.getTime()) / 1000;
  for (let key in ranges) {
    if (ranges[key] <= Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / ranges[key];
      return formatter.format(Math.round(delta), key);
    }
  }
};

export const formatDate = dateString => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
