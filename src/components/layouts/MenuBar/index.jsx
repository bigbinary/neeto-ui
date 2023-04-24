import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import Typography from "components/Typography";

import AddNew from "./AddNew";
import Block from "./Block";
import Item from "./Item";
import Search from "./Search";
import SubTitle from "./SubTitle";

const MenuBar = ({
  title = "",
  children,
  showMenu = false,
  className = "",
  ...otherProps
}) => (
  <CSSTransition
    unmountOnExit
    classNames="neeto-ui-menubar"
    in={showMenu}
    timeout={300}
  >
    <div
      className={classnames("neeto-ui-menubar__wrapper", {
        [className]: className,
      })}
    >
      <div className="neeto-ui-menubar__container">
        {title && (
          <Typography
            className="neeto-ui-menubar__title"
            data-cy={otherProps["data-cy"] || "menubar-heading"}
            lineHeight="tight"
            style="h2"
            weight="semibold"
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
