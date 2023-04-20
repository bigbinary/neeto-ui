export const truncate = (str, length) =>
  str && str.length > length ? `${str.substring(0, length - 3)}...` : str;
