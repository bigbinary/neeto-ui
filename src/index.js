import React, { useState } from "react";
import ReactDOM from "react-dom";
import { IconPicker } from "../lib";

const App = () => {
  const [icon, setIcon] = useState(null)
  return (
    <>
      Hello
      <IconPicker value={icon} onChange={setIcon} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
