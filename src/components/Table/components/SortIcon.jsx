import React from "react";

import { DownArrow, UpArrow } from "neetoicons";

import { TABLE_SORT_ORDERS } from "../constants";

const SortIcon = ({ sortOrder }) => {
  if (sortOrder === TABLE_SORT_ORDERS.asc) return <UpArrow size={14} />;

  if (sortOrder === TABLE_SORT_ORDERS.desc) return <DownArrow size={14} />;

  return null;
};

export default SortIcon;
