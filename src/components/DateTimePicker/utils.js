import dayjs from "dayjs";
import { isPresent } from "neetocist";

const DATE_FORMAT = "YYYY-MM-DD";
const TIME_FORMAT = "HH:mm";

export const getDayJsObj = value =>
  dayjs.isDayjs(value) ? value : dayjs(value);

export const getDateTime = (date, time) => {
  if (isPresent(date) && isPresent(time)) {
    return dayjs(`${date.format(DATE_FORMAT)} ${time.format(TIME_FORMAT)}`);
  }

  return null;
};

export const getDateTimeRange = (dates, times) => {
  if (!Array.isArray(dates) || !Array.isArray(times)) return null;

  return dates.map(
    (date, index) =>
      isPresent(date) &&
      isPresent(times[index]) &&
      dayjs(`${date.format(DATE_FORMAT)} ${times[index].format(TIME_FORMAT)}`)
  );
};
