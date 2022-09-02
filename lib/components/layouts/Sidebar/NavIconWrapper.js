import React from "react";
import classnames from "classnames";

import FeaturedTooltip from "./FeaturedTooltip";
import Tooltip from "../../Tooltip";
import { TOOLTIP_STYLES } from "./constant";

const NavIconWrapper = ({
  tooltipStyle,
  description,
  icon,
  collapsed,
  label,
  children,
}) => {
  const tooltipContent =
    tooltipStyle === TOOLTIP_STYLES.featured ? (
      <FeaturedTooltip
        description={description}
        icon={icon}
        label={label}
      />
    ) : (
      label
    );
  const content = collapsed ? (
    <Tooltip
      position="right"
      distance="20rem"
      content={tooltipContent}
      theme={tooltipStyle === TOOLTIP_STYLES.featured ? "light" : "dark"}
      className={classnames({
        "sidebar-featured-tooltip__content":
          tooltipStyle === TOOLTIP_STYLES.featured,
      })}
      delay={[400, 40]}
      duration={[200, 200]}
    >
      {children}
    </Tooltip>
  ) : (
    children
  );
  return content;
};

export default NavIconWrapper;
