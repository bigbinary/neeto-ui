import React from "react";

import Pagination from "components/Pagination";

import PaginationCSSCustomization from "!raw-loader!./PaginationStoriesDocs/PaginationCSSCustomization.mdx";
import PaginationDocs from "!raw-loader!./PaginationStoriesDocs/PaginationDocs.mdx";

const metadata = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
    docs: { description: { component: PaginationDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=1070%3A3918",
    },
  },
};

const Template = args => <Pagination {...args} />;

const Default = Template.bind({});
Default.args = {
  count: 500,
  pageNo: 3,
  pageSize: 100,
  navigate: pageNumber => {
    alert(pageNumber);
  },
};

const CSSCustomization = args => (
  <Pagination className="neetix-pagination" {...args} />
);

CSSCustomization.args = {
  count: 500,
  pageNo: 3,
  pageSize: 100,
  navigate: pageNumber => {
    alert(pageNumber);
  },
};

CSSCustomization.storyName = "Pagination CSS Customization";

CSSCustomization.parameters = {
  docs: { description: { story: PaginationCSSCustomization } },
};

export { Default, CSSCustomization };

export default metadata;
