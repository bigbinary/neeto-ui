import React from "react";

import { Search as SearchIcon, Close } from "neetoicons";
import PropTypes from "prop-types";

import Button from "components/Button";
import Input from "components/Input";

const Search = ({ collapse = true, onCollapse, ...props }) =>
  !collapse && (
    <div className="neeto-ui-menubar__search">
      <Input
        placeholder="Search"
        prefix={<SearchIcon />}
        type="search"
        {...props}
      />
      <Button icon={Close} style="text" onClick={onCollapse} />
    </div>
  );

Search.propTypes = {
  ...Input.propTypes,
  /**
   * To specify whether the search field is collapsed
   */
  collapse: PropTypes.bool,
  /**
   * To provide a callback function on collapse of the search field
   */
  onCollapse: PropTypes.func,
};

export default Search;
