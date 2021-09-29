import React, { useState } from "react";

import Alert from "../lib/components/Alert";
import Button from "../lib/components/Button";

export default {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Alert } from "@bigbinary/neetoui/v2";`',
      },
    },
  },
};

export const Alerts = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4">
      <Button
        label="Click here to open Alert Component"
        style="primary"
        onClick={() => setOpen(true)}
      />
      <Alert
        isOpen={open}
        title="Alert Title"
        message="This is an alert message"
        onClose={() => setOpen(false)}
        onSubmit={() => setOpen(false)}
      />
    </div>
  );
};
