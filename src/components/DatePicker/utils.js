import { isPresent } from "neetocist";

const getAllowedDate = (date, minDate, maxDate) => {
  if (isPresent(minDate) && date?.isBefore(minDate)) {
    return minDate;
  }

  if (isPresent(maxDate) && date?.isAfter(maxDate)) {
    return maxDate;
  }

  return date;
};

const getAllowedRange = (dates, minDate, maxDate) =>
  dates.map(item => getAllowedDate(item, minDate, maxDate));

const getAllowed = (date, minDate, maxDate) =>
  (Array.isArray(date) ? getAllowedRange : getAllowedDate)(
    date,
    minDate,
    maxDate
  );

const formattedString = (date, dateFormat) =>
  Array.isArray(date)
    ? date.map(item => item?.format(dateFormat))
    : date?.format(dateFormat);

export { getAllowed, formattedString };
