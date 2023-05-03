import React from "react";

import classnames from "classnames";

import Tooltip from "components/Tooltip";

import FeaturedTooltip from "./FeaturedTooltip";

const TOOLTIP_STYLES = {
  default: "default",
  featured: "featured",
};

const NavIconWrapper = ({
  tooltipStyle,
  description,
  icon,
  label,
  children,
}) => {
  const tooltipContent =
    tooltipStyle === TOOLTIP_STYLES.featured ? (
      <FeaturedTooltip description={description} icon={icon} label={label} />
    ) : (
      label
    );

  const content = (
    <Tooltip
      content={tooltipContent}
      delay={[400, 40]}
      distance="20rem"
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

  return content;
};

export default NavIconWrapper;
