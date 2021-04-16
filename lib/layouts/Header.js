import React from "react";
import classnames from "classnames";
import { Button } from "../index";
import { Link } from "react-router-dom";

const Header = ({
  title,
  className,
  actionBlock,
  showMenu,
  toggleMenu,
  breadcrumbs,
}) => {
  return (
    <div className={classnames(["nui-header", className])}>
      <div className="flex flex-row items-center justify-start text-xl leading-none text-gray-800">
        {toggleMenu && (
          <Button
            style="icon"
            icon={showMenu ? "ri-menu-fold-line" : "ri-menu-unfold-line"}
            className="mr-3 text-black"
            onClick={toggleMenu}
            data-cy="menu-fold-icon"
          />
        )}
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb, index) => {
            const { text, link } = breadcrumb;
            return (
              <div
                className="flex flex-row items-center justify-start"
                key={index}
              >
                <Link
                  to={link}
                  className="font-medium text-gray-500 transition-all duration-300 ease-in-out hover:text-gray-800 hover:no-underline"
                >
                  <h1 data-test-id={text} data-cy={text}>
                    {text}
                  </h1>
                </Link>
                <i className="mx-1 text-gray-500 ri-arrow-right-s-line"></i>
              </div>
            );
          })}
        <h1
          className="font-semibold text-gray-800"
          data-test-id="heading"
          data-cy="heading"
        >
          {title}
        </h1>
      </div>
      <div className="flex flex-row items-center justify-end">
        {actionBlock}
      </div>
    </div>
  );
};

export default Header;
