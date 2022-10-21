import React from "react";
import { Plus } from "@bigbinary/neeto-icons";
import PropTypes from "prop-types";

import Button from "../../Button";

const AddNew = ({ label = "", onClick, ...otherProps }) => (
  <div className="neeto-ui-menubar__add-new-wrap" {...otherProps}>
    <Button
      label={label}
      style="link"
      icon={Plus}
      iconPosition="left"
      iconSize={16}
      onClick={onClick}
      size="small"
    />
  </div>
);

AddNew.propTypes = {
  /**
   * To specify the label to be rendered as the add new button.
   */
  label: PropTypes.string,
};

export default AddNew;
