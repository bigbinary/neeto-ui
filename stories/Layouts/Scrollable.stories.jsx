import React from "react";

import { Delete } from "neetoicons";

import { Button, Typography } from "components";
import { Scrollable, Container } from "components/layouts";
import Header from "neetomolecules/Header";
import SubHeader from "neetomolecules/SubHeader";

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
  <div className="neeto-ui-bg-white h-36 w-full space-y-2 rounded-md p-5 shadow">
    <div className="neeto-ui-bg-gray-200 neeto h-8 w-1/4 flex-1 rounded" />
    <div className="neeto-ui-bg-gray-200 neeto h-4 w-full flex-1 rounded" />
    <div className="neeto-ui-bg-gray-200 neeto h-4 w-5/6 flex-1 rounded" />
    <div className="neeto-ui-bg-gray-200 neeto h-4 w-3/4 flex-1 rounded" />
  </div>
);

export const Default = args => (
  <Scrollable {...args} className="neeto-ui-bg-gray-100 space-y-6 p-6">
    {[...Array(5)].map((_, i) => (
      <DummyCard key={i} />
    ))}
  </Scrollable>
);

export const WithHeader = args => (
  <Container isHeaderFixed>
    <Header title="Header" />
    <Scrollable
      {...args}
      className="neeto-ui-bg-gray-300 w-full space-y-6 py-6"
    >
      {[...Array(5)].map((_, i) => (
        <DummyCard key={i} />
      ))}
    </Scrollable>
  </Container>
);
WithHeader.storyName = "With header";
WithHeader.args = {
  size: "large",
};

export const WithHeaderAndSubHeader = args => (
  <Container isHeaderFixed>
    <Header title="Header" />
    <SubHeader
      leftActionBlock={
        <Typography component="h4" style="h4">
          118 Contacts
        </Typography>
      }
      rightActionBlock={
        <>
          <Button icon={Delete} label="Delete" style="secondary" />
          <Button label="Disable" style="secondary" />
        </>
      }
    />
    <Scrollable
      {...args}
      className="neeto-ui-bg-gray-300 w-full space-y-6 py-6"
    >
      {[...Array(6)].map((_, i) => (
        <DummyCard key={i} />
      ))}
    </Scrollable>
  </Container>
);
WithHeaderAndSubHeader.storyName = "With header and subheader";
WithHeaderAndSubHeader.args = {
  size: "small",
};
