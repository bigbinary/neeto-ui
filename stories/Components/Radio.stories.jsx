import React from "react";

import Radio from "../../lib/components/Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Radio } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
};

export const Options = () => {
  return (
    <Radio label="Radio Options" className="space-y-4">
      <Radio.Item label="option1" value="option1" />
      <Radio.Item label="option2" value="option2" />
    </Radio>
  );
};

export const OptionsStacked = () => {
  return (
    <Radio label="Radio Options Stacked" className="space-y-4" stacked>
      <Radio.Item label="option1" value="option1" />
      <Radio.Item label="option2" value="option2" />
    </Radio>
  );
};
