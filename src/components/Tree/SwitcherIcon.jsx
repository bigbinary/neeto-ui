import React from "react";

import { Down, Right } from "neetoicons";

const SwitcherIcon = ({ expanded }) =>
  expanded ? <Down size={16} /> : <Right size={16} />;

export default SwitcherIcon;
