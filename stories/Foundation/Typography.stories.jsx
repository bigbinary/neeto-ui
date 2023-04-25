import React from "react";

import Typography from "components/Typography";

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

const Template = args => <Typography {...args}>Typography</Typography>;

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

export const Variants = () => (
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
    <Typography className="mb-4" component="p" style="nano">
      nano. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur - 10px
    </Typography>
    <div className="mb-4">
      <Typography component="del" style="body3">
        Represents a range of text that has been deleted from a document.
      </Typography>
    </div>
    <div className="mb-4">
      <Typography component="ins" style="body3">
        Represents a range of text that has been added to a document.
      </Typography>
    </div>
    <div className="mb-4">
      <Typography component="u" style="body3">
        This is rendered by default as a simple solid underline.
      </Typography>
    </div>
    <div className="mb-4">
      <Typography component="i" style="body3">
        Represents a range of text that is set off from the normal text for some
        reason, such as idiomatic text, technical terms, taxonomical
        designations, among others.
      </Typography>
    </div>
    <div className="mb-4">
      <Typography component="em" style="body3">
        Marks text that has stress emphasis
      </Typography>
    </div>
    <div className="mb-4">
      <Typography component="strong" style="body3">
        Indicates that its contents have strong importance, seriousness, or
        urgency.
      </Typography>
    </div>
    <div className="mb-4">
      <Typography component="b" style="body3">
        Used to draw the reader's attention to the element's contents, which are
        not otherwise granted special importance.
      </Typography>
    </div>
    <div className="mb-4">
      <Typography component="code" style="h4">
        Code
      </Typography>
    </div>
  </>
);

export const Helpers = () => (
  <div>
    More typography helpers are documented{" "}
    <a
      className="underline"
      href="/?path=/docs/foundation-helpers-font-size--page"
    >
      here
    </a>
    .
  </div>
);
