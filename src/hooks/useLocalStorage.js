/* eslint-disable @bigbinary/neeto/no-local-storage */

import { useState } from "react";

import { isNil } from "ramda";

import { removeFromLocalStorage, setToLocalStorage } from "utils";

const getStorageValue = (key, defaultValue) => {
  try {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return defaultValue;
  }
};

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() =>
    getStorageValue(key, defaultValue)
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
