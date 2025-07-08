import React, { forwardRef } from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

import Label from "components/Label";
import { useId } from "hooks";
import { hyphenize } from "utils";

const Item = forwardRef(
  (
    {
      name = "",
      label = "",
      className = "",
      labelProps,
      dataCy = "",
      ...otherProps
    },
    ref
  ) => {
    const id = useId(otherProps.id);

    return (
      <div className={classnames(["neeto-ui-radio__item", className])}>
        <input
          {...{ id, name, ref }}
          className="neeto-ui-radio"
          data-cy={dataCy || `${hyphenize(label)}-radio-input`}
          type="radio"
          {...otherProps}
        />
        {label && (
          <Label
            data-cy={dataCy || `${hyphenize(label)}-radio-label`}
            htmlFor={id}
            {...labelProps}
          >
            {label}
          </Label>
        )}
      </div>
    );
  }
);

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
