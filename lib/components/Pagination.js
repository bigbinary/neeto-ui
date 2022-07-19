import React, { useMemo } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
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
  siblingCount = 1,
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
    !isLastPage && navigate(pageNo + 1);
  };

  const onPrevious = () => {
    !isFirstPage && navigate(pageNo - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  const isFirstPage = pageNo === 1;
  const isLastPage = pageNo === lastPage;

  return (
    <nav role="navigation" aria-label="Pagination Navigation">
      <ul className={classnames(["neeto-ui-pagination__wrapper", className])}>
        <li
          className={classnames({
            "neeto-ui-pagination__item": true,
            "neeto-ui-pagination__item--navigate": true,
            disabled: isFirstPage,
          })}
          onClick={onPrevious}
          data-testid="left-navigate-button"
        >
          <a>
            <Left size={20} />
          </a>
        </li>
        {paginationRange.map((pageNumber, index) => {
          const isActive = pageNumber === pageNo;

          if (pageNumber === DOTS) {
            return (
              <li
                key={index}
                className="neeto-ui-pagination__item neeto-ui-pagination__item--dots"
                data-testid="dots"
              >
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={index}
              className={classnames("neeto-ui-pagination__item", {
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
          className={classnames({
            "neeto-ui-pagination__item": true,
            "neeto-ui-pagination__item--navigate": true,
            disabled: isLastPage,
          })}
          onClick={onNext}
          data-testid="right-navigate-button"
        >
          <a>
            <Right size={20} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  /**
   * To specify the total number of items.
   */
  count: PropTypes.number.isRequired,
  /**
   * To specify the current page number.
   */
  pageNo: PropTypes.number,
  /**
   * To specify the callback which will be invoked when the navigate buttons are clicked.
   */
  navigate: PropTypes.func,
  /**
   * To specify the size of a single page.
   */
  pageSize: PropTypes.number.isRequired,
  /**
   * To specify the number of siblings to be shown before and after the current page number.
   */
  siblingCount: PropTypes.number,
  /**
   * To provide external className to the pagination component.
   */
  className: PropTypes.string,
};

export default Pagination;
