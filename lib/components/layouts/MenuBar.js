import React from "react";
import classnames from "classnames";
import { Input, Button } from "../index";
import { Link } from "react-router-dom";
import { hyphenize } from "../../common";
import { Search as SearchIcon } from "@bigbinary/neeto-icons";

const noop = () => {};

const MenuBar = ({
  size = "viewport",
  title,
  children,
  showMenu,
  className,
  ...otherProps
}) => {
  return (
    <div
      className={classnames(
        `v2-nui-menubar__wrapper v2-nui-menubar__wrapper--${size}`,
        {
          "nui-menubar--hide": !showMenu,
          [className]: className,
        }
      )}
    >
      {showMenu && (
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
      )}
    </div>
  );
};

const Search = (props) => (
  <Input
    suffix={<SearchIcon />}
    placeholder="Search"
    className="mb-6"
    {...props}
  />
);

const SubTitle = ({ children, iconProps, ...otherProps }) => (
  <div
    data-cy={otherProps["data-cy"] || "menubar-subtitle-heading"}
    className="nui-menubar__subtitle"
  >
    <h6 className="nui-menubar__subtitle__heading">
      {children}
    </h6>
    <div className="nui-menubar__subtitle__actions">
      {iconProps &&
          iconProps.map((iconProp, index) => {
            return <Button style="icon" key={index} {...iconProp}></Button>;
          })}
    </div>
  </div>
);

const Block = ({
  url,
  icon,
  label,
  count,
  active,
  onEdit,
  onClick = noop,
  className,
  ...otherProps
}) => {
  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit && onEdit();
  };

  let Parent = "div";

  if (url) {
    Parent = Link;
  }
  return (
    <Parent
      to={url}
      className={classnames("nui-menubar__block", {
        "nui-menubar__block--editable": onEdit,
        "nui-menubar__block--active": active,
        [className]: className,
      })}
      onClick={onClick}
      data-cy={otherProps["data-cy"] || hyphenize(label)}
    >
      <div className="nui-menubar__block__label">
        {icon}
        <p title={label}>{label}</p>
      </div>
      {Number.isInteger(count) && (
        <div onClick={handleEdit}>
          <span>{count > 99 ? "99+" : count}</span>
        </div>
      )}
    </Parent>
  );
};

const Item = ({
  label,
  count,
  active,
  onEdit,
  onClick = noop,
  className,
  ...otherProps
}) => {
  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit && onEdit();
  };

  return (
    <div
      className={classnames("nui-menubar__item", {
        active: active,
        [className]: className,
      })}
      onClick={onClick}
      data-cy={otherProps["data-cy"] || hyphenize(label)}
    >
      <p title={label}>{label}</p>
      {Number.isInteger(count) && <span onClick={handleEdit}>{count > 99 ? "99+" : count}</span>}
    </div>
  );
};

MenuBar.Block = Block;
MenuBar.Item = Item;
MenuBar.SubTitle = SubTitle;
MenuBar.Search = Search;

export default MenuBar;