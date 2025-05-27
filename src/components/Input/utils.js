const toFixed = (numStr, precision) => {
  const num = Number(numStr);
  if (Number.isNaN(num)) return numStr;

  return num.toFixed(precision);
};

const isValidNumberString = numStr => {
  if (typeof numStr !== "string") return false;

  return !Number.isNaN(Number(numStr.trim()));
};

export const getFormattedValue = (value, precision) => {
  if (precision < 0) return value;

  const str = value.toString();

  if (isValidNumberString(str)) return toFixed(str, precision);

  return str;
};

export const getTrimmedValue = (value, disableTrimOnBlur) => {
  if (disableTrimOnBlur || typeof value !== "string") return value;

  return value.trim();
};
