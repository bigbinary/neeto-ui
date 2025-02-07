import React from "react";

import { useTranslation } from "react-i18next";

import { getLocale } from "utils";

import Button from "../../Button";
import Callout from "../../Callout";
import Typography from "../../Typography";

// eslint-disable-next-line @bigbinary/neeto/no-dumb-components-with-use-translation
const AllRowsSelectedCallout = ({
  calloutProps,
  onClearSelection,
  allRowsSelectedMessage,
  clearSelectionButtonLabel,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <Callout
      className="my-2"
      {...calloutProps}
      data-testid="clear-selections-callout"
    >
      <div className="neeto-ui-flex neeto-ui-gap-3">
        <Typography style="body2">
          {allRowsSelectedMessage ||
            getLocale(i18n, t, "neetoui.table.allRowsSelected")}
        </Typography>
        <Button
          data-testid="clear-selections-button"
          style="link"
          label={
            clearSelectionButtonLabel ||
            getLocale(i18n, t, "neetoui.table.clearSelection")
          }
          onClick={onClearSelection}
        />
      </div>
    </Callout>
  );
};

export default AllRowsSelectedCallout;
