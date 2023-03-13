import React from "react";

import { Book, Keyboard, Gift } from "@bigbinary/neeto-icons";
import { values } from "ramda";

import HelpLinkSection from "./LinkSection";

const HelpSectionTooltip = ({ helpSectionProps }) => {
  const {
    documentationProps,
    keyboardShortcutProps,
    changelogProps,
  } = helpSectionProps;

  const helpLinks = [
    documentationProps && {
      label: "Documentation",
      icon: Book,
      ...documentationProps,
    },
    keyboardShortcutProps && {
      label: "Keyboard Shortcuts",
      icon: Keyboard,
      ...keyboardShortcutProps,
    },
    changelogProps && {
      label: "What's New",
      icon: Gift,
      ...changelogProps,
    },
  ].filter(Boolean);

  return <HelpLinkSection links={values(helpLinks)} />;
};

export default HelpSectionTooltip;
