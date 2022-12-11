import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { useId } from "@reach/auto-id";

import Label from "../Label";
import { hyphenize } from "../../common";

const Item = ({
  name = "",
  label = "",
  className = "",
  labelProps,
  ...otherProps
}) => {
  const id = useId(otherProps.id);

  return (
    <div className={classnames(["neeto-ui-radio__item", className])}>
      <input
        id={id}
        type="radio"
        name={name}
        className="neeto-ui-radio"
        {...otherProps}
      />
      {label && (
        <Label
          data-cy={`${hyphenize(label)}-radio-label`}
          htmlFor={id}
          {...labelProps}
        >
          {label}
        </Label>
      )}
    </div>
  );
};

Item.displayName = "Radio.Item";

Item.propTypes = {
  /**
   * To specify the name of the radio group.
   */
  name: PropTypes.string,
  /**
   * To specify the label to be displayed for radio item.
   */
  label: PropTypes.node,
  /**
   * To specify external classnames as overrides to the radio item.
   */
  className: PropTypes.string,
};

export default Item;
