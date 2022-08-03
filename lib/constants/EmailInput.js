export const EMAIL_REGEX = new RegExp(
  "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$",
  "i"
);

export const UNSTRICT_EMAIL_REGEX =
  /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;

export const EMAIL_SEPARATION_REGEX = /[^\s,]+/g;

const STYLES = {
  border: {
    default: "1px solid rgb(var(--neeto-ui-gray-400))",
    error: "1px solid rgb(var(--neeto-ui-error-700)) !important",
  },
  color: {
    default: "rgb(var(--neeto-ui-gray-800))",
    error: "rgb(var(--neeto-ui-error-700)) !important",
  },
};

export const CUSTOM_STYLES = {
  input: (styles) => ({
    ...styles,
    overflow: "hidden",
  }),
  multiValue: (styles, { data: { valid } }) => ({
    ...styles,
    border: valid ? STYLES.border.default : STYLES.border.error,
    color: valid ? STYLES.color.default : STYLES.color.error,
  }),
};
