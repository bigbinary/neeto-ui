import { pluck } from "ramda";

import { EMAIL_REGEX } from "./constants";

export const formatEmailInputOptions = label => ({
  label,
  value: label,
  valid: EMAIL_REGEX.test(label),
});

export const pruneDuplicates = inputValues => {
  const values = pluck("value", inputValues);
  const caseInsensitiveValues = values.map(value => value.toLowerCase());
  const uniqueValuesSet = new Set();
  const duplicates = [];

  caseInsensitiveValues.forEach((value, index) => {
    if (uniqueValuesSet.has(value)) {
      duplicates.push(values[index]);
    } else {
      uniqueValuesSet.add(value);
    }
  });

  const uniqueValues = Array.from(uniqueValuesSet);
  const uniqueEmails = uniqueValues.map(email =>
    formatEmailInputOptions(email)
  );

  return { uniqueEmails, duplicates };
};

export const renderValidEmails = values =>
  values.filter(email => email.valid && email);

export const getValidEmailsCount = values => renderValidEmails(values).length;

export const renderDefaultText = count => (count === 1 ? "email" : "emails");
