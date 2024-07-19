import { isPresent } from "neetocist";
import { is } from "ramda";

const transformObjectToDotNotation = (object, prefix = "") => {
  const result = [];

  Object.entries(object).forEach(([key, value]) => {
    if (!value) return;
    const nextKey = prefix ? `${prefix}.${key}` : key;
    if (is(Object, value)) {
      result.push(...transformObjectToDotNotation(value, nextKey));
    } else {
      result.push(nextKey);
    }
  });

  return result;
};

const getErrorFieldName = formikErrors =>
  transformObjectToDotNotation(formikErrors)?.[0];

export const getFieldsWithServerError = (status = {}) =>
  Object.keys(status).filter(fieldName => isPresent(status[fieldName]));

export const scrollToError = (formRef, errors, status) => {
  const fieldErrorName = getErrorFieldName(errors);
  const [fieldWithServerError] = getFieldsWithServerError(status);

  if (!fieldErrorName && !fieldWithServerError) return;

  const errorFieldName = fieldErrorName || fieldWithServerError;
  const errorFormElement = formRef.current.querySelector(
    `[name="${errorFieldName}"]`
  );

  errorFormElement?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};
