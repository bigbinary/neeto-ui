import "./style.scss";
import "../lib/styles/index.scss";

import { addParameters } from "@storybook/react";

addParameters({
  badgesConfig: {
    beta: {
      styles: {
        backgroundColor: "#FFF",
        borderColor: "#018786",
        color: "#018786",
      },
      tooltip: {
        title: "This is Beta",
        desc: "Be ready to receive updates frequently and leave a feedback",
        links: [
          { title: "Read more", href: "http://path/to/your/docs" },
          {
            title: "Leave feedback",
            onClick: () => {
              alert("thanks for the feedback");
            },
          },
        ],
      },
    },
    obsolete: {
      tooltip: {
        title: "This is obsolete",
        desc: "Will not have any updates",
        links: [
          { title: "Read more", href: "http://path/to/your/docs" },
          {
            title: "Leave feedback",
            onClick: () => {
              alert("thanks for the feedback");
            },
          },
        ],
      },
    },
  },
});

export const parameters = {
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Introduction",
        "Formik",
        "Foundation",
        ["Colors", "Typography", "Iconography", "Helpers"],
        "Components",
        "Overlays",
        "Layouts",
      ],
    },
  },
};
