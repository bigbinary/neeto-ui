import React from "react";
import classnames from "classnames";

import FeaturedTooltip from "./FeaturedTooltip";
import Tooltip from "../../Tooltip";
import { TOOLTIP_STYLES } from "./constant";

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
      position="right"
      distance="20rem"
      content={tooltipContent}
      className={classnames({
        "sidebar-featured-tooltip__content":
          tooltipStyle === TOOLTIP_STYLES.featured,
      })}
      delay={[400, 40]}
      duration={[200, 200]}
    >
      {children}
    </Tooltip>
  );

  return content;
};

export default NavIconWrapper;
