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
