import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Info } from "@bigbinary/neeto-icons";

import Button from "./Button";

const Label = ({
  children,
  className = "",
  required = false,
  helpIconProps = null,
  ...otherProps
}) => {
  const { onClick, icon, ...otherHelpIconProps } = helpIconProps || {};
  const HelpIcon = icon || Info;
  return (
    <label
      className={classnames("neeto-ui-label flex items-center", className)}
      {...otherProps}
    >
      {children}
      {required && <span aria-hidden>*</span>}
      {helpIconProps && (
        <Button
          className="ml-2"
          icon={HelpIcon}
          size="small"
          style="text"
          onClick={onClick}
          {...otherHelpIconProps}
        />
      )}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  required: PropTypes.bool,
  /**
   * Props for the help icon button
   */
  helpIconProps: PropTypes.shape({
    ...Button.propTypes,
  }),
};

export default Label;
