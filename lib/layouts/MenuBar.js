import React from "react";
import classnames from "classnames";
import { Badge, Input, Button } from "../index";
import { Link } from "react-router-dom";
import { hyphenize } from "../common";

const noop = () => { };

const MenuBar = ({ size = "viewport", title, children, showMenu, className, ...otherProps  }) => {
  return (
    <div
      className={classnames(
        `nui-menubar__wrapper nui-menubar__wrapper--${size}`, 
        {
          "nui-menubar--hide": !showMenu,
          [className]: className
        }
      )}
    >
      {showMenu && (
        <div className="nui-menubar__container">
          {title &&
            <h1
              data-cy={ otherProps["data-cy"] || "menubar-heading" }
              className="mb-6 text-xl font-medium leading-tight text-gray-800"
            >
              {title}
            </h1>
          }
          {children}
        </div>
      )}
    </div>
  );
};

const Search = (props) => (
  <Input
    prefix={<i className="text-base text-gray-400 ri-search-line" />}
    placeholder="Search"
    className="mb-6"
    {...props}
  />
);

const SubTitle = ({ children, iconProps, ...otherProps }) => (
  <h6
    data-cy={otherProps["data-cy"] || "menubar-subtitle-heading"}
    className="mb-4 text-xs font-bold tracking-wider text-gray-400 uppercase"
  >
    <div className="flex flex-row items-center justify-between">
      {children}
      <span className="inline-flex">
        {iconProps &&
          iconProps.map((iconProp, index) => {
            return <Button style="icon" key={index} {...iconProp}></Button>;
          })}
      </span>
    </div>
  </h6>
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
      className={classnames(
        "nui-menubar__block",
        {
          "nui-menubar__block--editable": onEdit,
          active: active,
          [className]: className
        }
      )}
      onClick={onClick}
      data-cy={otherProps["data-cy"] || hyphenize(label)}
    >
      <div className="flex flex-row items-center justify-start overflow-hidden">
        {icon && <i className={classnames([icon], "mr-3")}></i>}
        <p>{label}</p>
      </div>
      {Number.isInteger(count) && (
        <Badge onClick={(e) => handleEdit(e)} color="gray">
          <span>{count > 99 ? "99+" : count}</span>
          <i className="ri-pencil-line"></i>
        </Badge>
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
      className={classnames("nui-menubar__item",
        {
          active: active,
          [className]: className
        }
      )}
      onClick={onClick}
      data-cy={otherProps["data-cy"] || hyphenize(label)}
    >
      <div className="flex flex-row items-center justify-start overflow-hidden">
        <p>{label}</p>&nbsp;
        {Number.isInteger(count) && <span>({count > 99 ? "99+" : count})</span>}
      </div>
      <div className="flex flex-row items-center justify-end">
        <i className="text-xl leading-none text-purple-500 ri-check-line"></i>
        {onEdit && (
          <Button style="icon" icon="ri-pencil-line" onClick={handleEdit} />
        )}
      </div>
    </div>
  );
};

MenuBar.Block = Block;
MenuBar.Item = Item;
MenuBar.SubTitle = SubTitle;
MenuBar.Search = Search;

export default MenuBar;
