import { parse, stringify } from "qs";
import { curry, isEmpty, isNil, omit, pipe, toPairs } from "ramda";

const matchesImpl = (pattern, object, __parent = object) => {
  if (object === pattern) return true;

  if (typeof pattern === "function" && pattern(object, __parent)) return true;

  if (isNil(pattern) || isNil(object)) return false;

  if (typeof pattern !== "object") return false;

  return Object.entries(pattern).every(([key, value]) =>
    matchesImpl(value, object[key], __parent)
  );
};

const matches = /*#__PURE__*/ curry((pattern, object) =>
  matchesImpl(pattern, object)
);

const transformObjectDeep = (
  object,
  keyValueTransformer,
  /** @type {undefined | ((any) => any)} */
  objectPreProcessor = undefined
) => {
  if (objectPreProcessor && typeof objectPreProcessor === "function") {
    object = objectPreProcessor(object);
  }

  if (Array.isArray(object)) {
    return object.map(obj =>
      transformObjectDeep(obj, keyValueTransformer, objectPreProcessor)
    );
  } else if (object === null || typeof object !== "object") {
    return object;
  }

  return Object.fromEntries(
    Object.entries(object).map(([key, value]) =>
      keyValueTransformer(
        key,
        transformObjectDeep(value, keyValueTransformer, objectPreProcessor)
      )
    )
  );
};

const preprocessForSerialization = object =>
  transformObjectDeep(
    object,
    (key, value) => [key, value],
    object => (typeof object?.toJSON === "function" ? object.toJSON() : object)
  );

export const getQueryParams = (options = {}) =>
  parse(location.search, { ignoreQueryPrefix: true, ...options });

export const modifyBy = /*#__PURE__*/ curry((pattern, modifier, array) =>
  array.map(item => (matches(pattern, item) ? modifier(item) : item))
);

export const snakeToCamelCase = string =>
  string.replace(/(_\w)/g, letter => letter[1].toUpperCase());

export const camelToSnakeCase = string =>
  string.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

export const buildUrl = (route, params) => {
  const placeHolders = [];
  toPairs(params).forEach(([key, value]) => {
    if (route.includes(`:${key}`)) {
      placeHolders.push(key);
      route = route.replace(`:${key}`, encodeURIComponent(value));
    }
  });

  const queryParams = pipe(
    omit(placeHolders),
    preprocessForSerialization,
    stringify
  )(params);

  return isEmpty(queryParams) ? route : `${route}?${queryParams}`;
};
