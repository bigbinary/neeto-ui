import React, { useState } from "react";
import classnames from "classnames";

const MainLayout = ({ children, className }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className={classnames(["nui-main-wrapper", className])}>
      {children(showMenu, toggleMenu, showFilter, toggleFilter)}
    </div>
  );
};

export default MainLayout;
