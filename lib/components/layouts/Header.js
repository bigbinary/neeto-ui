import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { Right, HamburgerMenu } from "@bigbinary/neeto-icons";
import PropTypes from "prop-types";

import Typography from "../Typography";
import Button from "../Button";

const Header = ({
  title,
  menuBarToggle,
  className,
  actionBlock,
  breadcrumbs,
}) => {
  return (
    <div className={classnames(["neeto-ui-header", className])}>
      <div className="neeto-ui-header__left">
        {menuBarToggle && (
          <Button
            onClick={menuBarToggle}
            style="text"
            className="mr-2"
            icon={() => <HamburgerMenu size={20} color="#68737D" />}
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
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  menuBarToggle: PropTypes.func,
};

export default Header;
