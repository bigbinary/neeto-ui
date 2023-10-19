import React, { forwardRef } from "react";

import { TreeSelect as AntdTree } from "antd";
import classnames from "classnames";
import { Down } from "neetoicons";

import Label from "./Label";
import Typography from "./Typography";

const TreeSelect = forwardRef(
  (
    {
      allowClear,
      className,
      disabled = false,
      error,
      fieldNames,
      label = "",
      loading = false,
      onChange,
      placeholder = "",
      required = false,
      showSearch = true,
      size = "middle",
      suffixIcon,
      switcherIcon,
      treeData,
      treeDataSimpleMode = true,
      value,
      ...otherProps
    },
    ref
  ) => {
    const SuffixIcon = suffixIcon ?? Down;

    const SwitcherIcon = switcherIcon ?? Down;

    return (
      <div className="neeto-ui-input__wrapper">
        {label && <Label {...{ required }}>{label}</Label>}
        <AntdTree
          allowClear={allowClear}
          disabled={disabled}
          dropdownStyle={{ zIndex: 100000 }}
          fieldNames={fieldNames}
          loading={loading}
          placeholder={placeholder}
          popupClassName="neeto-ui-tree-select-dropdown"
          ref={ref}
          showSearch={showSearch}
          size={size}
          suffixIcon={<SuffixIcon />}
          treeData={treeData}
          treeDataSimpleMode={treeDataSimpleMode}
          treeNodeFilterProp={fieldNames?.label ?? "title"}
          value={value}
          className={classnames("neeto-ui-tree-select__wrapper", className, {
            "neeto-ui-tree-select__error": error,
          })}
          switcherIcon={props => (
            <div {...props}>
              <SwitcherIcon />
            </div>
          )}
          onChange={onChange}
          {...otherProps}
        />
        {error && (
          <Typography className="neeto-ui-input__error" style="body3">
            {error}
          </Typography>
        )}
      </div>
    );
  }
);

TreeSelect.displayName = "TreeSelect";

export default TreeSelect;
