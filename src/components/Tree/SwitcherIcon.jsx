import React from "react";

import { Down, Right } from "neetoicons";

const SwitcherIcon = ({ expanded }) =>
  expanded ? <Down size={20} /> : <Right size={20} />;

export default SwitcherIcon;
