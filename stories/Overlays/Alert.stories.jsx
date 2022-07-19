import React, { useState } from "react";

import Alert from "../../lib/components/Alert";
import Button from "../../lib/components/Button";

export default {
  title: "Overlays/Alert",
  component: Alert,
  subcomponents: { Button },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { Alert } from "@bigbinary/neetoui";`',
      },
    },
  },
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4">
      <Button
        label="Show Alert"
        style="primary"
        onClick={() => setOpen(true)}
      />
      <Alert
        isOpen={open}
        title="You have unsaved changes!"
        description="Short description"
        message="Are you sure you want to continue? All of your unsaved changes will be lost."
        onClose={() => setOpen(false)}
        onSubmit={() => setOpen(false)}
      />
    </div>
  );
};

export const AlertSizing = () => {
  const [showAlertExtraSmall, setShowAlertExtraSmall] = useState(false);
  const [showAlertSmall, setShowAlertSmall] = useState(false);
  const [showAlertMedium, setShowAlertMedium] = useState(false);

  return (
    <div className="w-full">
      <div className="space-y-6">
        <div className="w-1/2 space-y-8">
          <div className="flex flex-row items-center justify-start space-x-6">
            <Button
              label="Extra Small"
              onClick={() => setShowAlertExtraSmall(true)}
            />
            <Button label="Small" onClick={() => setShowAlertSmall(true)} />
            <Button label="Medium" onClick={() => setShowAlertMedium(true)} />
          </div>
          <Alert
            size="xs"
            isOpen={showAlertExtraSmall}
            title="You have unsaved changes!"
            message="Are you sure you want to continue? All of your unsaved changes will be lost."
            onClose={() => setShowAlertExtraSmall(false)}
            onSubmit={() => setShowAlertExtraSmall(false)}
          />
          <Alert
            size="sm"
            isOpen={showAlertSmall}
            title="You have unsaved changes!"
            message="Are you sure you want to continue? All of your unsaved changes will be lost."
            onClose={() => setShowAlertSmall(false)}
            onSubmit={() => setShowAlertSmall(false)}
          />
          <Alert
            size="md"
            isOpen={showAlertMedium}
            title="You have unsaved changes!"
            message="Are you sure you want to continue? All of your unsaved changes will be lost."
            onClose={() => setShowAlertMedium(false)}
            onSubmit={() => setShowAlertMedium(false)}
          />
        </div>
      </div>
    </div>
  );
};
