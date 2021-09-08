import React from "react";
import { Select } from "../../../lib/components";
import Header from "../Header";

const SelectField = () => {
  return (
    <div className="w-full">
      <Header title="Select Fields" />
      <div className="p-6 space-y-6">
        <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
          <h2 className="text-xl">Select/Large</h2>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Select placeholder="Select Placeholder" autoFocus/>
            <Select
              placeholder="Select Placeholder"
            />
            <Select placeholder="Select Placeholder" />
            <Select placeholder="Select Placeholder" />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Select placeholder="Select Placeholder" />
            <Select
              placeholder="Select Placeholder"
            />
            <Select placeholder="Select Placeholder" />
            <Select placeholder="Select Placeholder" />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Select placeholder="Select Placeholder" disabled />
            <Select
              placeholder="Select Placeholder"
              disabled
            />
            <Select placeholder="Select Placeholder" disabled />
            <Select placeholder="Select Placeholder" disabled />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Select placeholder="Select Placeholder" error={true} />
            <Select
              placeholder="Select Placeholder"
              error={true}
            />
            <Select placeholder="Select Placeholder" error={true} />
            <Select placeholder="Select Placeholder" error={true} />
          </div>
        </div>
        <div className="p-4 space-y-8 border border-indigo-500 border-dashed">
          <h2 className="text-xl">Select/Small</h2>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Select placeholder="Select Placeholder" size="small" />
            <Select
              placeholder="Select Placeholder"
              size="small"
            />
            <Select placeholder="Select Placeholder" size="small" />
            <Select placeholder="Select Placeholder" size="small" />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Select placeholder="Select Placeholder" size="small" />
            <Select
              placeholder="Select Placeholder"
              size="small"
            />
            <Select placeholder="Select Placeholder" size="small" />
            <Select placeholder="Select Placeholder" size="small" />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Select placeholder="Select Placeholder" size="small" disabled />
            <Select
              placeholder="Select Placeholder"
              size="small"
              disabled
            />
            <Select placeholder="Select Placeholder" size="small" disabled />
            <Select placeholder="Select Placeholder" size="small" disabled />
          </div>
          <div className="flex flex-row items-center justify-center space-x-8">
            <Select placeholder="Select Placeholder" size="small" error={true} />
            <Select
              placeholder="Select Placeholder"
              size="small"
              error={true}
            />
            <Select placeholder="Select Placeholder" size="small" error={true} />
            <Select placeholder="Select Placeholder" size="small" error={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectField;
