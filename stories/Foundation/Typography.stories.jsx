import React from "react";

import Typography from "../../lib/components/Typography";

export default {
  title: "Foundation/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
    viewMode: "docs",
    previewTabs: {
      canvas: { hidden: true },
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/t2CLe7RVJYwUq9E8Or1mQA/01-Fundamentals?node-id=20%3A3",
    },
  },
};

const Template = (args) => <Typography {...args}>Typography</Typography>;

export const Heading1 = Template.bind({});
Heading1.args = {
  style: "h1",
};

export const Heading2 = Template.bind({});
Heading2.args = {
  style: "h2",
};

export const Heading3 = Template.bind({});
Heading3.args = {
  style: "h3",
};

export const Heading4 = Template.bind({});
Heading4.args = {
  style: "h4",
};

export const Heading5 = Template.bind({});
Heading5.args = {
  style: "h5",
};

export const Body1 = Template.bind({});
Body1.args = {
  style: "body1",
};

export const Body2 = Template.bind({});
Body2.args = {
  style: "body2",
};

export const Body3 = Template.bind({});
Body3.args = {
  style: "body3",
};

export const Nano = Template.bind({});
Nano.args = {
  style: "nano",
};

export const Variants = () => {
  return (
    <>
      <Typography className="mb-4" style="h1">
        h1. Heading - 32px
      </Typography>
      <Typography className="mb-4" style="h2">
        h2. Heading - 24px
      </Typography>
      <Typography className="mb-4" style="h3">
        h3. Heading - 20px
      </Typography>
      <Typography className="mb-4" style="h4">
        h4. Heading - 16px
      </Typography>
      <Typography className="mb-4" style="h5">
        h5. Heading - 14px
      </Typography>
      <Typography className="mb-4" style="h6">
        h6. Heading - 12px
      </Typography>
      <Typography className="mb-4" style="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur - 16px
      </Typography>
      <Typography className="mb-4" style="body2">
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur - 14px
      </Typography>
      <Typography className="mb-4" style="body3">
        body3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur - 12px
      </Typography>
      <Typography className="mb-4" style="nano" component="p">
        nano. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur - 10px
      </Typography>
      <div className="mb-4">
        <Typography style="body3" component="del">
          Represents a range of text that has been deleted from a document.
        </Typography>
      </div>
      <div className="mb-4">
        <Typography style="body3" component="ins">
          Represents a range of text that has been added to a document.
        </Typography>
      </div>
      <div className="mb-4">
        <Typography style="body3" component="u">
          This is rendered by default as a simple solid underline.
        </Typography>
      </div>
      <div className="mb-4">
        <Typography style="body3" component="i">
          Represents a range of text that is set off from the normal text for
          some reason, such as idiomatic text, technical terms, taxonomical
          designations, among others.
        </Typography>
      </div>
      <div className="mb-4">
        <Typography style="body3" component="em">
          Marks text that has stress emphasis
        </Typography>
      </div>
      <div className="mb-4">
        <Typography style="body3" component="strong">
          Indicates that its contents have strong importance, seriousness, or
          urgency.
        </Typography>
      </div>
      <div className="mb-4">
        <Typography style="body3" component="b">
          Used to draw the reader's attention to the element's contents, which
          are not otherwise granted special importance.
        </Typography>
      </div>
      <div className="mb-4">
        <Typography style="h4" component="code">
          Code
        </Typography>
      </div>
    </>
  );
};

