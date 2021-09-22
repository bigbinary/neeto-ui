import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import { hyphenize } from "../../../common";

const noop = () => {};

const Item = ({
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

  return (
    <div
      className={classnames("nui-menubar__item", {
        active: active,
        [className]: className,
      })}
      onClick={onClick}
      data-cy={otherProps["data-cy"] || hyphenize(label)}
    >
      <p title={label}>{label}</p>
      {Number.isInteger(count) && (
        <span onClick={handleEdit}>{count > 99 ? "99+" : count}</span>
      )}
    </div>
  );
};

Item.propTypes = {
  label: PropTypes.string,
  count: PropTypes.number,
  active: PropTypes.bool,
  onEdit: PropTypes.func,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Item.defaultProps = {
  active: false
};

export default Item;