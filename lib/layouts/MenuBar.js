import React from "react";
import classnames from "classnames";
import { Badge, Input, Button } from "../index";
import { Link } from "react-router-dom";
import { hyphenize } from "../common";

const MenuBar = ({ title, children, showMenu }) => {
  return (
    <div
      className={classnames(["nui-menubar--wrapper"], {
        "nui-menubar--hide": !showMenu,
      })}
    >
      {showMenu && (
        <div className="nui-menubar--container">
          <h1 data-cy="menubar-heading" className="mb-6 text-xl font-medium leading-tight text-gray-800">
            {title}
          </h1>
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

const SubTitle = ({ iconProps, children }) => (
  <h6 data-cy="menubar-subtitle-heading" className="mb-4 text-xs font-bold tracking-wider text-gray-400 uppercase">
    <div className="flex flex-row items-center justify-between">
      {children}
      {iconProps && <Button style="icon" {...iconProps}></Button>}
    </div>
  </h6>
);

const Block = ({
  label,
  icon,
  count,
  active,
  onClick,
  onEdit,
  url,
  dataCy,
}) => {
  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit();
  };

  let Parent = "div";

  if (url) {
    Parent = Link;
  }
  return (
    <Parent
      to={url}
      className={classnames(["nui-menubar--block"], { active: active })}
      onClick={onClick}
    >
      <div
        className="flex flex-row items-center justify-start"
        data-cy={dataCy || hyphenize(label)}
      >
        {icon && <i className={classnames([icon], "mr-3")}></i>}
        <p>{label}</p>
      </div>
      {Number.isInteger(count) && (
        <Badge onClick={(e) => handleEdit(e)}>
          <span>{count}</span>
          <i className="ri-pencil-line hover:text-gray-900"></i>
        </Badge>
      )}
    </Parent>
  );
};

const Item = ({ label, count, active, onClick, onEdit }) => {
  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit();
  };

  return (
    <div
      className={classnames(["nui-menubar--item"], { active: active })}
      onClick={onClick}
    >
      <p>
        {label}&nbsp;
        {Number.isInteger(count) && <span>({count})</span>}
      </p>
      <div className="flex flex-row items-center justify-end">
        <i className="text-xl text-purple-500 ri-check-line"></i>
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
