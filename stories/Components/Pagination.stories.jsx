import React from "react";

import Pagination from "components/Pagination";

import PaginationStoriesDocs from "!raw-loader!./PaginationStories.mdx";

export default {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: PaginationStoriesDocs,
      },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=1070%3A3918",
    },
  },
};

const Template = args => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 500,
  pageNo: 3,
  pageSize: 100,
  navigate: pageNumber => {
    alert(pageNumber);
  },
};
