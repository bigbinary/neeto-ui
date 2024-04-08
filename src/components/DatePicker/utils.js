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
  dates.map(item => getAllowedDate(minDate, maxDate, item));

const getAllowed = (date, minDate, maxDate) =>
  (Array.isArray(date) ? getAllowedRange : getAllowedDate)(
    date,
    minDate,
    maxDate
  );

export { getAllowed };
