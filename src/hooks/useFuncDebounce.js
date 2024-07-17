import { useRef } from "react";

const useFuncDebounce = (func, delay = 350) => {
  const timer = useRef(null);
  const debouncedFunc = (...args) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => func(...args), delay);
  };
  debouncedFunc.cancel = () => clearTimeout(timer.current);

  return debouncedFunc;
};

export default useFuncDebounce;
