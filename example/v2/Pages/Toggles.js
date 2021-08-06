import React, { useState } from "react";
import { Switch, Radio, Checkbox } from "../../../lib/v2";
import Header from "../Header";

const Misc = () => {
  const [data, setData] = useState({});
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
                name="1"
                checked={data["1"]}
                onChange={(e) => setData({ ...data, "1" : e.target.checked })}
              />
              <Checkbox
                name="2"
                checked={data["2"]}
                onChange={(e) => setData({ ...data, "2" : e.target.checked })}
                disabled
              />
            </div>
            <div className="flex space-x-6">
              <Switch
                name="3"
                checked={data["3"]}
                onChange={(e) => setData({ ...data, "3" : e.target.checked })}
              />
              <Switch
                name="4"
                disabled
                checked={data["4"]}
                onChange={(e) => setData({ ...data, "4" : e.target.checked })}
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
              <Checkbox
                name="5"
                checked={data["5"]}
                onChange={(e) => setData({ ...data, "5" : e.target.checked })}
                />
              <Checkbox
                name="6"
                checked={data["6"]}
                onChange={(e) => setData({ ...data, "6" : e.target.checked })}
                disabled
              />
            </div>
            <div className="flex space-x-6">
              <Switch
                name="7"
                checked={data["7"]}
                onChange={(e) => setData({ ...data, "7" : e.target.checked })}
                />
              <Switch
                name="8"
                checked={data["8"]}
                onChange={(e) => setData({ ...data, "8" : e.target.checked })}
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start space-y-6">
            <h2 className="text-base">Checkbox with Label</h2>
            <Checkbox
              name="9"
              label="Checkbox"
              checked={data["9"]}
              onChange={(e) => setData({ ...data, "9" : e.target.checked })}
              />
            <Checkbox
              name="10"
              label="Checkbox Disabled"
              checked={data["10"]}
              onChange={(e) => setData({ ...data, "10" : e.target.checked })}
              disabled
            />
          </div>
          <div className="flex flex-col items-start justify-start space-y-6">
            <h2 className="text-base">Radio with Label</h2>
            <Radio>
              <Radio.Item name="radio" label="Radio" />
              <Radio.Item name="radio" disabled label="Radio disabled" />
            </Radio>
          </div>
          <div className="flex flex-col items-start justify-start space-y-6">
            <h2 className="text-base">Switch with Label</h2>
            <Switch
              name="11"
              label="Switch"
              checked={data["11"]}
              onChange={(e) => setData({ ...data, "11" : e.target.checked })}
              />
            <Switch
              name="12"
              label="Switch Disabled"
              checked={data["12"]}
              onChange={(e) => setData({ ...data, "12" : e.target.checked })}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Misc;