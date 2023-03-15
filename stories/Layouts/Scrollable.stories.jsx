import React from "react";
import { Delete } from "@bigbinary/neeto-icons";

import { Button, Typography } from "components";
import {
  Header,
  SubHeader,
  Scrollable,
  Container,
} from "components/layouts";

const description = `
Scrollable is used when contents are overflowing the viewport and requires scrolling. It is primarily used along with \`Container\`.

\`import { Scrollable } from "@bigbinary/neetoui/layouts"\`
`;

export default {
  title: "Layouts/Scrollable",
  description: "",
  component: Scrollable,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: description,
      },
    },
  },
};

const DummyCard = () => (
  <div className="w-full p-5 space-y-2 rounded-md shadow neeto-ui-bg-white h-36">
    <div className="flex-1 w-1/4 h-8 rounded neeto-ui-bg-gray-200 neeto" />
    <div className="flex-1 w-full h-4 rounded neeto-ui-bg-gray-200 neeto" />
    <div className="flex-1 w-5/6 h-4 rounded neeto-ui-bg-gray-200 neeto" />
    <div className="flex-1 w-3/4 h-4 rounded neeto-ui-bg-gray-200 neeto" />
  </div>
);

export const Default = (args) => {
  return (
    <Scrollable {...args} className="p-6 space-y-6 neeto-ui-bg-gray-100">
      {[...Array(5)].map((_, i) => (
        <DummyCard key={i} />
      ))}
    </Scrollable>
  );
};

export const WithHeader = (args) => {
  return (
    <Container isHeaderFixed>
      <Header title="Header" />
      <Scrollable
        {...args}
        className="w-full py-6 space-y-6 neeto-ui-bg-gray-300"
      >
        {[...Array(5)].map((_, i) => (
          <DummyCard key={i} />
        ))}
      </Scrollable>
    </Container>
  );
};
WithHeader.storyName = "With header";
WithHeader.args = {
  size: "large",
};

export const WithHeaderAndSubHeader = (args) => {
  return (
    <Container isHeaderFixed>
      <Header title="Header" />
      <SubHeader
        leftActionBlock={
          <Typography style="h4" component="h4">
            118 Contacts
          </Typography>
        }
        rightActionBlock={
          <>
            <Button
              label="Delete"
              style="secondary"
              icon={Delete}
            />
            <Button label="Disable" style="secondary" />
          </>
        }
      />
      <Scrollable
        {...args}
        className="w-full py-6 space-y-6 neeto-ui-bg-gray-300"
      >
        {[...Array(6)].map((_, i) => (
          <DummyCard key={i} />
        ))}
      </Scrollable>
    </Container>
  );
};
WithHeaderAndSubHeader.storyName = "With header and subheader";
WithHeaderAndSubHeader.args = {
  size: "small",
};
