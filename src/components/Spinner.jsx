import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const SPINNER_THEMES = { dark: "dark", light: "light" };

const Spinner = ({ theme = "dark", className = "" }) => (
  <span
    data-testid="spinner"
    className={classnames(
      "neeto-ui-spinner",
      {
        "neeto-ui-spinner--dark": theme === "dark",
        "neeto-ui-spinner--light": theme === "light",
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
   * Provide external classnames to Spinner component.
   */
  className: PropTypes.string,
};

export default Spinner;
