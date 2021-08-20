import React from "react";
import classnames from "classnames";

const Header = ({
  title,
  className,
  actionBlock,
}) => {
  return (
    <div className={classnames(["nui-header", className])}>
      <div className="nui-header__left">
        <h2
          data-test-id="main-header"
          data-cy="main-header"
        >
          {title}
        </h2>
      </div>
      <div className="nui-header__right">
        {actionBlock}
      </div>
    </div>
  );
};

export default Header;
