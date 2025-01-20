import { DEFAULT_PANE_HEADER_HEIGHT } from "./constants";

export const getHeader = paneWrapper =>
  paneWrapper.current.querySelector(".neeto-ui-pane__header");

export const updateHeaderHeight = (paneWrapper, header) => {
  const headerHeight = header.offsetHeight;

  if (headerHeight > DEFAULT_PANE_HEADER_HEIGHT) {
    paneWrapper.style.setProperty(
      "--neeto-ui-pane-header-height",
      `${headerHeight}px`
    );
  } else {
    paneWrapper.style.removeProperty("--neeto-ui-pane-header-height");
  }
};
