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

export const getDateTimeRange = (date, time) => {
  if (isPresent(date) && isPresent(time)) {
    return [
      dayjs(`${date[0].format(DATE_FORMAT)} ${time[0].format(TIME_FORMAT)}`),
      dayjs(`${date[1].format(DATE_FORMAT)} ${time[1].format(TIME_FORMAT)}`),
    ];
  }

  return null;
};