export const TextTransform = () => {
  const textTransform = [
    {
      name: "$neeto-ui-text-transform-none",
      value: "none",
      compiledValue: "none",
    },
    {
      name: "$neeto-ui-text-transform-capitalize",
      value: "capitalize",
      compiledValue: "capitalize",
    },
    {
      name: "$neeto-ui-text-transform-uppercase",
      value: "uppercase",
      compiledValue: "uppercase",
    },
    {
      name: "$neeto-ui-text-transform-lowercase",
      value: "lowercase",
      compiledValue: "lowercase",
    },
    {
      name: "$neeto-ui-text-transform-fullwidth",
      value: "fullwidth",
      compiledValue: "fullwidth",
    },
    {
      name: "$neeto-ui-text-transform-inherit",
      value: "inherit",
      compiledValue: "inherit",
    },
    {
      name: "$neeto-ui-text-transform-initial",
      value: "initial",
      compiledValue: "initial",
    },
    {
      name: "$neeto-ui-text-transform-revert",
      value: "revert",
      compiledValue: "revert",
    },
    {
      name: "$neeto-ui-text-transform-unset",
      value: "unset",
      compiledValue: "unset",
    },
  ];
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <td className="border p-2">Preview</td>
          <td className="border p-2">CSS Variable</td>
          <td className="border p-2">Class</td>
        </tr>
      </thead>
      <tbody>
        {textTransform.map((transform) => {
          return (
            <tr key={transform.name}>
              <td className="neeto-ui-bg-gray-800 p-2">
                <div className="p-6">
                  <div
                    className={`w-36 h-12 flex items-center justify-center rounded-sm neeto-ui-bg-white ${transform.name.replace(
                      "$neeto-ui",
                      "neeto-ui"
                    )}`}
                  >
                    {transform.compiledValue}
                  </div>
                </div>
              </td>
              <td className="border p-2">
                <code>{`${transform.name.replace("$neeto-ui", "--neeto-ui")}`}</code>
              </td>
              <td className="border p-2">
                <div className="flex justify-between">
                  <code>{`${transform.name.replace("$neeto-ui", "neeto-ui")}`}</code>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) ;
};
TextTransform.storyName = "Text transform";

export const LineHeight = () => {
  const lineHeightHelpers = [
    {
      name: "$neeto-ui-leading-none",
      value: "none",
      compiledValue: "none",
    },
    {
      name: "$neeto-ui-leading-tight",
      value: "tight",
      compiledValue: "tight",
    },
    {
      name: "$neeto-ui-leading-snug",
      value: "snug",
      compiledValue: "snug",
    },
    {
      name: "$neeto-ui-leading-normal",
      value: "normal",
      compiledValue: "normal",
    },
    {
      name: "$neeto-ui-leading-relaxed",
      value: "relaxed",
      compiledValue: "relaxed",
    },
    {
      name: "$neeto-ui-leading-loose",
      value: "loose",
      compiledValue: "loose",
    }
  ];
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <td className="border p-2">Preview</td>
          <td className="border p-2">Name</td>
          <td className="border p-2">CSS Variable</td>
          <td className="border p-2">Class</td>
        </tr>
      </thead>
      <tbody>
        {lineHeightHelpers.map((helper) => {
          return (
            <tr key={helper.name}>
              <td className="neeto-ui-bg-gray-800 p-2">
                <div className="p-6">
                  <div
                    className={`w-46 h-18 flex items-center justify-center p-3 rounded-sm neeto-ui-bg-white ${helper.name.replace(
                      "$neeto-ui",
                      "neeto-ui"
                    )}`}
                  >
                    Lorem Ipsum is simply<br />
                    dummy textof the<br />
                    printing and typesetting<br />
                    industry
                  </div>
                </div>
              </td>
              <td className="border p-2">
                <div className="p-6">
                  <div>
                    {helper.compiledValue}
                  </div>
                </div>
              </td>
              <td className="border p-2">
                <code>{`${helper.name.replace("$neeto-ui", "--neeto-ui")}`}</code>
              </td>
              <td className="border p-2">
                <div className="flex justify-between">
                  <code>{`${helper.name.replace("$neeto-ui", "neeto-ui")}`}</code>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) ;
};
LineHeight.storyName = "Line height";

export const FontWeights = () => {
  const lineHeightHelpers = [
    {
      name: "$neeto-ui-font-thin",
      value: "thin",
      compiledValue: "thin",
    },
    {
      name: "$neeto-ui-font-extralight",
      value: "extralight",
      compiledValue: "extralight",
    },
    {
      name: "$neeto-ui-font-light",
      value: "light",
      compiledValue: "light",
    },
    {
      name: "$neeto-ui-font-normal",
      value: "normal",
      compiledValue: "normal",
    },
    {
      name: "$neeto-ui-font-medium",
      value: "medium",
      compiledValue: "medium",
    },
    {
      name: "$neeto-ui-font-semibold",
      value: "semibold",
      compiledValue: "semibold",
    },
    {
      name: "$neeto-ui-font-bold",
      value: "bold",
      compiledValue: "bold",
    },
    {
      name: "$neeto-ui-font-extrabold",
      value: "extrabold",
      compiledValue: "extrabold",
    },
    {
      name: "$neeto-ui-font-black",
      value: "black",
      compiledValue: "black",
    },
  ];
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <td className="border p-2">Preview</td>
          <td className="border p-2">CSS Variable</td>
          <td className="border p-2">Class</td>
        </tr>
      </thead>
      <tbody>
        {lineHeightHelpers.map((helper) => {
          return (
            <tr key={helper.name}>
              <td className="neeto-ui-bg-gray-800 p-2">
                <div className="p-6">
                  <div
                    className={`w-46 h-18 flex items-center justify-center p-3 rounded-sm neeto-ui-bg-white ${helper.name.replace(
                      "$neeto-ui",
                      "neeto-ui"
                    )}`}
                  >
                    {helper.compiledValue}
                  </div>
                </div>
              </td>
              <td className="border p-2">
                <code>{`${helper.name.replace("$neeto-ui", "--neeto-ui")}`}</code>
              </td>
              <td className="border p-2">
                <div className="flex justify-between">
                  <code>{`${helper.name.replace("$neeto-ui", "neeto-ui")}`}</code>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) ;
};
FontWeights.storyName = "Font weights";

export const FontSizes = () => {
  const lineHeightHelpers = [
    {
      name: "$neeto-ui-text-3xl",
      value: "h1",
      compiledValue: "h1",
    },
    {
      name: "$neeto-ui-text-2xl",
      value: "h2",
      compiledValue: "h2",
    },
    {
      name: "$neeto-ui-text-xl",
      value: "h3",
      compiledValue: "h3",
    },
    {
      name: "$neeto-ui-text-base",
      value: "h4",
      compiledValue: "h4",
    },
    {
      name: "$neeto-ui-text-sm",
      value: "h5",
      compiledValue: "h5",
    },
    {
      name: "$neeto-ui-text-xs",
      value: "h6",
      compiledValue: "h6",
    },
    {
      name: "$neeto-ui-text-base",
      value: "body1",
      compiledValue: "body1",
    },
    {
      name: "$neeto-ui-text-sm",
      value: "body2",
      compiledValue: "body2",
    },
    {
      name: "$neeto-ui-text-xs",
      value: "body3",
      compiledValue: "body3",
    },
    {
      name: "$neeto-ui-text-xxs",
      value: "nano",
      compiledValue: "nano",
    },
    {
      name: "$neeto-ui-text-xxs",
      value: "xxs",
      compiledValue: "xxs",
    },
    {
      name: "$neeto-ui-text-xs",
      value: "xs",
      compiledValue: "xs",
    },
    {
      name: "$neeto-ui-text-sm",
      value: "sm",
      compiledValue: "sm",
    },
    {
      name: "$neeto-ui-text-base",
      value: "base",
      compiledValue: "base",
    },
    {
      name: "$neeto-ui-text-lg",
      value: "lg",
      compiledValue: "lg",
    },
    {
      name: "$neeto-ui-text-xl",
      value: "xl",
      compiledValue: "xl",
    },
    {
      name: "$neeto-ui-text-2xl",
      value: "2xl",
      compiledValue: "2xl",
    },
    {
      name: "$neeto-ui-text-3xl",
      value: "3xl",
      compiledValue: "3xl",
    },
    {
      name: "$neeto-ui-text-4xl",
      value: "4xl",
      compiledValue: "4xl",
    },
  ];
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <td className="border p-2">Preview</td>
          <td className="border p-2">CSS Variable</td>
          <td className="border p-2">Class</td>
        </tr>
      </thead>
      <tbody>
        {lineHeightHelpers.map((helper) => {
          return (
            <tr key={helper.name}>
              <td className="neeto-ui-bg-gray-800 p-2">
                <div className="p-6">
                  <div
                    className={`w-46 h-18 flex items-center justify-center p-3 rounded-sm neeto-ui-bg-white ${helper.name.replace(
                      "$neeto-ui",
                      "neeto-ui"
                    )}`}
                  >
                    {helper.compiledValue}
                  </div>
                </div>
              </td>
              <td className="border p-2">
                <code>{`${helper.name.replace("$neeto-ui", "--neeto-ui")}`}</code>
              </td>
              <td className="border p-2">
                <div className="flex justify-between">
                  <code>{`${helper.name.replace("$neeto-ui", "neeto-ui")}`}</code>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) ;
};
FontSizes.storyName = "Font sizes";

