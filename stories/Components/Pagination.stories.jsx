import React from "react";

import { BrowserRouter } from "react-router-dom";

import Pagination from "components/Pagination";

const description = `
\`import { Pagination } from "@bigbinary/neetoui";\`

\`Pagination\` allows users to navigate through a large set of content by dividing
it into smaller, manageable pages.

We use Ant Design's \`Pagination\` component under the hood. For extra
customization, refer
[AntD Pagination](https://ant.design/components/pagination/#API).
`;

const metadata = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
    docs: { description: { component: description } },
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

const PaginationCSSCustomization = `
Starting from v6, neeto-ui supports enhanced customization of components using
CSS variables. These are the variables that are being used in the \`Pagination\`
component.

\`\`\`css
--neeto-ui-pagination-item-padding-x: 4px;
--neeto-ui-pagination-item-padding-y: 4px;
--neeto-ui-pagination-item-width: 28px;
--neeto-ui-pagination-item-height: 28px;
--neeto-ui-pagination-item-margin-x: 4px;
--neeto-ui-pagination-item-margin-y: 0px;
--neeto-ui-pagination-item-font-size: var(--neeto-ui-text-sm);
--neeto-ui-pagination-item-font-weight: var(--neeto-ui-font-medium);
--neeto-ui-pagination-item-color: rgb(var(--neeto-ui-gray-700));
--neeto-ui-pagination-item-bg-color: rgb(var(--neeto-ui-white));
--neeto-ui-pagination-item-line-height: 1;
--neeto-ui-pagination-item-border-width: 1px;
--neeto-ui-pagination-item-border-color: transparent;
--neeto-ui-pagination-item-border-radius: var(--neeto-ui-rounded);

// Hover
--neeto-ui-pagination-item-hover-color: rgb(var(--neeto-ui-gray-800));
--neeto-ui-pagination-item-hover-bg-color: rgb(var(--neeto-ui-gray-200));

// Focus Visible
--neeto-ui-pagination-item-focus-visible-outline: 3px solid rgba(var(--neeto-ui-primary-500), 50%);
--neeto-ui-pagination-item-focus-visible-outline-offset: 1px;
--neeto-ui-pagination-item-focus-visible-box-shadow: none;

// Active
--neeto-ui-pagination-item-active-border-color: rgb(
  var(--neeto-ui-primary-500)
);
--neeto-ui-pagination-item-active-bg-color: rgb(var(--neeto-ui-primary-500));
--neeto-ui-pagination-item-active-color: rgb(var(--neeto-ui-white));
\`\`\`

You can use these variables to customize the component to your liking. Here is
an example:

\`\`\`css
.neetix-pagination {
  --neeto-ui-pagination-item-width: 32px;
  --neeto-ui-pagination-item-height: 32px;
  --neeto-ui-pagination-item-active-border-color: rgb(var(--neeto-ui-gray-800));
  --neeto-ui-pagination-item-active-bg-color: rgb(var(--neeto-ui-gray-800));
}
\`\`\`

#### Output
`;

CSSCustomization.parameters = {
  docs: { description: { story: PaginationCSSCustomization } },
};

export { Default, CSSCustomization };

export default metadata;
