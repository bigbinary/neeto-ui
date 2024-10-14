import pureDayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";

import timezone from "./timezonePlugin";

pureDayjs.extend(weekOfYear);
pureDayjs.extend(weekday);
pureDayjs.extend(localeData);
pureDayjs.extend(utc);
pureDayjs.extend(timezone);

class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  set(key, value) {
    if (this.cache.size >= this.limit) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }

  has(key) {
    return this.cache.has(key);
  }
}

const hasTimezone = dateString => {
  const timezoneRegex = /Z|[+-]\d{2}:\d{2}$|[+-]\d{4}$|GMT([+-]\d{4})?$/;

  return timezoneRegex.test(dateString);
};

const cache = new LRUCache(1000);

const dayjs = (...args) => {
  const cacheKey = JSON.stringify(args);

  if (cache.has(cacheKey) && args[0] !== undefined) return cache.get(cacheKey);

  const userTimezone = pureDayjs.tz().$x.$timezone;
  const browserTimezone = pureDayjs.tz.guess();
  const timezone = userTimezone || browserTimezone;

  if (userTimezone === browserTimezone || userTimezone === undefined) {
    const result = pureDayjs(...args);

    if (args[0] !== undefined) cache.set(cacheKey, result);

    return result;
  }

  if (args.length > 0 && (typeof args[0] === "string" || args[0] === null)) {
    const pureDayjsArgs = args.slice(0, Math.min(args.length, 2));

    if (hasTimezone(args[0])) {
      args[0] = pureDayjs(...pureDayjsArgs);
    } else {
      args[0] = pureDayjs(...pureDayjsArgs).format("YYYY-MM-DD HH:mm:ss");
      args[1] = "YYYY-MM-DD HH:mm:ss";
    }
  }

  if (args[0]?.toString() === "Invalid Date") {
    const result = pureDayjs(...args);

    if (args[0] !== undefined) cache.set(cacheKey, result);

    return result;
  }

  const result =
    args.length === 2 ? pureDayjs.tz(...args, timezone) : pureDayjs.tz(...args);

  if (args[0] !== undefined) cache.set(cacheKey, result);

  return result;
};

Object.assign(dayjs, { ...pureDayjs });

export default dayjs;
