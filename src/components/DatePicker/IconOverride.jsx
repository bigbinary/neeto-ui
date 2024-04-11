import React from "react";

const IconOverride = ({ icon: Icon }) => (
  <span className="neeto-ui-btn neeto-ui-btn--style-text neeto-ui-btn--size-medium neeto-ui-btn--icon-only">
    <Icon className="neeto-ui-btn__icon" size={20} />
  </span>
);

export default IconOverride;
