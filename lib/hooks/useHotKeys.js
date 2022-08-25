import { useEffect } from "react";

const useHotKey = ({
  key = "Enter",
  action,
  dependencies = [],
  useShiftKey = false,
  useCmdKey = false,
  useAltKey = false,
}) => {
  const handleKeyDown = (e) => {
    if (useShiftKey && !e.shiftKey) return;

    if (useCmdKey && !e.metaKey) return;

    if (useAltKey && !e.altKey) return;

    if (key === e.key || key === e.code) {
      action(e);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, dependencies);

  return null;
};

export default useHotKey;
