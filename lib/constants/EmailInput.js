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

export const formatEmailInputOptions = label => ({
  label,
  value: label,
  valid: EMAIL_REGEX.test(label),
});

export const pruneDuplicates = inputValues => {
  const values = inputValues.map(({ value }) => value);
  const uniqueValues = [...new Set(values)];
  return uniqueValues.map(email => formatEmailInputOptions(email));
};

export const renderValidEmails = values =>
  values.filter(email => email.valid && email);

export const getEmailsCount = values => renderValidEmails(values).length;

export const renderDefaultText = count => (count === 1 ? "email" : "emails");
