import React from "react";
import { Search as SearchIcon, Close } from "@bigbinary/neeto-icons";
import PropTypes from "prop-types";

import Input from "../../Input";
import Button from "../../Button";

const Search = ({ collapse, onCollapse, ...props }) =>
  !collapse && (
    <div className="neeto-ui-menubar__search">
      <Input
        type="search"
        placeholder="Search"
        prefix={<SearchIcon />}
        {...props}
      />
      <Button
        size="large"
        style="text"
        icon={Close}
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
