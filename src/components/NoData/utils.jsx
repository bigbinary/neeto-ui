import React from "react";

export const renderImage = image =>
  typeof image === "string" ? (
    <img data-cy="no-data-image" src={image} />
  ) : (
    image
  );
