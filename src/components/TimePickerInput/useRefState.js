import { useState, useRef } from "react";

// A wrapper hook around useState, that updates a ref as well, useful when dealing directly with dom event listeners.
const useRefState = val => {
  // eslint-disable-next-line react/hook-use-state
  const [value, _setValue] = useState(val);
  const valueRef = useRef(value);

  const setValue = val => {
    valueRef.current = val;
    _setValue(val);
  };

  return [value, valueRef, setValue];
};

export default useRefState;
