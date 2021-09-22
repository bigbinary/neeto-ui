import React from "react";
import PropTypes from "prop-types";

import { Button } from "../../index";

const SubTitle = ({ children, iconProps, ...otherProps }) => (
  <div
    data-cy={otherProps["data-cy"] || "menubar-subtitle-heading"}
    className="nui-menubar__subtitle"
  >
    <h6 className="nui-menubar__subtitle__heading">{children}</h6>
    <div className="nui-menubar__subtitle__actions">
      {iconProps &&
        iconProps.map((iconProp, index) => (
          <Button style="icon" key={index} {...iconProp}></Button>
        ))}
    </div>
  </div>
);

SubTitle.propTypes = {
  children: PropTypes.node,
  iconProps: Button.propTypes,
};

export default SubTitle;