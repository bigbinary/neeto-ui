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
  <Callout
    className="my-2"
    {...calloutProps}
    data-testid="select-all-rows-callout"
  >
    <div className="neeto-ui-flex neeto-ui-gap-3">
      <Typography style="body2">{selectAllRowMessage}</Typography>
      <Button
        data-testid="select-all-rows-button"
        label={selectAllRowButtonLabel}
        style="link"
        onClick={onBulkSelectAllRows}
      />
    </div>
  </Callout>
);

export default SelectAllRowsCallout;
