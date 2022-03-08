import React from "react";
import PropTypes from "prop-types";

import classnames from "classnames";

const SPINNER_THEMES = {
  dark: "dark",
  light: "light",
};

const Spinner = ({ theme, className }) => {
  const spinnerItemClassName = classnames(
    "neeto-ui-spinner__item",
    {
      "neeto-ui-bg-gray-800": theme === "dark",
    },
    {
      "neeto-ui-bg-white": theme === "light",
    }
  );
  return (
    <span className={classnames("neeto-ui-spinner", [className])}>
      <i className={spinnerItemClassName}></i>
      <i className={spinnerItemClassName}></i>
      <i className={spinnerItemClassName}></i>
      <i className={spinnerItemClassName}></i>
    </span>
  );
};

Spinner.propTypes = {
  /**
   * To specify the theme of the spinner.
   */
  theme: PropTypes.oneOf(Object.values(SPINNER_THEMES)),
  /**
   * Provide external classnames to spinner component.
   */
  className: PropTypes.string,
};

Spinner.defaultProps = {
  theme: "dark",
  className: null,
};

export default Spinner;
