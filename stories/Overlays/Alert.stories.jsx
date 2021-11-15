import React, { useEffect, useState } from "react";

import Alert from "../../lib/components/Alert";
import Button from "../../lib/components/Button";

export default {
  title: "Overlays/Alert",
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

export const AlertStory = ({ isOpen, onClose, onSubmit, ...args }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <div className="p-4">
      <Button
        label="Click here to open Alert Component"
        style="primary"
        onClick={() => setOpen(true)}
      />
      <Alert
        isOpen={open}
        title="You have unsaved changes!"
        message="Are you sure you want to continue? All of your unsaved changes will be lost."
        onClose={() => setOpen(false)}
        onSubmit={() => setOpen(false)}
        {...args}
      />
    </div>
  );
};

AlertStory.args = {
  isOpen: false,
  title: "You have unsaved changes!",
  message:
    "Are you sure you want to continue? All of your unsaved changes will be lost.",
  isSubmitting: false,
};
AlertStory.storyName = "Alert";