import React from "react";
import classnames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";

import Block from "./Block";
import Item from "./Item";
import SubTitle from "./SubTitle";
import Search from "./Search";
import { MENUBAR_VARIANTS, MENUBAR_TRANSITION_DURATION } from "../../../constants/menuBar";

const MenuBar = ({
  size = "viewport",
  title,
  children,
  showMenu,
  className,
  ...otherProps
}) => {
  return (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={MENUBAR_VARIANTS}
          transition={{ duration: MENUBAR_TRANSITION_DURATION }}
          className={classnames(
            `v2-nui-menubar__wrapper v2-nui-menubar__wrapper--${size}`,
            {
              [className]: className,
            }
          )}
        >
          <div className="nui-menubar__container">
            {title && (
              <h2
                data-cy={otherProps["data-cy"] || "menubar-heading"}
                className="nui-menubar__title"
              >
                {title}
              </h2>
            )}
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

MenuBar.Block = Block;
MenuBar.Item = Item;
MenuBar.SubTitle = SubTitle;
MenuBar.Search = Search;

MenuBar.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  showMenu: PropTypes.bool,
  className: PropTypes.string,
};

MenuBar.defaultProps = {
  size: "viewport",
  showMenu: false
};

export default MenuBar;
