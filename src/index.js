import React from "react";
import ReactDOM from "react-dom";
import { Button, Input, showToastr, showErrorToastr, ToastContainer } from "../lib";

const App = () => {
  return (
    <>
      <ToastContainer />
    <div className="grid grid-flow-row gap-8 p-6">
      <div>
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
