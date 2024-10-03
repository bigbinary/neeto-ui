import pureDayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { preprocessForSerialization } from "neetocist";
import { parse, stringify } from "qs";
import { complement, equals, isEmpty, omit, pipe, toPairs } from "ramda";

// eslint-disable-next-line import/extensions
import en from "src/translations/en.json";

pureDayjs.extend(weekOfYear);
pureDayjs.extend(weekday);
pureDayjs.extend(localeData);
pureDayjs.extend(utc);
pureDayjs.extend(timezone);

const getEnTranslationValue = translationKey =>
  translationKey.split(".").reduce((acc, key) => acc[key], en);

const getScrollbarWidth = () => {
  const parentDiv = document.createElement("div");
  parentDiv.style.visibility = "hidden";
  parentDiv.style.overflow = "scroll";
  document.body.appendChild(parentDiv);
  const childDiv = document.createElement("div");
  parentDiv.appendChild(childDiv);
  const scrollbarWidth = parentDiv.offsetWidth - childDiv.offsetWidth;
  parentDiv?.parentNode?.removeChild(parentDiv);

  return scrollbarWidth;
};

const hasTimezone = dateString => {
  const timezoneRegex = /Z|[+-]\d{2}:\d{2}$|GMT([+-]\d{4})?$/;

  return timezoneRegex.test(dateString);
};

// eslint-disable-next-line import/exports-last
export const dayjs = (...args) => {
  if (args.length > 0 && typeof args[0] === "string") {
    if (hasTimezone(args[0])) {
      args[0] = pureDayjs(args[0]);
    } else {
      const pureDayjsArgs = args.slice(0, Math.min(args.length, 2));

      args[0] = pureDayjs(...pureDayjsArgs).format("YYYY-MM-DD HH:mm:ss");
      args[1] = "YYYY-MM-DD HH:mm:ss";
    }
  }

  const timezone = pureDayjs.tz().$x.$timezone || pureDayjs.tz.guess();

  return args.length === 2
    ? pureDayjs.tz(...args, timezone)
    : pureDayjs.tz(...args);
};

Object.assign(dayjs, { ...pureDayjs });

export const getTimezoneAppliedDateTime = inputDateTime => {
  if (!inputDateTime) return null;

  const timezoneAppliedDateTime = date =>
    dayjs(date.format("YYYY-MM-DD HH:mm:ss"));

  return Array.isArray(inputDateTime)
    ? inputDateTime.map(timezoneAppliedDateTime)
    : timezoneAppliedDateTime(inputDateTime);
};

export const noop = () => {};

export const hyphenize = input => {
  const fallbackString = "nui";

  if (typeof input === "number") return String(input);

  if (input && typeof input === "string" && input.replace) {
    return input
      .replace(/[\s_]/g, "-")
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/-+/g, "-")
      .toLowerCase();
  }

  return fallbackString;
};

export const convertToDayjsObjects = value =>
  value instanceof Array
    ? value.map(date => (date ? dayjs(date) : date))
    : value && dayjs(value);

export class UniqueArray {
  constructor() {
    this.array = [];
  }

  add(item) {
    if (this.array.some(equals(item))) return false;
    this.array.push(item);

    return true;
  }

  remove(item) {
    this.array = this.array.filter(complement(equals(item)));
  }
}

export const trapFocusOnFocusableElements = ref => {
  const focusableElements =
    'button,[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  const firstFocusableElement =
    ref?.current?.querySelectorAll(focusableElements)[0];
  const focusableContent = ref?.current?.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent?.length - 1];

  const onKeyDown = e => {
    const isTabPressed = e.key === "Tab" || e.keyCode === 9;
    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  };

  document.addEventListener("keydown", onKeyDown);

  return () => document.removeEventListener("keydown", onKeyDown);
};

export const focusFirstFocusableElement = ref => {
  const focusableElements =
    'button,[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  const firstFocusableElement =
    ref?.current?.querySelectorAll(focusableElements)[0];

  firstFocusableElement?.focus();
};

export const hideScrollAndAddMargin = () => {
  const scrollbarWidth = getScrollbarWidth();
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = `${scrollbarWidth}px`;
};

export const showScrollAndRemoveMargin = () => {
  document.body.style.overflow = "auto";
  document.body.style.marginRight = "0px";
};

export const ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES = {
  colorBgContainer: "rgb(var(--neeto-ui-white))",
  colorBorder: "rgb(var(--neeto-ui-gray-300))",
  colorBorderSecondary: "rgb(var(--neeto-ui-gray-200))",
  colorFillAlter: "rgb(var(--neeto-ui-gray-100))",
  colorFillContent: "rgb(var(--neeto-ui-gray-100))",
  colorFillSecondary: "rgb(var(--neeto-ui-gray-100))",
  colorIcon: "rgb(var(--neeto-ui-gray-700))",
  colorIconHover: "rgb(var(--neeto-ui-gray-800))",
  colorLink: "rgb(var(--neeto-ui-primary-500))",
  colorLinkActive: "rgb(var(--neeto-ui-primary-800))",
  colorLinkHover: "rgb(var(--neeto-ui-primary-600))",
  colorPrimary: "rgb(var(--neeto-ui-primary-500))",
  colorSplit: "rgb(var(--neeto-ui-gray-100))",
  colorText: "rgb(var(--neeto-ui-gray-800))",
  colorTextDescription: "rgb(var(--neeto-ui-gray-700))",
  colorTextDisabled: "rgb(var(--neeto-ui-gray-600))",
  colorTextHeading: "rgb(var(--neeto-ui-black))",
  colorTextPlaceholder: "rgb(var(--neeto-ui-gray-500))",
  controlItemBgActive: "rgb(var(--neeto-ui-primary-100))",
  controlItemBgActiveHover: "rgb(var(--neeto-ui-pastel-purple))",
  controlItemBgHover: "rgb(var(--neeto-ui-gray-100))",
};

export const getQueryParams = (options = {}) =>
  parse(location.search, { ignoreQueryPrefix: true, ...options });

export const buildUrl = (route, params) => {
  const placeHolders = [];
  toPairs(params).forEach(([key, value]) => {
    if (!route.includes(`:${key}`)) return;
    placeHolders.push(key);
    route = route.replace(`:${key}`, encodeURIComponent(value));
  });

  const queryParams = pipe(
    omit(placeHolders),
    preprocessForSerialization,
    stringify
  )(params);

  return isEmpty(queryParams) ? route : `${route}?${queryParams}`;
};

export const getLocale = (i18n, t, translationKey) => {
  if (isEmpty(i18n)) return getEnTranslationValue(translationKey);

  return i18n.exists(translationKey)
    ? t(translationKey)
    : getEnTranslationValue(translationKey);
};

export const setToLocalStorage = (key, value) =>
  // eslint-disable-next-line @bigbinary/neeto/no-local-storage
  localStorage.setItem(key, JSON.stringify(value));

// eslint-disable-next-line @bigbinary/neeto/no-local-storage
export const removeFromLocalStorage = key => localStorage.removeItem(key);
