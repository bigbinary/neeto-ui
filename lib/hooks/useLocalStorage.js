import { useState } from "react";

import { isNil } from "ramda";

const getStorageValue = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  return JSON.parse(saved) || defaultValue;
};

const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() =>
    getStorageValue(key, defaultValue)
  );

  const setValue = value => {
    if (isNil(value)) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
