import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { hyphenize } from "../../../common";

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

  let Parent = url ? Link : (props) => <div {...props}/>;

  return (
    <Parent
      to={url}
      className={classnames("nui-menubar__block", {
        "nui-menubar__block--editable": onEdit,
        "nui-menubar__block--active": active,
        [className]: className,
      })}
      onClick={onClick}
      data-cy={otherProps["data-cy"] || hyphenize(label)}
    >
      <div className="nui-menubar__block__label">
        {icon}
        <p title={label}>{label}</p>
      </div>
      {Number.isInteger(count) && (
        <div onClick={handleEdit}>
          <span>{count > 99 ? "99+" : count}</span>
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
  active: false
};

export default Block;