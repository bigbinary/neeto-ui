import React from "react";

const Today = ({ onClick }) => (
  <div className="text-center">
    <button
      {...{ onClick }}
      className="neeto-ui-rounded-md hover:neeto-ui-bg-gray-200 px-2 py-1 text-xs font-medium transition duration-300 ease-in-out"
      data-cy="year-month-mode-today"
    >
      Today
    </button>
  </div>
);

export default Today;
