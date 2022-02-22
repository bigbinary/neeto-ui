import { EMAIL_REGEX } from "../constants/EmailInput";

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
