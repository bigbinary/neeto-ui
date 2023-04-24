import React from "react";

import { NO_DATA_IMAGE_URL } from "./constants";

export const renderImage = image => {
  if (image) {
    return typeof image === "string" ? (
      <img data-cy="no-data-image" src={image} />
    ) : (
      image || React.Fragment
    );
  }

  return <img data-cy="no-data-image" src={NO_DATA_IMAGE_URL} />;
};
