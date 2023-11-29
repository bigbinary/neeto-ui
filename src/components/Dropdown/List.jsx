import React, { forwardRef, useRef, useState, useEffect } from "react";

import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useDismiss,
  useClick,
  useInteractions,
  FloatingPortal,
  safePolygon,
  useFloatingNodeId,
  FloatingNode,
  useFloatingParentNodeId,
  FloatingList,
  FloatingFocusManager,
  useListItem,
  useMergeRefs,
  useListNavigation,
  useTypeahead,
  useFloatingTree,
} from "@floating-ui/react";
import classnames from "classnames";
import { Down } from "neetoicons";

import Button from "components/Button";
import { hyphenize } from "utils";

import {
  TRIGGERS,
  PLACEMENT,
  BTN_STYLES,
  BTN_SIZES,
  STRATEGY,
} from "./constants";

const List = forwardRef(
  (
    {
      isOpen,
      onClose,
      icon,
      label,
      position = PLACEMENT.bottomStart,
      children,
      buttonStyle = BTN_STYLES.primary,
      buttonSize = BTN_SIZES.medium,
      customTarget,
      closeOnEsc = true,
      closeOnOutsideClick = true,
      trigger = TRIGGERS.click,
      strategy = STRATEGY.absolute,
      buttonProps = {},
      dropdownProps = {},
      disabled = false,
      closeOnSelect = true,
    },
    forwardedRef
  ) => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const isControlled = !!isOpen;

    const isOpenState = isControlled ? isOpen : isDropDownOpen;
    const onOpenStateChange = isControlled ? onClose : setIsDropDownOpen;

    const { classNames: dropdownClassName, ...otherDropdownProps } =
      dropdownProps;

    const elementsRef = useRef([]);
    const labelsRef = useRef([]);
    const tree = useFloatingTree();

    const nodeId = useFloatingNodeId();
    const parentId = useFloatingParentNodeId();
    const item = useListItem();

    const isNested = parentId !== null;
    const Icon = icon || Down;

    const { refs, floatingStyles, context } = useFloating({
      nodeId,
      strategy,
      open: isOpenState,
      onOpenChange: onOpenStateChange,
      placement: position,
      whileElementsMounted: autoUpdate,
      middleware: [
        offset({
          mainAxis: isNested ? 0 : 5,
          alignmentAxis: isNested ? -5 : 0,
        }),
        flip({ fallbackAxisSideDirection: "start" }),
        shift(),
      ],
    });

    const reference = useMergeRefs([refs.setReference, item.ref, forwardedRef]);

    const hover = useHover(context, {
      move: false,
      enabled: trigger !== "click",
      delay: { open: 75 },
      handleClose: safePolygon({ requireIntent: false }),
    });

    const dismiss = useDismiss(context, {
      escapeKey: closeOnEsc,
      outsidePress: closeOnOutsideClick,
      bubbles: false,
    });

    const click = useClick(context, { enabled: trigger === "click" });

    const listNavigation = useListNavigation(context, {
      listRef: elementsRef,
      nested: isNested,
    });

    const typeAhead = useTypeahead(context, { listRef: labelsRef });

    const { getReferenceProps, getFloatingProps } = useInteractions([
      hover,
      dismiss,
      click,
      listNavigation,
      typeAhead,
    ]);

    const handleTreeClick = () => {
      if (closeOnSelect) onOpenStateChange(false);
    };

    const onSubMenuOpen = ({
      nodeId: eventNodeId,
      parentId: eventParentId,
    }) => {
      if (!(eventNodeId !== nodeId && eventParentId === parentId)) return;
      onOpenStateChange(false);
    };

    useEffect(() => {
      tree?.events.on("click", handleTreeClick);
      tree?.events.on("menuopen", onSubMenuOpen);

      return () => {
        tree?.events.off("click", handleTreeClick);
        tree?.events.off("menuopen", onSubMenuOpen);
      };
    }, [tree, nodeId, parentId]);

    useEffect(() => {
      if (!(isOpenState && tree)) return;
      tree.events.emit("menuopen", { parentId, nodeId });
    }, [tree, isOpenState, nodeId, parentId]);

    return (
      <FloatingNode id={nodeId}>
        {customTarget ? (
          <span ref={reference} {...getReferenceProps()}>
            {typeof customTarget === "function"
              ? customTarget()
              : React.cloneElement(customTarget, { isNested })}
          </span>
        ) : (
          <Button
            className="neeto-ui-dropdown"
            data-cy={`${hyphenize(label)}-dropdown-icon`}
            disabled={disabled || buttonProps?.disabled}
            icon={Icon}
            iconPosition="right"
            ref={reference}
            size={buttonSize}
            style={buttonStyle}
            {...{
              dropdownProps,
              label,
              ...buttonProps,
              ...getReferenceProps(),
            }}
          />
        )}
        <FloatingList {...{ elementsRef, labelsRef }}>
          {isOpenState && (
            <FloatingPortal>
              <FloatingFocusManager
                {...{ context }}
                initialFocus={isNested ? -1 : 0}
                modal={false}
                returnFocus={!isNested}
              >
                <div
                  ref={refs.setFloating}
                  style={floatingStyles}
                  className={classnames("neeto-ui-dropdown__popup", {
                    [dropdownClassName]: dropdownClassName,
                  })}
                  {...{
                    ...getFloatingProps(),
                    ...otherDropdownProps,
                  }}
                >
                  {children}
                </div>
              </FloatingFocusManager>
            </FloatingPortal>
          )}
        </FloatingList>
      </FloatingNode>
    );
  }
);

List.displayName = "Dropdown List";

export default List;
