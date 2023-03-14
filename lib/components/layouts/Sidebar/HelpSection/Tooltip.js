import React from "react";

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
    },
    keyboardShortcutProps && {
      ...keyboardShortcutProps,
      label: "Keyboard Shortcuts",
      icon: Keyboard,
    },
    liveChatProps && {
      ...liveChatProps,
      label: "Chat with us",
      icon: ChatEmpty,
    },
    changelogProps && {
      ...changelogProps,
      label: "What's New",
      icon: Gift,
    },
  ].filter(Boolean);

  return <HelpLinkSection links={values(helpLinks)} />;
};

export default HelpSectionTooltip;
