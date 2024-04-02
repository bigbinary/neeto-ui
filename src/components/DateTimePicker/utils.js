import dayjs from "dayjs";
import { isPresent } from "neetocist";

const DATE_FORMAT = "YYYY-MM-DD";
const TIME_FORMAT = "HH:mm";

export const getDateTime = (date, time) => {
  if (isPresent(date) && isPresent(time)) {
    return dayjs(`${date.format(DATE_FORMAT)} ${time.format(TIME_FORMAT)}`);
  }

  return null;
};

export const getAllowedTime = (date, time, minDateTime, maxDateTime) => {
  const newTime = getDateTime(date, time || dayjs());
  if (
    isPresent(minDateTime) &&
    date?.isSame(minDateTime, "day") &&
    newTime?.isBefore(minDateTime)
  ) {
    return minDateTime;
  }

  if (
    isPresent(maxDateTime) &&
    date?.isSame(maxDateTime, "day") &&
    newTime?.isAfter(maxDateTime)
  ) {
    return maxDateTime;
  }

  return newTime;
};

export const getTime = date => date?.format(TIME_FORMAT);
