import React from "react";

import { NO_DATA_IMAGE_URL } from "./constants";

export const renderImage = image => {
  if (image) {
    return typeof image == "string"
      ? <img src={image} data-cy="no-data-image" />
      : image || React.Fragment;
  }
  return (
    <img src={NO_DATA_IMAGE_URL} data-cy="no-data-image" />
  );
};
