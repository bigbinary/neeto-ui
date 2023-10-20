import React, { forwardRef } from "react";

import { TreeSelect as AntdTree } from "antd";
import classnames from "classnames";
import { Down } from "neetoicons";
import PropTypes from "prop-types";

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
      onChange,
      placeholder = "",
      required = false,
      showSearch = false,
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
        {label && (
          <Label data-testid="treeselect-label" {...{ required }}>
            {label}
          </Label>
        )}
        <AntdTree
          allowClear={allowClear}
          data-cy="neeto-ui-tree-select-wrapper"
          disabled={disabled}
          dropdownStyle={{ zIndex: 100000 }}
          fieldNames={fieldNames}
          placeholder={placeholder}
          popupClassName="neeto-ui-tree-select-dropdown"
          ref={ref}
          showSearch={showSearch}
          size={size}
          suffixIcon={<SuffixIcon />}
          treeData={treeData}
          treeDataSimpleMode={treeDataSimpleMode}
          treeNodeFilterProp={fieldNames?.label ?? "label"}
          value={value || undefined}
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
          <Typography
            className="neeto-ui-input__error"
            data-testid="treeselect-error"
            style="body3"
          >
            {error}
          </Typography>
        )}
      </div>
    );
  }
);

TreeSelect.displayName = "TreeSelect";

TreeSelect.propTypes = {
  /**
   * Controls whether the value is allowed to be cleared or not.
   */
  allowClear: PropTypes.bool,
  /**
   * To specify additional classes.
   */
  className: PropTypes.string,
  /**
   * To disable the TreeSelect component.
   */
  disabled: PropTypes.bool,
  /**
   * To display the specified error.
   */
  error: PropTypes.string,
  /**
   * This prop can be used to override the default keys of label and value pairs in options.
   */
  fieldNames: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  /**
   * To display a label above the TreeSelect component.
   */
  label: PropTypes.string,
  /**
   * The callback function that will be triggered when value changes.
   */
  onChange: PropTypes.func,
  /**
   * Callback function to be executed when search input changes that can be
   * used for advanced usecases. This is not necessary as basic search works
   * when `showSearch` is enabled.
   */
  onSearch: PropTypes.func,
  /**
   * The placeholder string to be displayed.
   */
  placeholder: PropTypes.string,
  /**
   * To specify whether TreeSelect field is required or not.
   */
  required: PropTypes.bool,
  /**
   * The search value to make search controlled. This is not required as basic search
   * works when `showSearch` is enabled.
   */
  searchValue: PropTypes.string,
  /**
   * To enable search for the TreeSelect component.
   */
  showSearch: PropTypes.bool,
  /**
   * To specify the size of the TreeSelect component.
   */
  size: PropTypes.oneOf(["small", "middle", "large"]),
  /**
   * To specify the icon at the end of the TreeSelect component.
   */
  suffixIcon: PropTypes.node,
  /**
   * To specify the icon next to options that have children.
   */
  switcherIcon: PropTypes.node,
  /**
   * The options to be passed to the TreeSelect component.
   */
  treeData: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
        disabled: PropTypes.bool,
        children: PropTypes.array,
      })
    ),
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.string,
        disabled: PropTypes.bool,
        pId: PropTypes.string,
      })
    ),
  ]),
  /**
   * This prop specifies the format of data that has to be passed in the `treeData` prop.
   * When enabled, treeData can be a flat array of the form `{ id, label, value, pId }`.
   */
  treeDataSimpleMode: PropTypes.bool,
  /**
   * The currently selected option.
   */
  value: PropTypes.string,
};

export default TreeSelect;
