import React from "react";
import { Search as SearchIcon } from "@bigbinary/neeto-icons";
import { Close } from "@bigbinary/neeto-icons";
import PropTypes from "prop-types";

import { Input, Button } from "../../index";

const Search = ({ collapse, onCollapse, ...props }) =>
  !collapse && (
    <div className="nui-menubar__search">
      <Input
        type="search"
        placeholder="Search"
        prefix={<SearchIcon size={16} />}
        {...props}
      />
      <Button
        size="large"
        style="text"
        icon={Close}
        iconSize={20}
        onClick={onCollapse}
      />
    </div>
  );

Search.propTypes = {
  ...Input.propTypes,
  collapse: PropTypes.bool,
  onCollapse: PropTypes.func,
};

export default Search;
