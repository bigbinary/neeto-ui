import { DEFAULT_PANE_HEADER_HEIGHT } from "./constants";

export const updateHeaderHeight = paneWrapper => {
  const header = paneWrapper?.querySelector(".neeto-ui-pane__header");
  const headerHeight = header?.offsetHeight;

  if (headerHeight > DEFAULT_PANE_HEADER_HEIGHT) {
    paneWrapper?.style.setProperty(
      "--neeto-ui-pane-header-height",
      `${headerHeight}px`
    );
  } else {
    paneWrapper?.style.removeProperty("--neeto-ui-pane-header-height");
  }
};
