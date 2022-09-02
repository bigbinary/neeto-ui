import React from "react";

import isChromatic from "chromatic/isChromatic";
import dayjs from "dayjs";
import { Modal, Typography, Pane } from "../../lib/components";
import Button from "../../lib/components/Button";
import TimePicker from "../../lib/components/TimePicker";

export default {
  title: "Components/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { TimePicker } from "@bigbinary/neetoui";`',
      },
    },
  },
};

export const TimeInput = (args) => {
  return <TimePicker {...args} />;
};

TimeInput.storyName = "TimePicker";
TimeInput.args = {
  type: "time",
};

export const TimePickerInModal = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button label="Open Modal" onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <Typography style="h2">Modal</Typography>
        </Modal.Header>
        <Modal.Body className="space-y-6">
          <div>
            <Typography>Time</Typography>
            <TimePicker
              {...args}
              getPopupContainer={(triggerNode) => triggerNode.parentNode}
            />
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
TimePickerInModal.storyName = "TimePicker in Modal";

export const TimePickerInPane = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button label="Open Pane" onClick={() => setIsOpen(true)} />
      <Pane isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Pane.Header>
          <Typography style="h3">Pane</Typography>
        </Pane.Header>
        <Pane.Body className="flex flex-col space-y-6">
          <div className="w-full">
            <Typography>Time</Typography>
            <TimePicker
              {...args}
              getPopupContainer={(triggerNode) => triggerNode.parentNode}
            />
          </div>
        </Pane.Body>
      </Pane>
    </>
  );
};
TimePickerInPane.storyName = "TimePicker in Pane";

export const TimePickerWithRef = () => {
  const ref = React.useRef();
  const [open, setOpen] = React.useState(false);
  return (
    <div className="space-y-3">
      <Button label="Focus" onClick={() => ref.current.focus()} />
      <TimePicker
        ref={ref}
        open={open}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onOk={() => setOpen(false)}
      />
    </div>
  );
};
TimePickerWithRef.storyName = "TimePicker with ref";

export const TimePickerWithDefaultValue = (args) => {
  return (
    <div className="space-y-3">
      <TimePicker
        defaultValue={
          isChromatic() ? dayjs(new Date(1999, 7, 16, 5, 32)) : dayjs()
        }
        {...args}
      />
    </div>
  );
};
TimePickerWithDefaultValue.storyName = "TimePicker with default value";
TimePickerWithDefaultValue.parameters = {
  docs: {
    description: {
      story:
        "`defaultValue` prop is used to set the default value of the input. It accepts a `dayjs` object.",
    },
  },
};
