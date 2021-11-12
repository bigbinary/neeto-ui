import React, { useState } from "react";

import SubHeader from "../../lib/components/layouts/SubHeader";

export default {
  title: "Layouts/SubHeader",
  component: SubHeader,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          '`import { SubHeader } from "@bigbinary/neetoui/v2/layouts";`',
      },
    },
  },
};

export const BasicUsage = () => {
  const [searchString, setSearchString] = useState("");
  return (
    <SubHeader
      searchProps={{
        value: searchString,
        onChange: (e) => setSearchString(e.target.value),
      }}
      deleteButtonProps={{
        count: 0,
        selectedIDs: [],
        onClick: () => {},
      }}
      disableButtonProps={{
        count: 0,
        selectedIDs: [],
        onClick: () => {},
      }}
    />
  );
};
