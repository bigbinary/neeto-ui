import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";

import Typography from "lib/components/Typography";
import { hyphenize, noop } from "lib/utils";


const Block = ({
  url,
  icon,
  label,
  count,
  active = false,
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
        {icon && <i className="neeto-ui-menubar__block-icon">{icon}</i>}
        <Typography title={label} component="span" style="h5" weight="medium">
          {label}
        </Typography>
      </div>
      {Number.isInteger(count) && (
        <div onClick={handleEdit}>
          <Typography component="span" style="h5" weight="medium">
            {count}
          </Typography>
        </div>
      )}
    </Parent>
  );
};

Block.propTypes = {
  /**
   * To provide the url of the Block
   */
  url: PropTypes.string,
  /**
   * To provide the icon of the Block
   */
  icon: PropTypes.node,
  /**
   * To provide the label of the Block
   */
  label: PropTypes.string,
  /**
   * To specify the count of items in the Block
   */
  count: PropTypes.number,
  /**
   * To specify whether the Block is active
   */
  active: PropTypes.bool,
  onEdit: PropTypes.func,
  /**
   * To provide a callback function on click of the Block
   */
  onClick: PropTypes.func,
  /**
   * To specify external classnames as overrides to the Block
   */
  className: PropTypes.string,
};

export default Block;
