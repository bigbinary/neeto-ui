import React from "react";
import Typography from "../../Typography";

const FeaturedTooltip = ({ label, description }) => (
  <div className="neeto-ui-flex neeto-ui-flex-col sidebar-featured-tooltip">
    <Typography
      lineHeight="tight"
      style="h5"
      weight="semibold"
      className="neeto-ui-text-center sidebar-featured-tooltip__title"
    >
      {label}
    </Typography>
    {description && (
      <Typography
        lineHeight="normal"
        style="body3"
        className="neeto-ui-text-center neeto-ui-text-gray-400 sidebar-featured-tooltip__description"
      >
        {description}
      </Typography>
    )}
  </div>
);

export default FeaturedTooltip;
