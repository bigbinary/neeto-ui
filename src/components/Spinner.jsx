import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const SPINNER_THEMES = { dark: "dark", light: "light" };
const SPINNER_SIZES = { small: "small", medium: "medium" };

const Spinner = ({
  theme = "dark",
  size = SPINNER_SIZES.medium,
  className = "",
}) => (
  <span
    data-testid="spinner"
    className={classnames(
      "neeto-ui-spinner",
      {
        "neeto-ui-spinner--dark": theme === "dark",
        "neeto-ui-spinner--light": theme === "light",
        "neeto-ui-spinner--size-small": size === SPINNER_SIZES.small,
        "neeto-ui-spinner--size-medium": size === SPINNER_SIZES.medium,
      },
      [className]
    )}
  >
    <i className="neeto-ui-spinner__item" />
    <i className="neeto-ui-spinner__item" />
    <i className="neeto-ui-spinner__item" />
    <i className="neeto-ui-spinner__item" />
  </span>
);

Spinner.propTypes = {
  /**
   * To specify the theme of the Spinner.
   */
  theme: PropTypes.oneOf(Object.values(SPINNER_THEMES)),
  /**
   * To set the size of the spinner
   */
  size: PropTypes.oneOf(Object.values(SPINNER_SIZES)),
  /**
   * Provide external classnames to Spinner component.
   */
  className: PropTypes.string,
};

export default Spinner;
