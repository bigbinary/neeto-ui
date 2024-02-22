import dayjs from "dayjs";

export const FORMAT = "HH:mm";

export const getFormattedTime = value => {
  if (dayjs.isDayjs(value)) {
    return value.format(FORMAT);
  } else if (dayjs(value, FORMAT).isValid()) {
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
