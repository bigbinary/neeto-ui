import { useCallback, useEffect, useRef } from "react";

import { useFuncDebounce } from "neetocommons/react-utils";
import { mergeLeft } from "ramda";

/**
 * This hook can be used to add listeners to following scroll events.
 * onScroll => user scrolls in any direction.
 * onScrollUp => user scrolls towards top of the element.
 * onScrollDown => user scrolls towards end of the element.
 * onStartReached => user scrolled to the top of the element.
 * onEndReached => user scrolled to the end of the element.
 */

const defaultConfig = {
  passive: false,
  debounceDelay: 200,
  startThreshold: 0,
  endThreshold: 0,
};

const useScroll = (ref, configArg, callbacksArg = {}) => {
  const lastScrollTopRef = useRef(0);
  const callbacksRef = useRef();

  const config = mergeLeft(configArg, defaultConfig);
  callbacksRef.current = callbacksArg;

  const handleScrollDown = event => {
    const {
      target: { scrollTop, scrollHeight, clientHeight },
    } = event;

    const callbacks = callbacksRef.current;

    callbacks.onScrollDown?.(event);
    if (scrollTop + clientHeight >= scrollHeight - config.endThreshold) {
      callbacks.onEndReached?.(event);
    }
  };

  const handleScrollUp = event => {
    const scrollTop = event.target.scrollTop;
    const callbacks = callbacksRef.current;

    callbacks.onScrollUp?.(event);
    if (scrollTop <= config.startThreshold) {
      callbacks.onStartReached?.(event);
    }
  };

  const debouncedHandleScroll = useFuncDebounce(event => {
    const scrollTop = event.target.scrollTop;
    const lastScrollTop = lastScrollTopRef.current;
    const callbacks = callbacksRef.current;

    if (scrollTop === lastScrollTop) return;
    lastScrollTopRef.current = scrollTop;

    callbacks.onScroll?.(event);

    if (scrollTop > lastScrollTop) {
      // scrolling down
      handleScrollDown(event);
    } else {
      // scrolling up
      handleScrollUp(event);
    }
  }, config.debounceDelay);

  const handleScroll = useCallback(
    event => debouncedHandleScroll(event),
    [callbacksRef, config.debounceDelay]
  );

  useEffect(() => {
    const element = ref?.current;
    if (element) {
      element.addEventListener("scroll", handleScroll, {
        passive: config.passive,
      });
    }

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, [ref, config.passive, handleScroll]);
};

export default useScroll;
