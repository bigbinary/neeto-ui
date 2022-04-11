import React, { forwardRef } from "react";
import classNames from "classnames";
import { NavLink, withRouter } from "react-router-dom";

const LINK_CLASS_NAMES =
  "flex items-center no-underline select-none neeto-ui-sidebar__link";

const Link = forwardRef(({ children, to, href, ...otherProps }, ref) => {
  const isActive = location.pathname.includes(to);

  return href ? (
    <a
      className={classNames(LINK_CLASS_NAMES, { active: isActive })}
      href={href}
      {...otherProps}
    >
      {children}
    </a>
  ) : (
    <NavLink
      className={LINK_CLASS_NAMES}
      innerRef={ref}
      to={to}
      isActive={() => isActive}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});

export default withRouter(Link);
