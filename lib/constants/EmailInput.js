export const EMAIL_REGEX = new RegExp(
  "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$",
  "i"
);

export const EMAIL_SEPARATION_REGEX = /[^\s,]+/g;

const STYLES = {
  default: "none",
  error: "thin dashed #f56a58 !important",
};

export const CUSTOM_STYLES = {
  input: styles => ({
    ...styles,
    overflow: "hidden",
  }),
  multiValue: (styles, { data: { valid } }) => ({
    ...styles,
    border: valid ? STYLES.default : STYLES.error,
  }),
};
