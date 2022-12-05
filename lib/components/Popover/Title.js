import React from "react";
import PropTypes from "prop-types";
import Typography from "../Typography";
import classnames from "classnames";

const Title = ({ className, children }) => (
  <Typography
    style="h5"
    weight="semibold"
    lineHeight="snug"
    className={classnames("neeto-ui-mb-1", className)}
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