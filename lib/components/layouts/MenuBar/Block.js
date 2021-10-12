import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { hyphenize } from "../../../common";
import Typography from "../../Typography";

const noop = () => {};

const Block = ({
  url,
  icon,
  label,
  count,
  active,
  onEdit,
  onClick = noop,
  className,
  ...otherProps
}) => {
  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit && onEdit();
  };

  let Parent = url ? Link : (props) => <button {...props} />;

  return (
    <Parent
      to={url}
      className={classnames("neeto-ui-menubar__block", {
        "neeto-ui-menubar__block--editable": onEdit,
        "neeto-ui-menubar__block--active": active,
        [className]: className,
      })}
      onClick={onClick}
      data-cy={otherProps["data-cy"] || hyphenize(label)}
    >
      <div className="neeto-ui-menubar__block-label">
        {
          icon && <i className="neeto-ui-menubar__block-icon">{icon}</i>
        }
        <Typography
          title={label}
          component="span"
          style="h5"
          weight="medium"
        >
          {label}
        </Typography>
      </div>
      {Number.isInteger(count) && (
        <div onClick={handleEdit}>
          <Typography
            component="span"
            style="h5"
            weight="medium"
          >
            {count > 99 ? "99+" : count}
          </Typography>
        </div>
      )}
    </Parent>
  );
};

Block.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  count: PropTypes.number,
  active: PropTypes.bool,
  onEdit: PropTypes.func,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Block.defaultProps = {
  active: false,
};

export default Block;
