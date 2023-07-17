import React from "react";

export const renderImage = image => {
  if (image) {
    return typeof image === "string" ? (
      <img data-cy="no-data-image" src={image} />
    ) : (
      image || React.Fragment
    );
  }

  return null;
};
