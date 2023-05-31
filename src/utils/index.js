import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import { complement, equals } from "ramda";

dayjs.extend(weekOfYear);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(utc);

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

export const noop = () => {};

export const hyphenize = string => {
  const fallbackString = "nui";

  if (string && string.replace) {
    return string
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

export const renderFocusOnFocusableElements = (
  ref,
  shouldFocusFirstFocusableElement = true
) => {
  const focusableElements =
    '[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  const firstFocusableElement =
    ref?.current?.querySelectorAll(focusableElements)[0];
  const focusableContent = ref?.current?.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent?.length - 1];

  document.addEventListener("keydown", e => {
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
  });

  if (!shouldFocusFirstFocusableElement) return;

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
