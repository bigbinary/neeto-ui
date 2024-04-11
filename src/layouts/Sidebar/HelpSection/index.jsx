/* eslint-disable react/display-name */

import React, { forwardRef } from "react";

import { Help } from "neetoicons";

const HelpSection = forwardRef((_, ref) => (
  <button
    {...{ ref }}
    className="neeto-ui-sidebar__link neeto-ui-sidebar__link--button shadow-none"
    data-cy="help-button"
  >
    <span className="neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center neeto-ui-sidebar__link-icon">
      <Help size={24} />
    </span>
  </button>
));

HelpSection.displayName = "HelpSection";

export default HelpSection;
