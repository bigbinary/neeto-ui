import React, { useRef } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { Search, Right, HamburgerMenu } from "@bigbinary/neeto-icons";
import PropTypes from "prop-types";

import Typography from "../Typography";
import Button from "../Button";
import Input from "../Input";

const Header = ({
  title,
  menuBarToggle,
  searchProps,
  className = "",
  actionBlock,
  breadcrumbs = [],
}) => {
  const searchRef = useRef();

  return (
    <div className={classnames(["neeto-ui-header", className])}>
      <div className="neeto-ui-header__left">
        {menuBarToggle && (
          <Button
            onClick={menuBarToggle}
            style="text"
            size="large"
            className="mr-2"
            icon={HamburgerMenu}
            data-cy="menubar-toggle-button"
          />
        )}
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb, index) => {
            const { text, link } = breadcrumb;
            return (
              <div className="neeto-ui-header__breadcrumb" key={index}>
                <Link to={link}>
                  <Typography
                    lineHeight="tight"
                    style="h2"
                    weight="semibold"
                    data-test-id={text}
                    data-cy={text}
                  >
                    {text}
                  </Typography>
                </Link>
                <Right className="neeto-ui-header__breadcrumb-separator" />
              </div>
            );
          })}

        <Typography
          lineHeight="tight"
          style="h2"
          weight="semibold"
          data-test-id="main-header"
          data-cy="main-header"
          className="neeto-ui-text-gray-800"
        >
          {title}
        </Typography>
      </div>
      <div className="gap-3 neeto-ui-header__right">
        {searchProps && (
          <Input
            ref={searchRef}
            type="search"
            placeholder="Search"
            className={classnames(["w-72", searchProps.className])}
            prefix={<Search />}
            {...searchProps}
          />
        )}
        {actionBlock}
      </div>
    </div>
  );
};

Header.propTypes = {
  /**
   * To set a title in the header section.
   */
  title: PropTypes.node,
  /**
   * To set a subtitle in the header section.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered in the right side of the header section.
   */

  actionBlock: PropTypes.node,
  /**
   * To add a search field to the subheader section.
   */
  searchProps: PropTypes.object,
  /**
   * To show breadcrumbs in the header section. `text` accepts a text string to be shown as the breadcrumb and `link` accepts relative URL path for the breadcrumb.
   */
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  /**
   * To provide the function to toggle the menu bar.
   */
  menuBarToggle: PropTypes.func,
};

export default Header;
