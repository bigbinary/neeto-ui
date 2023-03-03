import React, { forwardRef } from "react";

import { Help } from "@bigbinary/neeto-icons";

const HelpSection = forwardRef((_, ref) => (
  <button
    className="shadow-none neeto-ui-sidebar__link neeto-ui-sidebar__link--button"
    data-cy="help-button"
    ref={ref}
  >
    <span className="neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center neeto-ui-sidebar__link-icon">
      <Help size={24} />
    </span>
  </button>
));

export default HelpSection;
