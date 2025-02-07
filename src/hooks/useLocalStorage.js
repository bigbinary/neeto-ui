/* eslint-disable @bigbinary/neeto/no-local-storage */

import { useState } from "react";

import { isNil } from "ramda";

import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "utils";

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() =>
    getFromLocalStorage(key, defaultValue)
  );

  const setValue = value =>
    setStoredValue(prevStoredValue => {
      const newValue =
        typeof value === "function" ? value(prevStoredValue) : value;

      if (isNil(newValue)) {
        removeFromLocalStorage(key);
      } else {
        setToLocalStorage(key, newValue);
      }

      return newValue;
    });

  return [storedValue, setValue];
};

export default useLocalStorage;
