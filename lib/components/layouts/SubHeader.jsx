import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SubHeader = ({ className = "", leftActionBlock, rightActionBlock }) => (
  <div className={classnames(["neeto-ui-subheader", className])} data-testid="subheader">
    <div className="neeto-ui-subheader__left-wrapper">
      {leftActionBlock && (
        <div className="neeto-ui-subheader__left">{leftActionBlock}</div>
      )}
    </div>
    {rightActionBlock && (
      <div className="neeto-ui-subheader__right">{rightActionBlock}</div>
    )}
  </div>
);

SubHeader.propTypes = {
  /**
   * To specify external classnames as overrides to the Header.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered in the left side of the SubHeader section.
   */
  leftActionBlock: PropTypes.node,
  /**
   * To specify the content to be rendered in the right side of the SubHeader section.
   */
  rightActionBlock: PropTypes.node,
};

export default SubHeader;
