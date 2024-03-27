import dayjs from "dayjs";
import { isPresent } from "neetocist";

export const FORMAT = "HH:mm";

export const getFormattedTime = value => {
  if (dayjs.isDayjs(value)) {
    return value.toDate();
  } else if (value instanceof Date || dayjs(value, FORMAT).isValid()) {
    return value;
  }

  return null;
};

export const getFormattedRange = value => {
  if (!Array.isArray(value)) return null;

  return value.map(item => getFormattedTime(item));
};

export const toDayJs = value => {
  if (Array.isArray(value)) return value.map(item => dayjs(item, FORMAT));

  return dayjs(value, FORMAT);
};

// const isValidTime = (minTime, maxTime, value) => {
//   if (isPresent(minTime) && toDayJs(value).isBefore(toDayJs(minTime)))
//     return false;

//   if (isPresent(maxTime) && toDayJs(value).isAfter(toDayJs(maxTime)))
//     return false;

//   return true;
// };

// const isValidRange = (minTime, maxTime, value) =>
//   value.every(item => isValid(minTime, maxTime, item));

// export const isValid = (minTime, maxTime, value) =>
//   (Array.isArray(value) ? isValidRange : isValidTime)(minTime, maxTime, value);

const getValidTime = (minTime, maxTime, value) => {
  if (isPresent(minTime) && toDayJs(value).isBefore(toDayJs(minTime))) {
    return minTime;
  }

  if (isPresent(maxTime) && toDayJs(value).isAfter(toDayJs(maxTime))) {
    return maxTime;
  }

  return value;
};

const getValidRange = (minTime, maxTime, value) =>
  value.map(item => getValidTime(minTime, maxTime, item));

export const getValid = (minTime, maxTime, value) =>
  (Array.isArray(value) ? getValidRange : getValidTime)(
    minTime,
    maxTime,
    value
  );
