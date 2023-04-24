import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import Typography from "components/Typography";

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
      className="neeto-ui-menubar__item-header"
      component="h5"
      style="h4"
    >
      {label}
    </Typography>
    <Typography className="neeto-ui-menubar__item-desc" style="body3">
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
