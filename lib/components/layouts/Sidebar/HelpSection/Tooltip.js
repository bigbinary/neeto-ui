import React from "react";

import {
  Articles,
  Keyboard,
  NeetoAnalytics,
  NeetoChat,
  Rating,
} from "@bigbinary/neeto-icons";
import { values } from "ramda";

import HelpLinkSection from "./LinkSection";

const HelpSectionTooltip = ({ helpSectionProps }) => {
  const {
    documentationProps,
    keyboardShortcutProps,
    chatProps,
    changelogProps,
    statusProps,
  } = helpSectionProps;

  const helpLinks = [
    documentationProps && {
      label: "Documentation",
      icon: Articles,
      ...documentationProps,
    },
    keyboardShortcutProps && {
      label: "Keyboard Shortcuts",
      icon: Keyboard,
      ...keyboardShortcutProps,
    },
    chatProps && {
      label: "Chat with us",
      icon: NeetoChat,
      ...chatProps,
    },
    changelogProps && {
      label: "What's New",
      icon: Rating,
      ...changelogProps,
    },
    statusProps && {
      label: "Status",
      icon: NeetoAnalytics,
      ...statusProps,
    },
  ].filter(Boolean);

  return <HelpLinkSection links={values(helpLinks)} />;
};

export default HelpSectionTooltip;
