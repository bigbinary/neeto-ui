import React from "react";

import { Container, Header, Scrollable } from "components/layouts";

const description = `
The container centers your content horizontally by providing a horizontal padding. It's the most basic layout element.

\`import { Container } from "@bigbinary/neetoui/layouts"\`
`;

export default {
  title: "Layouts/Container",
  description: "",
  component: Container,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export const Default = args => (
  <Container {...args}>
    <div className="neeto-ui-bg-gray-100 h-full w-full flex-1" />
  </Container>
);
Default.decorators = [Story => <div className="bg-green-200">{Story()}</div>];

const DummyCard = () => (
  <div className="neeto-ui-bg-white h-36 w-full space-y-2 rounded-md p-5 shadow">
    <div className="neeto-ui-bg-gray-200 neeto h-8 w-1/4 flex-1 rounded" />
    <div className="neeto-ui-bg-gray-200 neeto h-4 w-full flex-1 rounded" />
    <div className="neeto-ui-bg-gray-200 neeto h-4 w-5/6 flex-1 rounded" />
    <div className="neeto-ui-bg-gray-200 neeto h-4 w-3/4 flex-1 rounded" />
  </div>
);

export const WithHeaderAndScrollable = args => (
  <Container {...args}>
    <Header title="Header" />
    <Scrollable
      className="neeto-ui-bg-gray-300 w-full space-y-6 py-6"
      size="small"
    >
      {[...Array(6)].map((_, i) => (
        <DummyCard key={i} />
      ))}
    </Scrollable>
  </Container>
);
WithHeaderAndScrollable.storyName = "With header and scrollable";
WithHeaderAndScrollable.args = {
  isHeaderFixed: true,
};
