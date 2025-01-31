import { useSyncExternalStore } from "react";

import { getFromLocalStorage, setToLocalStorage } from "utils";

const createSyncedStore = ({ initialValue, storageKey }) => {
  const listeners = new Set();

  const getStoredValue = () => getFromLocalStorage(storageKey, initialValue);

  const setStoredValue = value => {
    setToLocalStorage(storageKey, value);
    listeners.forEach(listener => listener());
  };

  const store = {
    value: getStoredValue(),
    getSnapshot: () => store.value,
    setValue: newValue => {
      store.value = newValue;
      setStoredValue(newValue);
    },
    subscribe: callback => {
      listeners.add(callback);

      const storageEventHandler = event => {
        if (event.key !== storageKey) return;

        store.value = getStoredValue();
        listeners.forEach(listener => listener());
      };

      if (listeners.size === 1) {
        window.addEventListener("storage", storageEventHandler);
      }

      return () => {
        listeners.delete(callback);

        if (listeners.size === 0) {
          window.removeEventListener("storage", storageEventHandler);
        }
      };
    },
  };

  return store;
};

const store = createSyncedStore({
  initialValue: [],
  storageKey: "recently-used-colors",
});

const useRecentlyUsedColors = () => [
  useSyncExternalStore(store.subscribe, store.getSnapshot),
  store.setValue,
];

export default useRecentlyUsedColors;
