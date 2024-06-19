import { pluck } from "ramda";

import { EMAIL_REGEX } from "./constants";

export const formatEmailInputOptions = label => ({
  label,
  value: label,
  valid: EMAIL_REGEX.test(label),
});

export const pruneDuplicates = inputValues => {
  const values = pluck("value", inputValues);
  const uniqueValues = [...new Set(values)];
  const duplicates = values.filter(
    (item, index) => values.indexOf(item) !== index
  );

  return {
    uniqueEmails: uniqueValues.map(email => formatEmailInputOptions(email)),
    duplicates,
  };
};

export const renderValidEmails = values =>
  values.filter(email => email.valid && email);

export const getValidEmailsCount = values => renderValidEmails(values).length;

export const renderDefaultText = count => (count === 1 ? "email" : "emails");
