import React, { useMemo } from "react";
import classnames from "classnames";
import { Left, Right } from "@bigbinary/neeto-icons";

const DOTS = "...";

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

const usePagination = ({ count, pageSize, siblingCount = 1, pageNo }) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(count / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + pageNo + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    // If the number of pages is less than the page numbers we want to show in our
    // paginationComponent, we return the range [1..totalPageCount]
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    // Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    const leftSiblingIndex = Math.max(pageNo - siblingCount, 1);
    const rightSiblingIndex = Math.min(pageNo + siblingCount, totalPageCount);

    // We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // Case 2: No left dots to show, but rights dots to be shown
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    // Case 3: No right dots to show, but left dots to be shown
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    // Case 4: Both left and right dots to be shown
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [count, pageSize, siblingCount, pageNo]);

  return paginationRange;
};

const Pagination = ({
  count = 0,
  pageNo,
  navigate,
  pageSize,
  siblingCount,
  className = "",
}) => {
  const paginationRange = usePagination({
    pageNo,
    count,
    siblingCount,
    pageSize,
  });

  if (pageNo === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    navigate(pageNo + 1);
  };

  const onPrevious = () => {
    navigate(pageNo - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <nav role="navigation" aria-label="Pagination Navigation">
      <ul className={classnames(["nui-pagination__wrapper", className])}>
        <li
          className={classnames(
            "nui-pagination__item nui-pagination__item--navigate",
            {
              disabled: pageNo === 1,
            }
          )}
          onClick={onPrevious}
        >
          <a>
            <Left />
          </a>
        </li>
        {paginationRange.map((pageNumber) => {
          const isActive = pageNumber === pageNo;

          if (pageNumber === DOTS) {
            return (
              <li className="nui-pagination__item nui-pagination__item--dots">
                &#8230;
              </li>
            );
          }

          return (
            <li
              className={classnames("nui-pagination__item", {
                active: isActive,
              })}
              onClick={() => navigate(pageNumber)}
              aria-label={
                isActive
                  ? `Current Page, Page ${pageNumber}`
                  : `Goto Page ${pageNumber}`
              }
              aria-current={isActive && true}
            >
              <a>{pageNumber}</a>
            </li>
          );
        })}
        <li
          className={classnames(
            "nui-pagination__item nui-pagination__item--navigate",
            {
              disabled: pageNo === lastPage,
            }
          )}
          onClick={onNext}
        >
          <a>
            <Right />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
