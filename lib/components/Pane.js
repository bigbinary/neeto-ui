import React from "react";
import { Drawer } from "@blueprintjs/core";
import classnames from "classnames";
import Button from "./Button";
import PageLoader from "./PageLoader";

const Pane = props => {
  const {
    className,
    children,
    showFooter,
    submitButtonProps,
    cancelButtonProps,
    loading,
    ...otherProps
  } = props;
  return (
    <Drawer
      className={classnames(["nui-pane__wrapper", className])}
      size="40%"
      canEscapeKeyClose
      canOutsideClickClose
      {...otherProps}
    >
      <div
        className={classnames(["nui-pane__body"], {
          "nui-pane__body--has-footer": showFooter,
        })}
      >
        {loading ? <PageLoader /> : children}
      </div>
      {showFooter && (
        <div className="nui-pane__footer">
          <Button
            label="Cancel"
            size="large"
            style="secondary"
            className="mr-2"
            data-test-id="cancel-button"
            data-cy="pane-cancel-button"
            {...cancelButtonProps}
          />
          <Button
            label="Update"
            size="large"
            data-test-id="submit-button"
            data-cy="pane-submit-button"
            {...submitButtonProps}
          />
        </div>
      )}
    </Drawer>
  );
};

export default Pane;
