import React from "react";

import { Container, Header, Scrollable } from "../../lib/components/layouts";

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

export const Default = (args) => {
  return (
    <Container {...args}>
      <div className="neeto-ui-bg-gray-100 w-full h-full flex-1" />
    </Container>
  );
};
Default.decorators = [(Story) => <div className="bg-green-200">{Story()}</div>];

const DummyCard = () => (
  <div className="neeto-ui-bg-white w-full h-36 rounded-md p-5 space-y-2 shadow">
    <div className="neeto-ui-bg-gray-200 w-1/4 h-8 flex-1 neeto rounded" />
    <div className="neeto-ui-bg-gray-200 w-full h-4 flex-1 neeto rounded" />
    <div className="neeto-ui-bg-gray-200 w-5/6 h-4 flex-1 neeto rounded" />
    <div className="neeto-ui-bg-gray-200 w-3/4 h-4 flex-1 neeto rounded" />
  </div>
);

export const WithHeaderAndScrollable = (args) => {
  return (
    <Container {...args}>
      <Header title="Header" />
      <Scrollable
        className="w-full space-y-6 py-6 neeto-ui-bg-gray-300"
        size="small"
      >
        {[...Array(6)].map((_, i) => (
          <DummyCard key={i} />
        ))}
      </Scrollable>
    </Container>
  );
};
WithHeaderAndScrollable.storyName = "With header and scrollable";
WithHeaderAndScrollable.args = {
  isHeaderFixed: true,
};
