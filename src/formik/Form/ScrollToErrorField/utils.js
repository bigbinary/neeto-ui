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

export const scrollToError = (formRef, errors) => {
  const fieldErrorName = getErrorFieldName(errors);
  if (!fieldErrorName) return;

  const errorFormElement = formRef.current.querySelector(
    `[name="${fieldErrorName}"]`
  );

  errorFormElement?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};
