import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import Typography from "../Typography";

const Title = ({ className, children }) => (
  <Typography
    className={classnames("neeto-ui-mb-1", className)}
    data-testid="popover-title"
    lineHeight="snug"
    style="h5"
    weight="semibold"
  >
    {children}
  </Typography>
);

Title.propTypes = {
  /**
   * To specify className to be applied to the Popover Title.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered inside the Popover Title.
   */
  children: PropTypes.node,
};

export default Title;
