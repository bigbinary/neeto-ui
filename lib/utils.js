import { useEffect, useRef } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import { complement, equals } from "ramda";

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(utc);

export const useOnClickOutside = (insideRef, outsideRef, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!insideRef.current || insideRef.current.contains(event.target)) {
        return;
      }
      if (outsideRef.current) {
        // If Outside ref exists, trigger the handler if it contains the event target.
        if (outsideRef.current.contains(event.target)) {
          handler(event);
        }
        return;
      } else {
        handler(event);
      }
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [insideRef, outsideRef, handler]);
};

export const convertToDayjsObjects = (value) => {
  return value instanceof Array
    ? value.map((date) => (date ? dayjs(date) : date))
    : value && dayjs(value);
};

export const useSyncedRef = (ref) => {
  const innerRef = useRef();

  useEffect(() => {
    if (!ref) return;

    if (typeof ref === "function") {
      ref(innerRef.current);
    } else {
      ref.current = innerRef.current;
    }
  });

  return innerRef;
};

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
