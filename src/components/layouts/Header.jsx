import React, { useRef } from "react";

import classnames from "classnames";
import { Search, Right, HamburgerMenu } from "neetoicons";
import PropTypes from "prop-types";
import { isEmpty } from "ramda";
import { Link } from "react-router-dom";

import Button from "components/Button";
import Input from "components/Input";
import Typography from "components/Typography";

const Header = ({
  title,
  menuBarToggle,
  searchProps,
  className = "",
  actionBlock,
  breadcrumbs = [],
}) => {
  const searchRef = useRef(null);

  return (
    <div
      className={classnames([
        "neeto-ui-header",
        { "neeto-ui-header--has-breadcrumbs": !isEmpty(breadcrumbs) },
        className,
      ])}
    >
      <div className="neeto-ui-header__left">
        {menuBarToggle && (
          <Button
            aria-label="Toggle Menubar"
            className="neeto-ui-header__toggle-menubar-btn"
            data-cy="menubar-toggle-button"
            icon={HamburgerMenu}
            style="text"
            onClick={menuBarToggle}
          />
        )}
        <div className="neeto-ui-header__left-data-wrap">
          {breadcrumbs && (
            <div className="neeto-ui-header__breadcrumbs-wrap">
              {breadcrumbs.map((breadcrumb, index) => {
                const { text, link } = breadcrumb;

                return (
                  <div className="neeto-ui-header__breadcrumb" key={index}>
                    <Link to={link}>
                      <Typography
                        className="neeto-ui-text-gray-700 hover:neeto-ui-text-gray-800 neeto-ui-header__breadcrumb-link"
                        component="span"
                        data-cy={text}
                        data-test-id={text}
                        style="body2"
                        weight="normal"
                      >
                        {text}
                      </Typography>
                    </Link>
                    <Right
                      className="neeto-ui-header__breadcrumb-separator neeto-ui-text-gray-400"
                      size={16}
                    />
                  </div>
                );
              })}
            </div>
          )}
          <Typography
            className="neeto-ui-header__page-title"
            data-cy="main-header"
            data-test-id="main-header"
            lineHeight="tight"
            style="h2"
            weight="semibold"
          >
            {title}
          </Typography>
        </div>
      </div>
      <div className="neeto-ui-gap-3 neeto-ui-header__right">
        {searchProps && (
          <Input
            placeholder="Search"
            prefix={<Search />}
            ref={searchRef}
            type="search"
            className={classnames([
              "neeto-ui-header__search-input",
              searchProps.className,
            ])}
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
   * To set a title in the Header section.
   */
  title: PropTypes.node,
  /**
   * To set a subtitle in the Header section.
   */
  className: PropTypes.string,
  /**
   * To specify the content to be rendered in the right side of the Header section.
   */

  actionBlock: PropTypes.node,
  /**
   * To add a search field to the subheader section.
   */
  searchProps: PropTypes.object,
  /**
   * To show breadcrumbs in the Header section. `text` accepts a text string to be shown as the breadcrumb and `link` accepts relative URL path for the breadcrumb.
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
