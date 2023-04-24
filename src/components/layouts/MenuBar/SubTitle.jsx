import React from "react";

import PropTypes from "prop-types";

import Button from "components/Button";

const SubTitle = ({ children, iconProps, ...otherProps }) => (
  <div
    className="neeto-ui-menubar__subtitle"
    data-cy={otherProps["data-cy"] || "menubar-subtitle-heading"}
  >
    {children}
    <div className="neeto-ui-menubar__subtitle-actions">
      {iconProps &&
        iconProps.map((iconProp, index) => (
          <Button key={index} style="text" {...iconProp} />
        ))}
    </div>
  </div>
);

SubTitle.propTypes = {
  /**
   * To specify the content to be rendered as the SubTitle.
   */
  children: PropTypes.node,
  /**
   * To specify the icon properties.
   */
  iconProps: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)),
};

export default SubTitle;
