import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { Right } from "@bigbinary/neeto-icons";
import PropTypes from "prop-types";

const Header = ({ title, menuBarHandle, className, actionBlock, breadcrumbs }) => {
  return (
    <div className={classnames(["neeto-ui-header", className])}>
      <div className="neeto-ui-header__left">
        {menuBarHandle}
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb, index) => {
            const { text, link } = breadcrumb;
            return (
              <div className="neeto-ui-header__breadcrumb" key={index}>
                <Link to={link}>
                  <h2 data-test-id={text} data-cy={text}>
                    {text}
                  </h2>
                </Link>
                <Right className="neeto-ui-header__breadcrumb-separator" />
              </div>
            );
          })}
        <h2 data-test-id="main-header" data-cy="main-header">
          {title}
        </h2>
      </div>
      <div className="neeto-ui-header__right">{actionBlock}</div>
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
   * To show breadcrumbs in the header section.
   */
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    link: PropTypes.string
  }))
};

export default Header;
