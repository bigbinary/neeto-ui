import React, { useRef } from "react";
import {
  Button,
  Input,
} from "../index";
import { Search, Delete, Disable } from "@bigbinary/neeto-icons";
import classnames from "classnames";

const SubHeader = ({
  className,
  searchProps,
  deleteButtonProps,
  disableButtonProps,
  actionBlock,
}) => {

  const searchRef = useRef();

  return (
    <div className={classnames(["nui-subheader", className])}>
      <div className="nui-subheader__left">
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
      <div className="nui-subheader__right">
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

export default SubHeader;
