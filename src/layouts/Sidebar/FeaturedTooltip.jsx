import React from "react";

import Typography from "components/Typography";

const FeaturedTooltip = ({ label, description }) => (
  <div className="neeto-ui-flex neeto-ui-flex-col sidebar-featured-tooltip">
    <Typography
      className="neeto-ui-text-center sidebar-featured-tooltip__title"
      lineHeight="tight"
      style="h5"
      weight="semibold"
    >
      {label}
    </Typography>
    {description && (
      <Typography
        className="neeto-ui-text-center neeto-ui-text-gray-400 sidebar-featured-tooltip__description"
        lineHeight="normal"
        style="body3"
      >
        {description}
      </Typography>
    )}
  </div>
);

export default FeaturedTooltip;
