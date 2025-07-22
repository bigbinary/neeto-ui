import { useState, useRef, useCallback } from "react";

import { useRestoreScrollPosition } from "./useRestoreScrollPosition";

import { TABLE_PAGINATION_HEIGHT } from "../constants";
import { getSelectAllRowsCalloutHeight } from "../utils";

export const useScroll = ({
  fixedHeight,
  enableColumnReorder,
  loading,
  otherProps,
  rowData,
  pageSize,
  shouldShowSelectAllRowsCallout,
  shouldShowAllRowsSelectedCallout,
  headerHeight,
}) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const resizeObserver = useRef(
    new ResizeObserver(([entry]) =>
      setContainerHeight(entry.contentRect.height)
    )
  );
  const scrollRef = useRef(null);

  const tableRef = useCallback(
    table => {
      scrollRef.current = table;

      if (!fixedHeight) return;

      const observer = resizeObserver.current;

      if (table !== null) {
        const targetNode = enableColumnReorder
          ? table?.parentNode?.parentNode
          : table?.parentNode;

        observer.observe(targetNode);
      } else if (observer) {
        observer.disconnect();
      }
    },
    [resizeObserver.current, fixedHeight, enableColumnReorder]
  );

  const { handleScroll } = useRestoreScrollPosition({
    tableRef,
    scrollRef,
    loading,
  });

  const calculateTableContainerHeight = () => {
    const isPaginationVisible =
      otherProps.pagination !== false && rowData.length > pageSize;

    let selectAllRowsCalloutHeight = 0;
    if (shouldShowSelectAllRowsCallout || shouldShowAllRowsSelectedCallout) {
      selectAllRowsCalloutHeight = getSelectAllRowsCalloutHeight();
    }

    return (
      containerHeight -
      headerHeight -
      (isPaginationVisible ? TABLE_PAGINATION_HEIGHT : 0) -
      selectAllRowsCalloutHeight
    );
  };

  return {
    tableRef,
    tableContainerRef: null,
    handleScroll,
    calculatedScroll: {
      x: "max-content",
      y: calculateTableContainerHeight(),
    },
  };
};
