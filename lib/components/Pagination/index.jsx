import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Left, Right } from "@bigbinary/neeto-icons";

import { DOTS } from "./constants";
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
          tabIndex={0}
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
              tabIndex={0}
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
          tabIndex={0}
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
   * To provide external className to the Pagination component.
   */
  className: PropTypes.string,
};

export default Pagination;
