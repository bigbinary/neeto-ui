import React, { forwardRef } from "react";

import { TreeSelect as AntdTreeSelect, ConfigProvider } from "antd";
import classnames from "classnames";
import { Down } from "neetoicons";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES, getLocale } from "utils";

import Label from "./Label";

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
    const { t, i18n } = useTranslation();
    const SuffixIcon = suffixIcon ?? Down;

    const SwitcherIcon = switcherIcon ?? Down;

    return (
      <ConfigProvider
        theme={{
          token: { ...ANT_DESIGN_GLOBAL_TOKEN_OVERRIDES },
          components: {
            TreeSelect: {
              nodeHoverBg: "rgb(var(--neeto-ui-gray-100))",
              nodeSelectedBg: "rgb(var(--neeto-ui-primary-500))",

              // Global overrides
              colorBgElevated: "rgb(var(--neeto-ui-white))",
            },
          },
        }}
      >
        <div className="neeto-ui-input__wrapper">
          {label && (
            <Label {...{ required }} data-testid="treeselect-label">
              {label}
            </Label>
          )}
          <AntdTreeSelect
            {...{
              allowClear,
              disabled,
              fieldNames,
              onChange,
              placeholder,
              ref,
              showSearch,
              size,
              treeData,
              treeDataSimpleMode,
            }}
            data-cy="neeto-ui-tree-select-wrapper"
            dropdownStyle={{ zIndex: 100000 }}
            popupClassName="neeto-ui-tree-select-dropdown"
            suffixIcon={<SuffixIcon />}
            treeNodeFilterProp={fieldNames?.label ?? "label"}
            value={value || undefined}
            className={classnames("neeto-ui-tree-select__wrapper", className, {
              "neeto-ui-tree-select__error": error,
            })}
            notFoundContent={
              // eslint-disable-next-line @bigbinary/neeto/hard-coded-strings-should-be-localized
              <div className="neeto-ui-text-center neeto-ui-p-1">
                {getLocale({
                  i18n,
                  translationKey: "neetoui.treeSelect.noOptions",
                  defaultValue: "No options",
                  t,
                })}
              </div>
            }
            switcherIcon={props => (
              <div {...props}>
                <SwitcherIcon />
              </div>
            )}
            {...otherProps}
          />
          {error && (
            <p className="neeto-ui-input__error" data-testid="treeselect-error">
              {error}
            </p>
          )}
        </div>
      </ConfigProvider>
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
