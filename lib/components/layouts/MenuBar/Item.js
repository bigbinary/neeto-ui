import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Typography from "../../../components/Typography";

const Item = ({ label, description, active, className, ...otherProps }) => {
  return (
    <button
      className={classnames("neeto-ui-menubar__item", {
        "neeto-ui-menubar__item--active": active,
        [className]: className,
      })}
      {...otherProps}
    >
      <Typography component="h5" style="h4" className="neeto-ui-menubar__item-header">{label}</Typography>
      <Typography style="body3" className="neeto-ui-menubar__item-desc">{description}</Typography>
    </button>
  );
};

Item.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  active: PropTypes.bool,
  className: PropTypes.string,
};

export default Item;