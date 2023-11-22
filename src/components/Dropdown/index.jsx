import React, { useState } from "react";

import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useClick,
  useInteractions,
  FloatingPortal,
} from "@floating-ui/react";
import { Down } from "neetoicons";
import PropTypes from "prop-types";

import Button from "components/Button";
import { hyphenize } from "utils";

import {
  TRIGGERS,
  PLACEMENT,
  BTN_STYLES,
  BTN_SIZES,
  STRATEGY,
} from "./constants";
import Divider from "./Divider";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const Dropdown = ({
  icon,
  label,
  position = PLACEMENT.bottom,
  children,
  buttonStyle = BTN_STYLES.primary,
  buttonSize = BTN_SIZES.medium,
  customTarget,
  closeOnEsc = true,
  closeOnSelect = true,
  closeOnOutsideClick = true,
  trigger = TRIGGERS.click,
  strategy = STRATEGY.absolute,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = icon || Down;

  const { refs, floatingStyles, context } = useFloating({
    strategy,
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: position,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({ fallbackAxisSideDirection: "start" }),
      shift(),
    ],
  });

  const hover = useHover(context, {
    move: false,
    enabled: trigger !== "click",
  });
  const focus = useFocus(context, { enabled: trigger !== "click" });
  const dismiss = useDismiss(context, {
    escapeKey: closeOnEsc,
    outsidePress: closeOnOutsideClick,
  });
  const click = useClick(context, { enabled: trigger === "click" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    click,
  ]);

  const handleCloseOnClick = () => {
    if (closeOnSelect) setIsOpen(false);
  };

  return (
    <>
      {customTarget ? (
        <span ref={refs.setReference} {...getReferenceProps()}>
          {typeof customTarget === "function" ? customTarget() : customTarget}
        </span>
      ) : (
        <Button
          className="neeto-ui-dropdown"
          ref={refs.setReference}
          {...{ ...getReferenceProps(), label }}
          data-cy={`${hyphenize(label)}-dropdown-icon`}
          icon={Icon}
          iconPosition="right"
          size={buttonSize}
          style={buttonStyle}
        />
      )}
      <FloatingPortal>
        {isOpen && (
          <div
            className="neeto-ui-dropdown__popup"
            ref={refs.setFloating}
            style={floatingStyles}
            onClick={handleCloseOnClick}
            {...getFloatingProps()}
          >
            {children}
          </div>
        )}
      </FloatingPortal>
    </>
  );
};

Dropdown.Menu = Menu;
Dropdown.MenuItem = MenuItem;
Dropdown.Divider = Divider;

Dropdown.propTypes = {
  /**
   * To specify the icon to be rendered in the Dropdown target.
   */
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  /**
   * To specify the label for Dropdown target button.
   */
  label: PropTypes.string,
  /**
   * To specify whether the Dropdown is open or not.
   */
  isOpen: PropTypes.bool,
  /**
   * To specify the action to be triggered on closing the Dropdown.
   */
  onClose: PropTypes.func,
  /**
   * To specify the triggering action for Dropdown.
   */
  trigger: PropTypes.oneOf(Object.keys(TRIGGERS)),
  /**
   * To specify the positioning strategy to use. By default, it is absolute, which in the simplest cases does not require repositioning of the Dropdown.
   *
   * If your reference element is in a fixed container, use the fixed strategy
   */
  strategy: PropTypes.oneOf(Object.values(STRATEGY)),
  /**
   * To specify the classes to be passed to the Dropdown menu.
   */
  dropdownProps: PropTypes.object,
  /**
   * To specify the position of the Dropdown menu.
   */
  position: PropTypes.oneOf(Object.values(PLACEMENT)),
  /**
   * To specify the content to be rendered inside the Dropdown.
   */
  children: PropTypes.node,
  /**
   * To specify whether the Dropdown menu width needs to be set to auto or not.
   */
  autoWidth: PropTypes.bool,
  /**
   * To provide external classnames to Dropdown target wrapper.
   */
  className: PropTypes.string,
  /**
   * <div class="neeto-ui-tag neeto-ui-tag--size-small neeto-ui-tag--style-outline neeto-ui-tag--style-success mb-2">
   * New
   * </div>
   * To specify the size of the button to be rendered as the Dropdown target.
   */
  buttonSize: PropTypes.oneOf(Object.values(BTN_SIZES)),
  /**
   * To specify the style of the button to be rendered as the Dropdown target.
   */
  buttonStyle: PropTypes.oneOf(Object.values(BTN_STYLES)),
  /**
   * To specify the props to be passed to the Dropdown target button.
   */
  buttonProps: PropTypes.object,
  /**
   * To provide a custom target to be rendered instead of the default button target.
   */
  customTarget: PropTypes.node,
  /**
   * To specify whether the Dropdown is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * To specify whether the Dropdown should close on pressing esc key.
   */
  closeOnEsc: PropTypes.bool,
  /**
   * To specify whether the Dropdown should close on selecting an option.
   */
  closeOnSelect: PropTypes.bool,
  /**
   * To specify whether the Dropdown should close on clicking outside the Dropdown content. (will not have any effect if the component is controlled.)
   */
  closeOnOutsideClick: PropTypes.bool,
  /**
   * To provide custom modifiers to Dropdown component.
   */
  dropdownModifiers: PropTypes.array,
  /**
   * To specify whether the Dropdown should be multilevel.
   */
  isMultiLevel: PropTypes.bool,
  /**
   * <div class="neeto-ui-tag neeto-ui-tag--size-small neeto-ui-tag--style-outline neeto-ui-tag--style-danger mb-2">
   * Removed
   * </div>
   * _Use `dropdownProps` props instead._
   *
   */
  ulProps: PropTypes.object,
  /**
   * To specify the action that should be triggered when clicking outside of the controlled dropdown component.
   */
  onClickOutside: PropTypes.func,
};

export default Dropdown;
