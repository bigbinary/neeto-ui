const toFixed = (numStr, precision) => {
  const num = Number(numStr);
  if (Number.isNaN(num)) return numStr;

  return num.toFixed(precision);
};

const isValidNumberString = numStr => {
  if (typeof numStr !== "string") return false;

  return !Number.isNaN(Number(numStr.trim()));
};

export const formatWithPrecision = (value, precision) => {
  const str = value.toString();

  if (isValidNumberString(str)) return toFixed(str, precision);

  return str;
};
