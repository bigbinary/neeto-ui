import React from "react";
import Dropdown from "./Dropdown";
import classnames from "classnames";

const Pagination = ({
  count = 0,
  pageNo,
  pageSize,
  navigate,
  className = "",
  emptyPageMsg = "No records",
}) => {
  const maxPageNo = Math.ceil(count / pageSize);
  const isPageEmpty = count === 0;
  const startIndexOfCurrentPage = isPageEmpty ? 0 : (pageNo - 1) * pageSize + 1;
  const endIndexOfCurrentPage = Math.min(count, pageNo * pageSize);
  const isLastPage = pageNo === maxPageNo;

  const baseClasses = [
    "relative inline-flex justify-center items-center w-8 h-8 text-sm font-medium text-gray-400",
    "transition duration-150 ease-in-out bg-white border border-gray-300 focus:outline-none",
  ];

  const activeClasses =
    "hover:bg-gray-50 hover:text-gray-700 active:bg-gray-100 active:text-gray-700";
  const disabledClasses = "cursor-not-allowed bg-gray-100";

  const disableNavigateBack = isPageEmpty || pageNo === 1;
  const disableNavigateForward = isPageEmpty || isLastPage;

  return (
    <div
      className={classnames([
        "flex flex-row items-center justify-start",
        className,
      ])}
    >
      <Dropdown
        customTarget={() => (
          <p className="text-gray-600 cursor-pointer" data-cy="pagination-indexes">
            <span className="font-semibold text-gray-800">
              {startIndexOfCurrentPage} - {endIndexOfCurrentPage}
            </span>{" "}
            of <span className="font-semibold text-purple-500" data-cy="pagination-total">{count}</span>
          </p>
        )}
        interactionKind="hover"
        disabled={
          isPageEmpty || (disableNavigateBack && disableNavigateForward)
        }
        autoWidth
      >
        {isPageEmpty ? (
          <li>{emptyPageMsg}</li>
        ) : (
          <>
            {!disableNavigateBack && (
              <li data-cy="paginate-jump-to-first" onClick={() => navigate(1)}>
                Jump to first
              </li>
            )}
            {!disableNavigateForward && (
              <li
                data-cy="paginate-jump-to-last"
                onClick={() => navigate(maxPageNo)}
              >
                Jump to last
              </li>
            )}
          </>
        )}
      </Dropdown>
      <div className="relative z-0 inline-flex ml-3 shadow-sm">
        <button
          className={classnames(baseClasses, "rounded-l-md border-r-0", {
            [activeClasses]: !disableNavigateBack,
            [disabledClasses]: disableNavigateBack,
          })}
          aria-label="Previous"
          onClick={() => navigate(pageNo - 1)}
          disabled={disableNavigateBack}
          data-cy="paginate-previous-button"
        >
          <i className="text-lg leading-none align-middle ri-arrow-left-s-line"></i>
        </button>
        <button
          className={classnames(baseClasses, "rounded-r-md", {
            [activeClasses]: !disableNavigateForward,
            [disabledClasses]: disableNavigateForward,
          })}
          aria-label="Next"
          onClick={() => navigate(pageNo + 1)}
          disabled={disableNavigateForward}
          data-cy="paginate-next-button"
        >
          <i className="text-lg leading-none align-middle ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
