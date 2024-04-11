import React from "react";

import classnames from "classnames";

import Tooltip from "components/Tooltip";

import FeaturedTooltip from "./FeaturedTooltip";

const TOOLTIP_STYLES = { default: "default", featured: "featured" };

const NavIconWrapper = ({
  tooltipStyle,
  description,
  icon,
  label,
  children,
}) => {
  const tooltipContent =
    tooltipStyle === TOOLTIP_STYLES.featured ? (
      <FeaturedTooltip {...{ description, icon, label }} />
    ) : (
      label
    );

  return (
    <Tooltip
      content={tooltipContent}
      delay={[400, 40]}
      duration={[200, 200]}
      position="right"
      className={classnames({
        "sidebar-featured-tooltip__content":
          tooltipStyle === TOOLTIP_STYLES.featured,
      })}
    >
      {children}
    </Tooltip>
  );
};

export default NavIconWrapper;
