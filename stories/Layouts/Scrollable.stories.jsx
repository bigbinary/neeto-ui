import React from "react";

import {
  Header,
  SubHeader,
  Scrollable,
  Container,
} from "../../lib/components/layouts";

const description = `
Scrollable is used when contents are overflowing the viewport and requires scrolling. It is primarily used along with Container.

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
  <div className="neeto-ui-bg-white w-full h-36 rounded-md p-5 space-y-2 shadow">
    <div className="neeto-ui-bg-gray-200 w-1/4 h-8 flex-1 neeto rounded" />
    <div className="neeto-ui-bg-gray-200 w-full h-4 flex-1 neeto rounded" />
    <div className="neeto-ui-bg-gray-200 w-5/6 h-4 flex-1 neeto rounded" />
    <div className="neeto-ui-bg-gray-200 w-3/4 h-4 flex-1 neeto rounded" />
  </div>
);

export const ScrollableStory = (args) => {
  return (
    <Scrollable {...args} className="neeto-ui-bg-gray-100 p-6 space-y-6">
      {[...Array(5)].map((_, i) => (
        <DummyCard key={i} />
      ))}
    </Scrollable>
  );
};
ScrollableStory.storyName = "Scrollable";

export const WithHeader = (args) => {
  return (
    <Container isHeaderFixed>
      <Header title="Header" />
      <Scrollable
        {...args}
        className="w-full space-y-6 py-6 neeto-ui-bg-gray-300"
      >
        {[...Array(5)].map((_, i) => (
          <DummyCard key={i} />
        ))}
      </Scrollable>
    </Container>
  );
};

WithHeader.args = {
  size: "large",
};

export const WithHeaderAndSubHeader = (args) => {
  return (
    <Container isHeaderFixed>
      <Header title="Header" />
      <SubHeader
        searchProps={{}}
        disableButtonProps={{}}
        deleteButtonProps={{}}
      />
      <Scrollable
        {...args}
        className="w-full space-y-6 py-6 neeto-ui-bg-gray-300"
      >
        {[...Array(6)].map((_, i) => (
          <DummyCard key={i} />
        ))}
      </Scrollable>
    </Container>
  );
};

WithHeaderAndSubHeader.args = {
  size: "small",
};
