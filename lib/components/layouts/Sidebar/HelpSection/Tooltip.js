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
      "data-cy": "help-link-documentation-button",
      ...documentationProps,
    },
    keyboardShortcutProps && {
      label: "Keyboard Shortcuts",
      icon: Keyboard,
      "data-cy": "help-link-keyboard-shortcut-button",
      ...keyboardShortcutProps,
    },
    changelogProps && {
      label: "What's New",
      icon: Gift,
      "data-cy": "help-link-changelog-button",
      ...changelogProps,
    },
  ].filter(Boolean);

  return <HelpLinkSection links={values(helpLinks)} />;
};

export default HelpSectionTooltip;
