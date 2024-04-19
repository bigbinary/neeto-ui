import React from "react";

import classnames from "classnames";
import { Left, Right } from "neetoicons";
import PropTypes from "prop-types";

import "styles/common";
import "styles/components/_pagination";

import { DOTS } from "./constants";
import usePaginationQueryParams from "./hooks/usePaginationQueryParams";
import { usePagination } from "./utils";

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
  const { updatePageInQueryParam } = usePaginationQueryParams();

  if (!navigate) navigate = updatePageInQueryParam;

  if (pageNo === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    if (!isLastPage) navigate(pageNo + 1);
  };

  const onPrevious = () => {
    if (!isFirstPage) navigate(pageNo - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  const isFirstPage = pageNo === 1;
  const isLastPage = pageNo === lastPage;

  return (
    <nav aria-label="Pagination Navigation" role="navigation">
      <ul className={classnames(["neeto-ui-pagination__wrapper", className])}>
        <li
          data-testid="left-navigate-button"
          tabIndex={0}
          className={classnames({
            "neeto-ui-pagination__item": true,
            "neeto-ui-pagination__item--navigate": true,
            disabled: isFirstPage,
          })}
          onClick={onPrevious}
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
                className="neeto-ui-pagination__item neeto-ui-pagination__item--dots"
                data-testid="dots"
                key={index}
              >
                &#8230;
              </li>
            );
          }

          return (
            <li
              aria-current={isActive && true}
              key={index}
              tabIndex={0}
              aria-label={
                isActive
                  ? `Current Page, Page ${pageNumber}`
                  : `Goto Page ${pageNumber}`
              }
              className={classnames("neeto-ui-pagination__item", {
                active: isActive,
              })}
              onClick={() => navigate(pageNumber)}
            >
              <a>{pageNumber}</a>
            </li>
          );
        })}
        <li
          data-testid="right-navigate-button"
          tabIndex={0}
          className={classnames({
            "neeto-ui-pagination__item": true,
            "neeto-ui-pagination__item--navigate": true,
            disabled: isLastPage,
          })}
          onClick={onNext}
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
   * To specify the callback which will be invoked when the navigate buttons are clicked. If not provided, the component will update pagination information in the URL query parameters.
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
   * To provide external className to the Pagination component.
   */
  className: PropTypes.string,
};

export default Pagination;
