import { useEffect, useState } from "react";

export const useMutationObserver = (
  ref,
  hasTransitionCompleted,
  config = {}
) => {
  const [hasOverlayMutated, setHasOverlayMutated] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    if (!hasTransitionCompleted) return;
    const observer = new MutationObserver(() => setHasOverlayMutated(true));

    observer.observe(ref.current, config);

    return () => observer.disconnect();
  }, [ref, config]);

  return { hasOverlayMutated, setHasOverlayMutated };
};
