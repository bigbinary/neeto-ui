import React from "react";

import { Down, Right } from "neetoicons";

const SwitcherIcon = ({ expanded }) =>
  expanded ? (
    <Down className="neeto-ui-relative" size={16} />
  ) : (
    <Right className="neeto-ui-relative" size={16} />
  );

export default SwitcherIcon;
