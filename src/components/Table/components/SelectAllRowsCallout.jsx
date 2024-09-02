import React, { forwardRef } from "react";

import Button from "../../Button";
import Callout from "../../Callout";
import Typography from "../../Typography";

const SelectAllRowsCallout = forwardRef(
  (
    {
      calloutProps,
      onBulkSelectAllRows,
      selectAllRowButtonLabel,
      selectAllRowMessage,
    },
    ref
  ) => (
    <Callout
      className="my-2"
      {...{ ...calloutProps, ref }}
      data-testid="select-all-rows-callout"
    >
      <div className="flex space-x-3">
        <Typography style="body2">{selectAllRowMessage}</Typography>
        <Button
          data-testid="select-all-rows-button"
          label={selectAllRowButtonLabel}
          style="link"
          onClick={onBulkSelectAllRows}
        />
      </div>
    </Callout>
  )
);

SelectAllRowsCallout.displayName = "SelectAllRowsCallout";

export default SelectAllRowsCallout;
