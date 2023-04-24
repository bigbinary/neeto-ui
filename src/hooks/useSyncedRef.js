import { useEffect, useRef } from "react";

const useSyncedRef = ref => {
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

export default useSyncedRef;
