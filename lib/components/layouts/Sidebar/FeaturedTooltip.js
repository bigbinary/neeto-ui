import React from "react";
import Typography from "../../Typography";

const FeaturedTooltip = ({ icon, label, description }) => (
  <div className="neeto-ui-flex neeto-ui-flex-col sidebar-featured-tooltip">
    <div className="neeto-ui-flex neeto-ui-items-center neeto-ui-justify-center sidebar-featured-tooltip__icon-wrap">
      {icon}
    </div>
    <Typography
      lineHeight="tight"
      style="h5"
      weight="semibold"
      className="neeto-ui-text-center neeto-ui-text-black sidebar-featured-tooltip__title"
    >
      {label}
    </Typography>
    {description && (
      <Typography
        lineHeight="normal"
        style="body3"
        className="neeto-ui-text-center neeto-ui-text-gray-600 sidebar-featured-tooltip__description"
      >
        {description}
      </Typography>
    )}
  </div>
);

export default FeaturedTooltip;
