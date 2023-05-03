import { COLORS } from "./constants";

export const getInitials = fullName => {
  if (fullName && typeof fullName === "string") {
    const allNames = fullName.trim().split(" ");
    const initials = allNames.reduce((acc, curr, index) => {
      if (index === 0 || index === allNames.length - 1) {
        acc = `${acc}${curr.charAt(0).toUpperCase()}`;
      }

      return acc;
    }, "");

    return initials;
  }

  return "";
};

export const getRandomBackgroundColor = avatarString => {
  const charCode =
    (avatarString.charCodeAt(0) || 0) + (avatarString.charCodeAt(1) || 0);
  const bgColor = COLORS[(charCode % 65) % COLORS.length] || COLORS[0];

  return bgColor;
};
