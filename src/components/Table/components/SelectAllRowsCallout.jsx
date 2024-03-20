import React from "react";

import Button from "../../Button";
import Callout from "../../Callout";
import Typography from "../../Typography";

const SelectAllRowsCallout = ({
  calloutProps,
  onBulkSelectAllRows,
  selectAllRowButtonLabel,
  selectAllRowMessage,
}) => (
  <Callout className="my-2" {...calloutProps}>
    <div className="flex space-x-3">
      <Typography style="body2">{selectAllRowMessage}</Typography>
      <Button
        label={selectAllRowButtonLabel}
        style="link"
        onClick={onBulkSelectAllRows}
      />
    </div>
  </Callout>
);

export default SelectAllRowsCallout;
