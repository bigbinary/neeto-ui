import React from "react";

import { Info } from "neetoicons";

import Tooltip from "components/Tooltip";

const TitleWithInfoIcon = ({ title, description, ...rest }) => (
  <span className="neeto-ui-flex neeto-ui-items-center neeto-ui-gap-1">
    {typeof title === "function" ? title(rest) : title}
    {description && (
      <Tooltip content={description}>
        <span className="neeto-ui-cursor-pointer">
          <Info size={16} />
        </span>
      </Tooltip>
    )}
  </span>
);

export default TitleWithInfoIcon;
