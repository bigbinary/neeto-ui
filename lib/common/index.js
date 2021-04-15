export const hyphenize = string => {
  return string
    .replace(/[\s_]/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
};
