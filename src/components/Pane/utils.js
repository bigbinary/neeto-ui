import { DEFAULT_PANE_HEADER_HEIGHT } from "./constants";

export const getHeaderHeight = paneWrapper => {
  const header = paneWrapper.current.querySelector(".neeto-ui-pane__header");

  return header ? header.offsetHeight : DEFAULT_PANE_HEADER_HEIGHT;
};
