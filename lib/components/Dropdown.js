import React, { Component } from "react";
import { Popover, Classes } from "@blueprintjs/core";
import Button from "./Button";
import classnames from "classnames";
import { hyphenize } from "../common";

export default class Dropdown extends Component {
  render() {
    const {
      buttonStyle,
      buttonProps,
      label,
      customTarget,
      children,
      className,
      autoWidth,
      icon,
      closeOnSelect = true,
      disabled = false,
      popoverClassName,
      childClassName,
      ulProps,
      actionButtonProps,
      ...otherProps
    } = this.props;

    const Target = customTarget;

    return (
      <Popover
        minimal
        className={classnames(["flex", className])}
        popoverClassName={classnames(
          ["nui-dropdown--wrapper", popoverClassName],
          {
            [Classes.POPOVER_DISMISS]: closeOnSelect,
          }
        )}
        position="auto-end"
        disabled={disabled}
        {...otherProps}
      >
        {customTarget ? (
          <Target />
        ) : (
          <Button
            style={buttonStyle}
            label={label}
            icon={icon || "ri-arrow-down-s-line"}
            iconPosition="right"
            disabled={disabled}
            data-cy={`${hyphenize(label)}-dropdown-icon`}
            {...buttonProps}
          />
        )}

        <div
          className={classnames(["nui-dropdown--container", childClassName])}
          data-cy={`${hyphenize(label)}-dropdown-container`}
        >
          <ul
            {...ulProps}
            className={classnames([ulProps?.className], {
              "w-auto": autoWidth,
              "shadow-xs": actionButtonProps,
            })}
          >
            {children}
          </ul>
          {actionButtonProps && (
            <Button
              fullWidth
              {...actionButtonProps}
              className={classnames([
                "rounded-none border-0",
                actionButtonProps.className,
              ])}
              data-cy={`${hyphenize(label)}-dropdown-action-button`}
            />
          )}
        </div>
      </Popover>
    );
  }
}
