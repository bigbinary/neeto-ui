import React from "react";
import classnames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";

import Typography from "../../Typography";
import Block from "./Block";
import Item from "./Item";
import SubTitle from "./SubTitle";
import Search from "./Search";
import AddNew from "./AddNew";
import {
  MENUBAR_VARIANTS,
  MENUBAR_TRANSITION_DURATION,
} from "../../../constants/menuBar";

const MenuBar = ({
  title = "",
  children,
  showMenu = false,
  className = "",
  ...otherProps
}) => (
  <AnimatePresence>
    {showMenu && (
      <motion.div
        initial="collapsed"
        animate="open"
        exit="collapsed"
        variants={MENUBAR_VARIANTS}
        transition={{ duration: MENUBAR_TRANSITION_DURATION }}
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
              className="neeto-ui-text-gray-800 neeto-ui-menubar__title"
            >
              {title}
            </Typography>
          )}
          {children}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

MenuBar.Block = Block;
MenuBar.Item = Item;
MenuBar.SubTitle = SubTitle;
MenuBar.Search = Search;
MenuBar.AddNew = AddNew;

MenuBar.propTypes = {
  /**
   * To specify the content to be rendered as the title for the Menubar
   */
  title: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * To specify whether the Menubar is visible or not.
   */
  showMenu: PropTypes.bool,
  /**
   * To specify external classnames for the Menubar.
   */
  className: PropTypes.string,
};

export default MenuBar;
