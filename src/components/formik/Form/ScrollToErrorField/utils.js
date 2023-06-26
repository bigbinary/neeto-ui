import { is } from "ramda";

const transformObjectToDotNotation = (object, prefix = "") => {
  const result = [];

  Object.entries(object).forEach(([key, value]) => {
    if (value) {
      const nextKey = prefix ? `${prefix}.${key}` : key;
      if (is(Object, value)) {
        result.push(...transformObjectToDotNotation(value, nextKey));
      } else {
        result.push(nextKey);
      }
    }
  });

  return result;
};

export const getErrorFieldName = formikErrors =>
  transformObjectToDotNotation(formikErrors)?.[0];
