import React from "react";
import { Catalog, pageLoader } from "catalog";
import * as NeetoUI from "../../lib";

const componentNames = [
  "Accordion",
  "ActionDropdown",
  "Alert",
  "Avatar",
  "Badge",
  "Button",
  "Callout",
  "Card",
  "Checkbox",
  "DateInput",
  "DatePicker",
  "DateRangeInput",
  "DateRangePicker",
  "Dropdown",
  "Input",
  "Modal",
  "PageLoader",
  "Pagination",
  "Pane",
  "Radio",
  "Select",
  "Spinner",
  "Switch",
  "Tab",
  "TimeInput",
  "Tooltip",
];

const layoutNames= [
  'Header'
]

export default function index() {
  return (
    <Catalog
      title="neetoUI"
      pages={[
        {
          path: "/",
          title: "Introduction",
          content: pageLoader(() => import("./Introduction.md")),
        },
        {
          title: "Usage",
          pages: [
            {
              path: "/installation",
              title: "Installation",
              content: pageLoader(() => import("./Installation.md")),
            },
            {
              path: "/usage",
              title: "Basic Usage",
              content: pageLoader(() => import("./Usage.md")),
            },
          ],
        },
        {
          title: "Components",
          pages: componentNames.sort().map((componentName) => ({
            path: `/${componentName.toLowerCase()}`,
            title: componentName,
            imports: {
              [componentName]: NeetoUI[componentName],
            },
            content: pageLoader(() =>
              import(`./Components/${componentName}.md`)
            ),
          })),
        },
        {
          title: "Layouts",
          pages: layoutNames.sort().map((layoutName) => ({
            path: `/${layoutName.toLowerCase()}`,
            title: layoutName,
            imports: {
              [layoutName]: NeetoUI[layoutName],
            },
            content: pageLoader(() =>
              import(`./Layouts/${layoutName}.md`)
            ),
          })),
        },
        {
          path: "/formik",
          title: "Formik",
          content: pageLoader(() => import("./Formik.md")),
        },
      ]}
    />
  );
}
