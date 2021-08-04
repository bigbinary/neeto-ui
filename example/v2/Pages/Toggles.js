import React, { useState } from "react";
import { Switch, Radio, Checkbox } from "../../../lib/v2";
import Header from "../Header";

const Misc = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="w-full">
      <Header title="Toggles" />
      <div className="p-6 space-y-10">
        <div className="w-1/2 space-y-6">
          <h2 className="text-base">Radio, Checkbox and Toggle</h2>
          <div className="flex flex-row items-center justify-start space-x-6">
            <div>
              <Radio>
                <Radio.Item name="radio" />
                <Radio.Item name="radio" disabled />
              </Radio>
            </div>
            <div className="flex space-x-6">
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <Checkbox
                disabled
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            </div>
            <div className="flex space-x-6">
              <Switch checked={checked} onChange={() => setChecked(!checked)} />
              <Switch
                disabled
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-start space-x-6">
            <div>
              <Radio>
                <Radio.Item name="radio" />
                <Radio.Item name="radio" disabled />
              </Radio>
            </div>
            <div className="flex space-x-6">
              <Checkbox checked onChange={() => {}} />
              <Checkbox checked disabled onChange={() => {}} />
            </div>
            <div className="flex space-x-6">
              <Switch checked onChange={() => {}} />
              <Switch checked disabled onChange={() => {}} />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start space-x-6">
            <h2 className="text-base">Checkbox with Label</h2>
            <Checkbox checked onChange={() => {}} label="Checkbox" />
            <Checkbox
              checked
              disabled
              onChange={() => {}}
              label="Checkbox disabled"
            />
          </div>
          <div className="flex flex-col items-start justify-start space-x-6">
            <h2 className="text-base">Radio with Label</h2>
            <Radio>
              <Radio.Item name="radio" label="Radio" />
              <Radio.Item name="radio" disabled label="Radio disabled" />
            </Radio>
          </div>
          <div className="flex flex-col items-start justify-start space-x-6">
            <h2 className="text-base">Switch with Label</h2>
            <Switch
              checked={checked}
              onChange={() => setChecked(!checked)}
              label="Switch"
            />
            <Switch
              disabled
              checked={checked}
              onChange={() => setChecked(!checked)}
              label="Switch Disabled"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Misc;