export const hyphenize = (string, fallbackString = "nui") => {
  const stringToHyphenize = string ? string : fallbackString;

  return stringToHyphenize
    .replace(/[\s_]/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/-+/g, "-")
    .toLowerCase();
};
