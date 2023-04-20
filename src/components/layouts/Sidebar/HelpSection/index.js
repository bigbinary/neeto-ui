/* eslint-disable react/display-name */
/* eslint-disable react/jsx-filename-extension */

import React, { forwardRef } from "react";

// eslint-disable-next-line @bigbinary/neeto/use-webpack-alias
import { Help } from "@bigbinary/neeto-icons";

const HelpSection = forwardRef((_, ref) => (
  <button
    className="neeto-ui-sidebar__link neeto-ui-sidebar__link--button shadow-none"
    data-cy="help-button"
    ref={ref}
  >
    <span className="neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center neeto-ui-sidebar__link-icon">
      <Help size={24} />
    </span>
  </button>
));

export default HelpSection;
