import React from "react";
import ReactDOM from "react-dom";
import { Avatar, Button, Input } from "../lib";

const App = () => {
  return (
    <>
    <div className="grid grid-flow-row gap-8 p-6">
      <div>
      <Avatar size={32} />
        <Button label="Show toastr" onClick={() => {
          showToastr("I'm a happy toastr."); 
        }} />
      </div>
      <div className="w-1/5">
        <Input placeholder="Sample field" helpText="I'm a sample field!" label="Testing" />
      </div>
    </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
