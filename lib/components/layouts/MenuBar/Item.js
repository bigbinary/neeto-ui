import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Typography from "../../Typography";

const Item = ({
  label = "",
  description = "",
  active = false,
  className = "",
  ...otherProps
}) => (
  <button
    className={classnames("neeto-ui-menubar__item", {
      "neeto-ui-menubar__item--active": active,
      [className]: className,
    })}
    {...otherProps}
  >
    <Typography
      component="h5"
      style="h4"
      className="neeto-ui-menubar__item-header"
    >
      {label}
    </Typography>
    <Typography style="body3" className="neeto-ui-menubar__item-desc">
      {description}
    </Typography>
  </button>
);

Item.propTypes = {
  /**
   * To specify the text to be rendered as the label.
   */
  label: PropTypes.string,
  /**
   * To specify the text to be rendered as the description.
   */
  description: PropTypes.string,
  /**
   * To specify the current Item is active.
   */
  active: PropTypes.bool,
  /**
   * To specify external classnames as overrides to the Item.
   */
  className: PropTypes.string,
};

export default Item;
