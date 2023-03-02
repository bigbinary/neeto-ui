import { Help } from "@bigbinary/neeto-icons";
import React, { forwardRef } from "react";

const HelpSection = forwardRef((_,ref) => (
  <button
    ref={ref}
    data-cy="help-button"
    className="shadow-none neeto-ui-flex neeto-ui-items-center neeto-ui-justify-start neeto-ui-w-full neeto-ui-sidebar__link neeto-ui-sidebar__link--button"
  >
    <span className="neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center neeto-ui-sidebar__link-icon">
      <Help size={24} />
    </span>
  </button>
));

export default HelpSection;
