import { useEffect, useRef } from "react";

const useTimeout = (callback, delay) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) {
      return;
    }

    const id = setTimeout(() => savedCallback.current(), delay);

    // eslint-disable-next-line consistent-return
    return () => clearTimeout(id);
  }, [delay]);
};

export default useTimeout;
