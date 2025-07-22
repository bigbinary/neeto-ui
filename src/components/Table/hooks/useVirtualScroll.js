import { useState, useRef, useEffect } from "react";

import { noop } from "neetocist";

import { TABLE_PAGINATION_HEIGHT } from "../constants";
import { getSelectAllRowsCalloutHeight } from "../utils";

export const useVirtualScroll = ({
  otherProps,
  rowData,
  pageSize,
  shouldShowSelectAllRowsCallout,
  shouldShowAllRowsSelectedCallout,
  headerHeight,
}) => {
  const [containerRect, setContainerRect] = useState({ top: 0, left: 0 });
  const tableContainerRef = useRef(null);

  useEffect(() => {
    const updateContainerRect = () => {
      if (!tableContainerRef.current) return;
      const rect = tableContainerRef.current.getBoundingClientRect();
      setContainerRect(rect);
    };

    updateContainerRect();

    window.addEventListener("scroll", updateContainerRect);
    window.addEventListener("resize", updateContainerRect);

    return () => {
      window.removeEventListener("scroll", updateContainerRect);
      window.removeEventListener("resize", updateContainerRect);
    };
  }, []);

  const calculateTableContainerHeight = () => {
    const isPaginationVisible =
      otherProps.pagination !== false && rowData.length > pageSize;

    let selectAllRowsCalloutHeight = 0;
    if (shouldShowSelectAllRowsCallout || shouldShowAllRowsSelectedCallout) {
      selectAllRowsCalloutHeight = getSelectAllRowsCalloutHeight();
    }

    const containerHeight = window.innerHeight - containerRect.top;

    return (
      containerHeight -
      headerHeight -
      (isPaginationVisible ? TABLE_PAGINATION_HEIGHT : 0) -
      selectAllRowsCalloutHeight
    );
  };

  return {
    tableRef: null,
    tableContainerRef,
    handleScroll: noop,
    calculatedScroll: {
      x: window.innerWidth - containerRect?.left,
      y: calculateTableContainerHeight(),
    },
  };
};
