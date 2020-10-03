import React from "react";
import Dropdown from "./Dropdown";
import classnames from "classnames";

const LeftSVG = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const RightSVG = () => (
  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const Pagination = ({ count, pageNo, pageSize, navigate, className }) => {
  let start = 0,
    end = 0;
  if (count) {
    start = pageNo > 1 ? (pageNo - 1) * pageSize + 1 : 1;
    end = count < pageNo * pageSize ? count : pageNo * pageSize;
  }
  let lastPage = false;
  if (count < pageNo * pageSize && count > (pageNo - 1) * pageSize) {
    lastPage = true;
  }

  const jumpToLast = () => {
    const lastPageIndex = parseInt(count / pageSize) + 1;
    navigate(lastPageIndex);
  };
  return (
    <div
      className={classnames([
        "flex flexRow items-center justify-start",
        className
      ])}
    >
      <Dropdown
        customTarget={() => (
          <p className="text-gray-600">
            <span className="font-semibold text-gray-800">
              {start} - {end}
            </span>{" "}
            of <span className="font-semibold text-purple-500">{count}</span>
          </p>
        )}
        interactionKind="hover"
        autoWidth
      >
        <li onClick={() => navigate(1)}>Jump to first</li>
        <li onClick={() => jumpToLast()}>Jump to last</li>
      </Dropdown>
      <div className="relative z-0 inline-flex ml-3 shadow-sm">
        <button
          className={classnames(
            [
              "relative inline-flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-l-md hover:text-gray-700 focus:z-10 focus:outline-none hover:bg-gray-100 active:bg-gray-100 active:text-gray-700"
            ],
            { "cursor-not-allowed": pageNo === 1 }
          )}
          aria-label="Previous"
          onClick={() => navigate(pageNo - 1)}
          disabled={pageNo === 1}
        >
          <LeftSVG />
        </button>
        <button
          className={classnames(
            [
              "relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-r-md hover:text-gray-700 focus:z-10 focus:outline-none hover:bg-gray-100 active:bg-gray-100 active:text-gray-700"
            ],
            { "cursor-not-allowed": lastPage }
          )}
          aria-label="Next"
          onClick={() => navigate(pageNo + 1)}
          disabled={lastPage}
        >
          <RightSVG />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
