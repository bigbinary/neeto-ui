import { useEffect } from "react";

import { assocPath, isNil, prop } from "ramda";
import { create } from "zustand";

import useFuncDebounce from "hooks/useFuncDebounce";

export const useScrollStore = create(set => ({
  scrollPositions: {},
  setScrollPosition: (key, position) =>
    set(assocPath(["scrollPositions", key], position)),
}));

export const useRestoreScrollPosition = ({ tableRef, scrollRef, loading }) => {
  const key = window.location.pathname;
  const scrollPositions = useScrollStore(prop("scrollPositions"));
  const setScrollPosition = useScrollStore(prop("setScrollPosition"));

  useEffect(() => {
    if (loading) {
      setScrollPosition(key, 0);

      return;
    }

    if (scrollRef.current === null || isNil(scrollPositions[key])) return;

    setTimeout(() => {
      const position = scrollPositions[key];
      const config = position === 0 ? { index: 0 } : { top: position };
      scrollRef.current.scrollTo(config);
    });
  }, [key, tableRef, loading]);

  const handleScroll = useFuncDebounce(event => {
    setScrollPosition(key, parseInt(event.target.scrollTop));
  });

  return { handleScroll };
};
