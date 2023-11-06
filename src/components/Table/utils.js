import { preprocessForSerialization } from "neetocist";
import { parse, stringify } from "qs";
import { isEmpty, omit, pipe, toPairs } from "ramda";

export const getQueryParams = (options = {}) =>
  parse(location.search, { ignoreQueryPrefix: true, ...options });

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
