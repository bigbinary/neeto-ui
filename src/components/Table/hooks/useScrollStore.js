import { assocPath } from "ramda";
import { create } from "zustand";

export const useScrollStore = create(set => ({
  scrollPositions: {},
  setScrollPosition: (key, position) =>
    set(assocPath(["scrollPositions", key], position)),
}));

// export const useRegisterScroll = ref => {
//   const scrollPositions = useScrollStore(prop("scrollPositions"));
//   const key = window.location.pathname + window.location.search;

//   useEffect(() => {
//     console.log(ref);
//     if (!scrollPositions[key] || !ref) return;
//     ref.scrollTo?.({ top: scrollPositions[key] });
//   }, [key]);
// };
