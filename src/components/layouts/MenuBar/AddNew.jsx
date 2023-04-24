import React from "react";

import { Plus } from "neetoicons";
import PropTypes from "prop-types";

import Button from "../../Button";

const AddNew = ({ label = "", onClick, ...otherProps }) => (
  <div className="neeto-ui-menubar__add-new-wrap" {...otherProps}>
    <Button
      icon={Plus}
      iconPosition="left"
      iconSize={16}
      label={label}
      size="small"
      style="link"
      onClick={onClick}
    />
  </div>
);

AddNew.propTypes = {
  /**
   * To specify the label to be rendered as the add new Button.
   */
  label: PropTypes.string,
};

export default AddNew;
