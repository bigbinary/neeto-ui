import { Modal, Typography, Pane } from "../../lib/components";
import React from "react";
import isChromatic from "chromatic/isChromatic";
import DatePicker from "../../lib/components/DatePicker";
import TimePicker from "../../lib/components/TimePicker";
import Button from "../../lib/components/Button";
import dayjs from "dayjs";
import { Clock, Calendar } from "@bigbinary/neeto-icons";

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
        onOk={() => setOpen(false)}
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

export const DatePickerWithCustomTargetAndLabel = (args) => {
  return (
    <DatePicker customTarget={(dateObj) => {
      const customLabel = dateObj?.toLocaleString() ?? "Select Date";
      return <Button icon={Calendar}
        label={customLabel} />;
    }} {...args} />
  );
};
DatePickerWithCustomTargetAndLabel.storyName = "Date Picker with Custom Target and and dynamic Label";
DatePickerWithCustomTargetAndLabel.parameters = {
  docs: {
    description: {
      story:
        "`customTarget` prop is used to replace the default input field with any custom element, Date object can be recieved in the customTarget function if you want to use it",
    },
  },
};

export const DatePickerWithCustomTarget = (args) => {
  return (
    <DatePicker customTarget={<Button label="Select Date" icon={Calendar} />} {...args} />
  );
};
DatePickerWithCustomTarget.storyName = "Date Picker with Custom Target";
DatePickerWithCustomTarget.parameters = {
  docs: {
    description: {
      story:
        "`customTarget` prop is used to replace the default input field with any custom element.",
    },
  },
};

export const TimePickerWithCustomTarget = (args) => {
  return (
    <TimePicker
      defaultValue={
        isChromatic() ? dayjs(new Date(1999, 7, 16, 5, 32)) : dayjs()
      }
      customTarget={(timeObj) => {
        const customLabel = timeObj?.toLocaleString() ?? "Select Time";
        return <Button icon={Clock}
          label={customLabel} />;
      }}
      {...args}
    />
  );
};
TimePickerWithCustomTarget.storyName = "Time Picker with Custom Target and dynamic Label";
TimePickerWithCustomTarget.parameters = {
  docs: {
    description: {
      story:
        "`customTarget` prop is used to replace the default input field with any custom element, Date object can be recieved in the customTarget function if you want to use it",
    },
  },
};

export const RangePickerWithCustomTarget = (args) => {
  return (
    <div className="space-y-3">
      <DatePicker type="range" customTarget={(dateObj) => {
        const customLabel = `Starts On: ${dateObj?.[0]?.toLocaleString() ?? "---"} - Ends On: ${dateObj?.[1]?.toLocaleString() ?? "---"}`;
        return <Button icon={Calendar}
          label={customLabel} />;
      }} {...args} />

    </div>
  );
};
RangePickerWithCustomTarget.storyName = "Range Picker with Custom Target and value";
RangePickerWithCustomTarget.parameters = {
  docs: {
    description: {
      story:
        "`customTarget` prop is used to replace the default input field with any custom element. `DateObj` can be recieved as prop to use in the custom Target it contains start and end date in `[startdateObj, endDateObj]`",
    },
  },
};

export const DateRangePicker = () => {
  return (
    <div className="space-y-3">
      <DatePicker
        label="Date Range"
        type="range"
        defaultValue={
          isChromatic()
            ? [
              dayjs(new Date(1999, 7, 16)),
              dayjs(new Date(1999, 7, 16)).add(7, "day"),
            ]
            : [dayjs(), dayjs().add(7, "day")]
        }
      />
    </div>
  );
};
