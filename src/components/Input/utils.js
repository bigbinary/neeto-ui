import { replace } from "ramda";

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
  if (precision < 0 || !value) return value;

  const str = value.toString();

  if (isValidNumberString(str)) return toFixed(str, precision);

  return str;
};

export const enforceDecimalPrecision = (value, precision) => {
  if (precision < 0 || !value) return value;

  const valueStr = value.toString();

  if (precision === 0) return valueStr.split(".")[0];

  const regex = new RegExp(`^\\d*\\.?\\d{0,${precision}}$`);
  if (regex.test(valueStr)) return value;

  const parts = valueStr.split(".");
  if (parts.length === 1) return parts[0];

  const [integerPart, decimalPart] = parts;

  return `${integerPart}.${decimalPart.substring(0, precision)}`;
};

export const formatWithRejectCharsRegex = (value, rejectCharsRegex) => {
  if (!rejectCharsRegex) return value;

  const globalRegex = new RegExp(rejectCharsRegex, "g");

  return replace(globalRegex, "", value);
};

export const getTrimmedValue = (value, disableTrimOnBlur) => {
  if (disableTrimOnBlur || typeof value !== "string") return value;

  return value.trim();
};

export const preserveCursor = (e, updateValueFn) => {
  const input = e.target;
  const prevCursor = input.selectionStart;
  const prevValue = input.value;

  updateValueFn();

  const lengthDiff = input.value.length - prevValue.length;
  const newCursor = Math.max(0, prevCursor + lengthDiff);

  requestAnimationFrame(() => {
    if (document.activeElement !== input) return;
    input.setSelectionRange(newCursor, newCursor);
  });
};
