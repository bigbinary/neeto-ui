import React from "react";
import { Search as SearchIcon } from "@bigbinary/neeto-icons";
import { Close } from "@bigbinary/neeto-icons";

import { Input, Button } from "../../index";

const Search = (props) => (
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
    />
  </div>
);

Search.propTypes = Input.propTypes;

export default Search;