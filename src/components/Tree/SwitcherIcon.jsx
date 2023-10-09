import React from "react";

import { Down, Up } from "neetoicons";

const SwitcherIcon = ({ expanded }) =>
  expanded ? <Up size={20} /> : <Down size={20} />;

export default SwitcherIcon;
