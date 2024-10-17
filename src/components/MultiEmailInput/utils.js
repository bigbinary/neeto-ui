import { pluck } from "ramda";

import { EMAIL_REGEX } from "./constants";

const getEmailsMap = (options = [], inputEmails = []) =>
  new Map([...inputEmails, ...options].map(option => [option.value, option]));

const processEmailOptions = (options = [], inputEmails = []) => {
  const emailsMap = getEmailsMap(options, inputEmails);

  return email => {
    const emailDetails = emailsMap.get(email) || { value: email };

    return formatEmailInputOption(emailDetails);
  };
};

export const formatEmailInputOption = ({ label, value, ...otherDetails }) => ({
  label: label ?? value,
  value,
  ...otherDetails,
  valid: EMAIL_REGEX.test(value),
});

export const pruneDuplicates = (inputValues, options) => {
  const emailProcessor = processEmailOptions(options, inputValues);
  const emails = pluck("value", inputValues);
  const uniqueValuesSet = new Set();
  const duplicates = [];

  emails.forEach(pristineEmail => {
    const email = pristineEmail.toLowerCase();
    if (uniqueValuesSet.has(email)) duplicates.push(pristineEmail);

    uniqueValuesSet.add(email);
  });

  const uniqueValues = Array.from(uniqueValuesSet);
  const uniqueEmails = uniqueValues.map(emailProcessor);

  return { uniqueEmails, duplicates };
};

export const renderValidEmails = values =>
  values.filter(email => email.valid && email);

export const getValidEmailsCount = values => renderValidEmails(values).length;

export const renderDefaultText = count => (count === 1 ? "email" : "emails");
