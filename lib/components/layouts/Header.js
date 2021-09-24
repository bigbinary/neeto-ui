import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { Right } from "@bigbinary/neeto-icons";
import PropTypes from "prop-types";

const Header = ({ title, menuBarHandle, className, actionBlock, breadcrumbs }) => {
  return (
    <div className={classnames(["nui-header", className])}>
      <div className="nui-header__left">
        {menuBarHandle}
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb, index) => {
            const { text, link } = breadcrumb;
            return (
              <div className="nui-header__breadcrumb" key={index}>
                <Link to={link}>
                  <h2 data-test-id={text} data-cy={text}>
                    {text}
                  </h2>
                </Link>
                <Right className="nui-header__breadcrumb-separator" />
              </div>
            );
          })}
        <h2 data-test-id="main-header" data-cy="main-header">
          {title}
        </h2>
      </div>
      <div className="nui-header__right">{actionBlock}</div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.node,
  className: PropTypes.string,
  actionBlock: PropTypes.node,
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    link: PropTypes.string
  }))
};

export default Header;
