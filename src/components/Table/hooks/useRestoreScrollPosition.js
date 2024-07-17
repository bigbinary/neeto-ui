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
      setScrollPosition(key, 1);

      return;
    }

    if (scrollRef.current === null || isNil(scrollPositions[key])) return;

    setTimeout(() => scrollRef.current.scrollTo({ top: scrollPositions[key] }));
  }, [key, tableRef, loading]);

  const handleScroll = useFuncDebounce(event => {
    setScrollPosition(key, parseInt(event.target.scrollTop));
  });

  return { handleScroll };
};
