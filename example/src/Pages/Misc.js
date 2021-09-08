import React from "react";
import { Pagination, Callout } from "../../../lib/components";
import { Email } from "@bigbinary/neeto-icons";
import Header from "../Header";

const Misc = () => {
  return (
    <div className="w-full">
      <Header title="Misc" />
      <div className="p-6 space-y-10">
        <div className="w-1/2 space-y-6">
          <h2 className="text-lg">Pagination</h2>
          <Pagination
            count={200}
            pageNo={1}
            pageSize={20}
            siblingCount={1}
            navigate={() => {}}
          />
        </div>
        <div className="w-1/3 space-y-6">
          <h2 className="text-xl">Callout</h2>
          <Callout icon={Email} style="info">
            We just sent you a temporary sign up code. Please check your inbox and paste the sign up code below.
          </Callout>
          <Callout icon={Email} style="warning">
            We just sent you a temporary sign up code. Please check your inbox and paste the sign up code below.
          </Callout>
          <Callout icon={Email} style="danger">
            We just sent you a temporary sign up code. Please check your inbox and paste the sign up code below.
          </Callout>
        </div>
      </div>
    </div>
  );
};

export default Misc;
