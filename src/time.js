const oneMinuteMs = 60000;
const oneHourMs = 3600000;
const oneDayMs = 24 * oneHourMs;
const oneWeekMs = 7 * oneDayMs;
const oneMonthMs = 30 * oneDayMs;
const oneYearMs = 365 * oneDayMs;

export const timeConvertor = (time) => {
  const now = new Date().getTime();
  const timeMs = now - new Date(time).getTime();
  if (timeMs < oneMinuteMs) {
    //seconds
    return `${Math.round(timeMs / 1000)}s`;
  }
  if (timeMs > oneMinuteMs && timeMs < oneHourMs) {
    //minutes
    const minutes = Math.round(timeMs / oneMinuteMs);
    return `${minutes}m`;
  }
  if (timeMs > oneHourMs && timeMs < oneDayMs) {
    //hours
    const hours = Math.round(timeMs / oneHourMs);
    return `${hours}h`;
  }
  if (timeMs > oneDayMs && timeMs < oneWeekMs) {
    //days
    const days = Math.round(timeMs / oneDayMs);
    return `${days}h`;
  }
  if (timeMs > oneWeekMs && timeMs < oneMonthMs) {
    //weeks
    const weeks = Math.round(timeMs / oneWeekMs);
    return `${weeks}w`;
  }
  if (timeMs > oneMonthMs && timeMs < oneYearMs) {
    //months
    const t = new Date(time).toString().split(" ");
    return `${t[1]} ${Number(t[2])}`;
  }
  if (timeMs > oneYearMs) {
    //years
    const years = Math.round(timeMs / oneYearMs);
    return `${years}y`;
  }
};
