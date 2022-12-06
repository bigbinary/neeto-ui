import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Typography from "../Typography";

const Title = ({ className, children }) => (
  <Typography
    style="h5"
    weight="semibold"
    lineHeight="snug"
    className={classnames("neeto-ui-mb-1", className)}
    data-testid="popover-title"
  >
    {children}
  </Typography>
);

export default Title;

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
