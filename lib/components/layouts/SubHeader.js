import React, { useRef } from "react";
import { Search, Delete, Disable } from "@bigbinary/neeto-icons";
import classnames from "classnames";
import PropTypes from "prop-types";

import Button from "../Button";
import Input from "../Input";

const SubHeader = ({
  className,
  searchProps,
  deleteButtonProps,
  disableButtonProps,
  actionBlock,
}) => {

  const searchRef = useRef();

  return (
    <div className={classnames(["neeto-ui-subheader", className])}>
      <div className="neeto-ui-subheader__left">
        {searchProps &&
          <Input
            ref={searchRef}
            type="search"
            placeholder="Search"
            prefix={<Search size={20} />}
            {...searchProps}
          />
        }
      </div>
      <div className="neeto-ui-subheader__right">
        {deleteButtonProps && (
          <Button
            style="secondary"
            label="Delete"
            icon={Delete}
            data-test-id="subheader-delete-button"
            data-cy={deleteButtonProps["data-cy"] || "subheader-delete-button"}
            {...deleteButtonProps}
          />
        )}
        {disableButtonProps && (
          <Button
            style="secondary"
            label="Disable"
            icon={Disable}
            data-test-id="subheader-disable-button"
            data-cy={deleteButtonProps["data-cy"] || "subheader-disable-button"}
            {...disableButtonProps}
          />
        )}
        {actionBlock &&
          <>
            {actionBlock}
          </>
        }
      </div>
    </div>
  );
};

SubHeader.propTypes = {
  /**
   * To specify external classnames as overrides to the header.
   */
  className: PropTypes.string,
  /**
   * To add a search field to the subheader section.
   */
  searchProps: PropTypes.object,
  /**
   * To add delete button to the subheader section.
   */
  deleteButtonProps: PropTypes.object,
  disableButtonProps: PropTypes.object,
  /**
   * To specify the content to be rendered in the right side of the header section.
   */
  actionBlock: PropTypes.node,
};

export default SubHeader;
