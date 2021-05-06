export const hyphenize = (string) => {
  const fallbackString = "nui";

  if (string) {
    return string
      .replace(/[\s_]/g, "-")
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/-+/g, "-")
      .toLowerCase();
  } else {
    return fallbackString;
  }
};
