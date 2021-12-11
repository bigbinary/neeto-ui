import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SubHeader = ({ className, leftActionBlock, rightActionBlock }) => {
  return (
    <div className={classnames(["neeto-ui-subheader", className])}>
      {leftActionBlock && (
        <div className="neeto-ui-subheader__left">{leftActionBlock}</div>
      )}
      {rightActionBlock && (
        <div className="neeto-ui-subheader__right">{rightActionBlock}</div>
      )}
    </div>
  );
};

SubHeader.propTypes = {
  /**
   * To specify external classnames as overrides to the header.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered in the left side of the subheader section.
   */
  leftActionBlock: PropTypes.node,
  /**
   * To specify the content to be rendered in the right side of the subheader section.
   */
  rightActionBlock: PropTypes.node,
};

export default SubHeader;
