import React from "react";

const MemoizedChildren = React.memo(
  ({ children }) => children,
  (_, { shouldUpdate }) => !shouldUpdate
);

MemoizedChildren.displayName = "MemoizedChildren";

export default MemoizedChildren;
