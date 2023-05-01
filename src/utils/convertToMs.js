export const convertToMs = time => {
  const { hours, minutes } = time;

  const hoursInMs = parseInt(hours) * 60 * 60 * 1000;
  const minutesInMs = parseInt(minutes) * 60 * 1000;

  return hoursInMs + minutesInMs;
};
