import React, { useState, useRef } from "react";

import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  arrow,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
  FloatingArrow,
  useClientPoint,
  useClick,
  hide,
  FloatingFocusManager,
  useTransitionStyles,
  safePolygon,
} from "@floating-ui/react";
import classNames from "classnames";
import PropTypes from "prop-types";

import {
  POSITION,
  X_AXIS,
  Y_AXIS,
  CLICK,
  DIRECTION,
  HORIZONTAL,
  ROLE,
  TIP_RADIUS,
  TIP_WIDTH,
  TIP_HEIGHT,
} from "./constants";

const Tooltip = ({
  children,
  content,
  position = "auto",
  disabled = false,
  followCursor,
  trigger = "hover",
  hideAfter = 0,
  offsetValue = 10,
  isPopover = false,
  targeElement,
  className = "",
  interactive,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);

  if (hideAfter > 0 && isOpen) setTimeout(() => setIsOpen(false), hideAfter);

  const { refs, floatingStyles, context } = useFloating({
    open: disabled ? false : isOpen,
    onOpenChange: setIsOpen,
    placement: position,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(offsetValue),
      flip({ fallbackAxisSideDirection: DIRECTION }),
      shift(),
      arrow({ element: arrowRef }),
      hide(),
    ],
  });

  const WrapperComponent = isPopover ? FloatingFocusManager : FloatingPortal;
  const wrapperProps = isPopover ? { context, modal: true } : {};
  const showContent = isOpen && !disabled;

  const clientPoint = useClientPoint(context, {
    enabled: !!followCursor,
    axis: followCursor === HORIZONTAL ? X_AXIS : Y_AXIS,
  });

  const hover = useHover(context, {
    enabled: trigger !== CLICK,
    move: !hideAfter,
    handleClose: interactive ? safePolygon() : null,
  });
  const focus = useFocus(context, { enabled: trigger !== CLICK });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: ROLE });
  const click = useClick(context, { enabled: trigger === CLICK });
  const { styles } = useTransitionStyles(context, { duration: 150 });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
    clientPoint,
    click,
  ]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()} className="w-max">
        {isPopover ? targeElement : children}
      </div>
      <WrapperComponent {...wrapperProps}>
        {showContent && (
          <div
            ref={refs.setFloating}
            style={{ ...floatingStyles, ...styles }}
            className={classNames([className], {
              "neeto-ui-tooltip": !isPopover,
            })}
            {...getFloatingProps()}
          >
            {content}
            {!isPopover && (
              <FloatingArrow
                {...{ context }}
                height={TIP_HEIGHT}
                ref={arrowRef}
                tipRadius={TIP_RADIUS}
                width={TIP_WIDTH}
              />
            )}
          </div>
        )}
      </WrapperComponent>
    </>
  );
};

Tooltip.propTypes = {
  /**
   * The component to be rendered inside the popup.
   */
  content: PropTypes.node,
  /**
   * Tooltip popup will be shown when mouse is hovered over this component.
   */
  children: PropTypes.node,
  /**
   * To display Tooltip in dark or light theme. By default the theme is dark.
   */
  theme: PropTypes.oneOf(["dark", "light"]),
  /**
   * To specify whether the Tooltip is disabled or not.
   */
  disabled: PropTypes.bool,
  /**
   * To specify the position of the Tooltip.
   */
  position: PropTypes.oneOf(Object.values(POSITION)),
  /**
   * To specify whether the Tooltip can be hovered over and clicked inside without hiding.
   */
  interactive: PropTypes.bool,
  /**
   * To auto-hide the Tooltip after n-milliseconds.
   * Negative values to this prop disables this feature.
   * By default it's disabled.
   */
  hideAfter: PropTypes.number,
  /**
   * Add distance between the reference and floating element.
   */
  offsetValue: PropTypes.number,
  /**
   * To provide a custom target to be rendered instead of the default button target.
   */
  targeElement: PropTypes.node,
};

export default Tooltip;
