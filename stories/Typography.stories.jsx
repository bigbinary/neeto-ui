import React from "react";

import Typography from "../lib/components/Typography";

export default {
  title: "Components/Typography",
  component: Typography,
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

export const AllVariants = (args) => {
    return (
      <>
        <Typography className="mb-4" style="h1">h1. Heading</Typography>
        <Typography className="mb-4" style="h2">h2. Heading</Typography>
        <Typography className="mb-4" style="h3">h3. Heading</Typography>
        <Typography className="mb-4" style="h4">h4. Heading</Typography>
        <Typography className="mb-4" style="h5">h5. Heading</Typography>
        <Typography className="mb-4" style="h6">h6. Heading</Typography>
        <Typography className="mb-4" style="body1">
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <Typography className="mb-4" style="body2">
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <Typography className="mb-4" style="body3">
          body3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
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
            Represents a range of text that is set off from the normal text for some
            reason, such as idiomatic text, technical terms, taxonomical
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
            Used to draw the reader's attention to the element's contents, which are
            not otherwise granted special importance.
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
