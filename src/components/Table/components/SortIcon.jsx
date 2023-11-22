import React from "react";

import { DownArrow, UpArrow } from "neetoicons";

const SortIcon = ({ sortOrder }) => {
  if (sortOrder === "ascend") return <UpArrow size={14} />;

  if (sortOrder === "descend") return <DownArrow size={14} />;

  return null;
};

export default SortIcon;
