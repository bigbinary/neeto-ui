import React from "react";

// eslint-disable-next-line @bigbinary/neeto/use-webpack-alias
import { Book, Keyboard, Gift, ChatEmpty } from "@bigbinary/neeto-icons";
import { values } from "ramda";

import HelpLinkSection from "./LinkSection";

const HelpSectionTooltip = ({ helpSectionProps }) => {
  const {
    documentationProps,
    keyboardShortcutProps,
    liveChatProps,
    changelogProps,
  } = helpSectionProps;

  const helpLinks = [
    documentationProps && {
      ...documentationProps,
      label: "Documentation",
      icon: Book,
      "data-cy": "help-link-documentation-button",
    },
    keyboardShortcutProps && {
      ...keyboardShortcutProps,
      label: "Keyboard shortcuts",
      icon: Keyboard,
      "data-cy": "help-link-keyboard-shortcut-button",
    },
    liveChatProps && {
      ...liveChatProps,
      label: "Chat with us",
      icon: ChatEmpty,
      "data-cy": "help-link-live-chat-button",
    },
    changelogProps && {
      ...changelogProps,
      label: "What's new?",
      icon: Gift,
      "data-cy": "help-link-changelog-button",
    },
  ].filter(Boolean);

  // eslint-disable-next-line react/jsx-filename-extension
  return <HelpLinkSection links={values(helpLinks)} />;
};

export default HelpSectionTooltip;
