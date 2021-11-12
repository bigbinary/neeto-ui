import React from "react";
import PropTypes from "prop-types";

import Button from "../../Button";

const SubTitle = ({ children, iconProps, ...otherProps }) => (
  <div
    data-cy={otherProps["data-cy"] || "menubar-subtitle-heading"}
    className="neeto-ui-menubar__subtitle"
  >
    {children}
    <div className="neeto-ui-menubar__subtitle-actions">
      {iconProps &&
        iconProps.map((iconProp, index) => (
          <Button style="text" size="large" key={index} {...iconProp} />
        ))}
    </div>
  </div>
);

SubTitle.propTypes = {
  children: PropTypes.node,
  iconProps: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)),
};

export default SubTitle;
