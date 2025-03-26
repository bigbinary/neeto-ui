import { DEFAULT_PANE_HEADER_HEIGHT } from "./constants";

export const getHeader = paneWrapperRef =>
  paneWrapperRef.current?.querySelector(".neeto-ui-pane__header");

export const updateHeaderHeight = (header, paneWrapperRef) => {
  const headerHeight = header?.offsetHeight;

  if (headerHeight > DEFAULT_PANE_HEADER_HEIGHT) {
    paneWrapperRef.current?.style.setProperty(
      "--neeto-ui-pane-header-height",
      `${headerHeight}px`
    );
  } else {
    paneWrapperRef.current?.style.removeProperty(
      "--neeto-ui-pane-header-height"
    );
  }
};
