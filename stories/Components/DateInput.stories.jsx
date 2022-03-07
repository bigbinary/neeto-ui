import { Modal, Typography, Pane } from "../../lib/components";
import React from "react";

import DatePicker from "../../lib/components/DatePicker";
import TimePicker from "../../lib/components/TimePicker";
import Button from "../../lib/components/Button";
import dayjs from "dayjs";
import isChromatic from "chromatic/isChromatic";

export default {
  title: "Components/Date and Time",
  component: DatePicker,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: '`import { DatePicker } from "@bigbinary/neetoui";`',
      },
      source: {
        type: "code",
      },
    },
  },
};

export const DateInput = (args) => {
  return <DatePicker {...args} />;
};

DateInput.storyName = "DatePicker";
DateInput.args = {
  label: "Date",
  type: "date",
  picker: "date",
  showTime: false,
};

export const DatePickerWithRef = () => {
  const ref = React.useRef();
  const [open, setOpen] = React.useState(false);
  return (
    <div className="space-y-3">
      <Button label="Focus" onClick={() => ref.current.focus()} />
      <DatePicker
        ref={ref}
        open={open}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      />
    </div>
  );
};

export const TimeInput = (args) => {
  return <TimePicker {...args} />;
};

TimeInput.storyName = "TimePicker";
TimeInput.args = {
  label: "Time",
};

export const DateTimePickerInModal = (args) => {
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
            <Typography>Date</Typography>
            <DatePicker
              {...args}
              getPopupContainer={(triggerNode) => triggerNode.parentNode}
            />
          </div>
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

export const DateTimePickerInPane = (args) => {
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
            <Typography>Date</Typography>
            <DatePicker
              {...args}
              getPopupContainer={(triggerNode) => triggerNode.parentNode}
            />
          </div>
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
      />
    </div>
  );
};

export const DatePickerWithDefaultValue = (args) => {
  return (
    <div className="space-y-3">
      <DatePicker
        defaultValue={isChromatic() ? dayjs(new Date(1999, 7, 16)) : dayjs()}
        {...args}
      />
    </div>
  );
};

DatePickerWithDefaultValue.parameters = {
  docs: {
    description: {
      story:
        "`defaultValue` prop is used to set the default value of the input. It accepts a `dayjs` object.",
    },
  },
};

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

TimePickerWithDefaultValue.parameters = {
  docs: {
    description: {
      story:
        "`defaultValue` prop is used to set the default value of the input. It accepts a `dayjs` object.",
    },
  },
};

export const DateRangePicker = () => {
  return (
    <div className="space-y-3">
      <DatePicker
        label="Date Range"
        type="range"
        defaultValue={[dayjs(), dayjs().add(7, "day")]}
      />
    </div>
  );
};
