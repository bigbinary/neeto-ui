import React from "react";
import classnames from "classnames";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import Typography from "../../Typography";
import Block from "./Block";
import Item from "./Item";
import SubTitle from "./SubTitle";
import Search from "./Search";
import AddNew from "./AddNew";

const MenuBar = ({
  title = "",
  children,
  showMenu = false,
  className = "",
  ...otherProps
}) => (
  <CSSTransition
    in={showMenu}
    timeout={300}
    classNames="neeto-ui-menubar"
    unmountOnExit
  >
    <div
      className={classnames("neeto-ui-menubar__wrapper", {
        [className]: className,
      })}
    >
      <div className="neeto-ui-menubar__container">
        {title && (
          <Typography
            lineHeight="tight"
            style="h2"
            weight="semibold"
            data-cy={otherProps["data-cy"] || "menubar-heading"}
            className="neeto-ui-menubar__title"
          >
            {title}
          </Typography>
        )}
        {children}
      </div>
    </div>
  </CSSTransition>
);

MenuBar.Block = Block;
MenuBar.Item = Item;
MenuBar.SubTitle = SubTitle;
MenuBar.Search = Search;
MenuBar.AddNew = AddNew;

MenuBar.propTypes = {
  /**
   * To specify the content to be rendered as the title for the MenuBar
   */
  title: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * To specify whether the MenuBar is visible or not.
   */
  showMenu: PropTypes.bool,
  /**
   * To specify external classnames for the MenuBar.
   */
  className: PropTypes.string,
};

export default MenuBar;
