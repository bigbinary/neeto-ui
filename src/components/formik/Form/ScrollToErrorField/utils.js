import { is } from "ramda";

const transformObjectToDotNotation = (object, prefix = "") => {
  const result = [];

  Object.keys(object).forEach(key => {
    const value = object[key];
    if (value && is(Object, value)) {
      const nextPrefix = prefix ? `${prefix}.${key}` : key;
      result.push(...transformObjectToDotNotation(value, nextPrefix));
    } else if (value) {
      const nextKey = prefix ? `${prefix}.${key}` : key;
      result.push(nextKey);
    }
  });

  return result;
};

export const getErrorFieldName = formikErrors =>
  transformObjectToDotNotation(formikErrors)?.[0];
