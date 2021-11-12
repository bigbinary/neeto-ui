import React from "react";

import Pagination from "../../lib/components/Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Pagination } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
};

const Template = (args) => <Pagination {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  count: 500,
  pageNo: 3,
  pageSize: 100,
  navigate: (pageNumber) => {},
};
