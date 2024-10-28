import React from "react";

import { BrowserRouter } from "react-router-dom";

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
  argTypes: {
    count: {
      description: "To specify the total number of items.",
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
      required: true,
    },
    pageNo: {
      description: "To specify the current page number.",
      control: "number",
      table: { type: { summary: "number" } },
    },
    navigate: {
      description:
        "To specify the callback which will be invoked when the navigate buttons are clicked. If not provided, the component will update pagination information in the URL query parameters.",
      control: "function",
      table: { type: { summary: "func" } },
    },
    pageSize: {
      description: "To specify the size of a single page.",
      control: "number",
      table: { type: { summary: "number" } },
      required: true,
    },
    siblingCount: {
      description:
        "To specify the number of siblings to be shown before and after the current page number.",
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
    className: {
      description: "To provide external className to the Pagination component.",
      control: "text",
      table: { type: { summary: "string" } },
    },
  },
};

const Template = args => (
  <BrowserRouter>
    <Pagination {...args} />
  </BrowserRouter>
);

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
  <Template className="neetix-pagination" {...args} />
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
