import React, { Component } from "react";
import { Popover, Classes } from "@blueprintjs/core";
import Button from "./Button";
import classnames from "classnames";

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
      closeOnSelect,
      popoverClassName,
      childClassName,
      ...otherProps
    } = this.props;

    const Target = customTarget;

    return (
      <Popover
        minimal
        className={className}
        popoverClassName={classnames(
          ["nui-dropdown--wrapper", popoverClassName],
          {
            [Classes.POPOVER_DISMISS]: closeOnSelect,
            "mt-2": !customTarget,
          }
        )}
        position="auto-end"
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
            {...buttonProps}
          />
        )}

        <div className={classnames(["nui-dropdown--container", childClassName])}>
          <ul
            className={classnames({
              "w-auto": autoWidth,
            })}
          >
            {children}
          </ul>
        </div>
      </Popover>
    );
  }
}
