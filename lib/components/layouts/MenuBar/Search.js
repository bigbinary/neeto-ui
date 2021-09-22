import React from "react";
import { Search as SearchIcon } from "@bigbinary/neeto-icons";

import { Input } from "../../index";

const Search = (props) => (
  <Input
    suffix={<SearchIcon />}
    placeholder="Search"
    className="mb-6"
    {...props}
  />
);

Search.propTypes = Input.propTypes;

export default Search;