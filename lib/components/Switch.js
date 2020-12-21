import React from "react";
import classnames from "classnames";

const CheckedState = ({ checked }) => (
  <span
    className={classnames(
      "absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-100 ease-out opacity-0",
      {
        "opacity-0 ease-out duration-100": !checked,
        "opacity-100 ease-in duration-200": checked
      }
    )}
  >
    <svg
      className="w-3 h-3 text-indigo-600"
      fill="currentColor"
      viewBox="0 0 12 12"
    >
      <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
    </svg>
  </span>
);

const UncheckedState = ({ checked }) => (
  <span
    className={classnames(
      "absolute inset-0 flex items-center justify-center w-full h-full transition-opacity duration-200 ease-in opacity-100",
      {
        "opacity-100 ease-in duration-200": !checked,
        "opacity-0 ease-out duration-100": checked
      }
    )}
  >
    <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 12">
      <path
        d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const Switch = props => {
  const {
    name,
    checked = false,
    className = "",
    onChange,
    round = true,
    square = false,
    disabled = false,
    label = null,
    showStatus = null,
    id,
    ...otherProps
  } = props;
  return (
    <div
      className={classnames([
        "flex flex-row items-center justify-start",
        className
      ])}
    >
      <label className="flex m-0">
        <span
          role="checkbox"
          tabIndex="0"
          aria-checked="false"
          className={classnames(
            "relative inline-flex flex-shrink-0 h-5 w-10 border-2 border-transparent rounded-full transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline",
            {
              "bg-gray-100": disabled,
              "bg-gray-300 cursor-pointer": !checked && !disabled,
              "bg-purple-500 cursor-pointer": checked && !disabled
            }
          )}
          {...otherProps}
        >
          <input
            id={id}
            type="checkbox"
            name={name}
            className={"opacity-0 h-0 w-0"}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            readOnly={disabled}
          />
          <span
            aria-hidden="true"
            className={classnames(
              "relative inline-block w-4 h-4 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow",
              {
                "translate-x-0": !checked,
                "translate-x-5": checked
              }
            )}
          >
            {checked ? (
              <CheckedState checked={checked} />
            ) : (
                <UncheckedState checked={checked} />
              )}
          </span>
        </span>
      </label>
      {label && <span className="ml-2 switch__label">{label}</span>}
      {showStatus && (
        <span className="switch__label">{checked ? "Active" : "Inactive"}</span>
      )}
    </div>
  );
};

export default Switch;
