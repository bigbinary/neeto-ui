import React, { useRef } from "react";

import { InfoRound } from "neetoicons";

import Popover from "components/Popover";
import Typography from "components/Typography";

const TitleWithInfoIcon = ({ title, description, ...rest }) => {
  const popoverRef = useRef();

  return (
    <span className="relative pr-5">
      {typeof title === "function" ? title(rest) : title}
      {description && (
        <>
          <span
            className="neeto-ui-table__column-title-info-icon"
            ref={popoverRef}
          >
            <InfoRound color="currentColor" size={14} />
          </span>
          <Popover
            appendTo={() => document.body}
            position="bottom"
            reference={popoverRef}
          >
            <Typography lineHeight="normal" style="body2">
              {description}
            </Typography>
          </Popover>
        </>
      )}
    </span>
  );
};

export default TitleWithInfoIcon;
