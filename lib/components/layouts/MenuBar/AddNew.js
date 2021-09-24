import React from "react";
import { Plus } from "@bigbinary/neeto-icons";
import PropTypes from "prop-types";

import { Button } from "../../index";

const AddNew = ({ label, onClick, ...otherProps }) => (
  <div className="nui-menubar__add-new-wrap" {...otherProps}>
    <Button
      label={label}
      style="link"
      icon={Plus}
      iconPosition="left"
      iconSize={16}
      onClick={onClick}
    />
  </div>
);

AddNew.propTypes = {
  label: PropTypes.string,
};

export default AddNew;
