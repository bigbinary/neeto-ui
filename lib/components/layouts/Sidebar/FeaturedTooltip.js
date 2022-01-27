import React from "react";
import Typography from "../../Typography";

const FeaturedTooltip = ({ icon, label, description }) => {
  return (
    <div className="flex flex-col p-3 sidebar-featured-tooltip w-36">
      <div className="flex items-center justify-center w-10 h-10 mx-auto mb-2 rounded-lg sidebar-featured-tooltip__icon-wrapp bg-gray-50">
        {icon}
      </div>
      <Typography
        lineHeight="tight"
        style="h5"
        weight="semibold"
        className="mb-1 text-center neeto-ui-text-black"
      >
        {label}
      </Typography>
      {description && (
        <Typography
          lineHeight="normal"
          style="body3"
          className="text-center neeto-ui-text-gray-600"
        >
          {description}
        </Typography>
      )}
    </div>
  );
};

export default FeaturedTooltip;
