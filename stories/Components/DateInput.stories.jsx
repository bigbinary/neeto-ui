import React from "react";

import isChromatic from "chromatic/isChromatic";
import dayjs from "dayjs";

import { Modal, Typography, Pane, DatePicker } from "components";
import Button from "components/Button";

import DateInputStoriesDocs from "!raw-loader!./DateInputStoriesDocs.mdx";

const metadata = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "padded",
    docs: { description: { component: DateInputStoriesDocs } },
    design: {
      type: "figma",
      url: "https://www.figma.com/file/zhdsnPzXzr264x1WUeVdmA/02-Components?node-id=104%3A7",
    },
  },
  argTypes: {
    onChange: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "-" },
      },
    },
    onOk: {
      table: {
        type: { summary: "func" },
        defaultValue: { summary: "(event) => void" },
      },
    },
  },
};

const DateInput = args => <DatePicker {...args} />;

DateInput.storyName = "DatePicker";
DateInput.args = {
  label: "Date",
  type: "date",
  picker: "date",
  showTime: false,
};

const DatePickerWithRef = args => {
  const ref = React.useRef();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-3">
      <Button label="Focus" onClick={() => ref.current.focus()} />
      <DatePicker
        {...args}
        open={open}
        ref={ref}
        onBlur={() => setOpen(false)}
        onFocus={() => setOpen(true)}
      />
    </div>
  );
};
DatePickerWithRef.storyName = "DatePicker with ref";

const DatePickerInModal = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button label="Open modal" onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <Typography style="h2">Modal</Typography>
        </Modal.Header>
        <Modal.Body className="space-y-6">
          <div>
            <Typography>Date</Typography>
            <DatePicker
              {...args}
              getPopupContainer={triggerNode => triggerNode.parentNode}
            />
          </div>
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
};
DatePickerInModal.storyName = "DatePicker in modal";

const DatePickerInPane = args => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button label="Open pane" onClick={() => setIsOpen(true)} />
      <Pane isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Pane.Header>
          <Typography style="h3">Pane</Typography>
        </Pane.Header>
        <Pane.Body className="flex flex-col space-y-6">
          <div className="w-full">
            <Typography>Date</Typography>
            <DatePicker
              {...args}
              getPopupContainer={triggerNode => triggerNode.parentNode}
            />
          </div>
        </Pane.Body>
      </Pane>
    </>
  );
};
DatePickerInPane.storyName = "DatePicker in pane";

const DatePickerWithDefaultValue = args => (
  <div className="space-y-3">
    <DatePicker
      defaultValue={isChromatic() ? dayjs(new Date(1999, 7, 16)) : dayjs()}
      {...args}
    />
  </div>
);

DatePickerWithDefaultValue.storyName = "DatePicker with default value";
DatePickerWithDefaultValue.parameters = {
  docs: {
    description: {
      story:
        "`defaultValue` prop is used to set the default value of the input. It accepts a `dayjs` object.",
    },
  },
};

const DateRangePicker = args => (
  <div className="space-y-3">
    <DatePicker
      {...args}
      label="Date range"
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

DateRangePicker.storyName = "DateRangePicker";

DateRangePicker.parameters = {
  docs: {
    source: {
      code: `
<DatePicker
  label="Date range"
  type="range"
  defaultValue={[dayjs(), dayjs().add(7, "day")]}
/>`,
    },
  },
};

const DateRangePickerWithPresetRanges = args => (
  <div className="space-y-3">
    <DatePicker
      {...args}
      label="Date range"
      type="range"
      defaultValue={
        isChromatic()
          ? [
              dayjs(new Date(1999, 7, 16)),
              dayjs(new Date(1999, 7, 16)).add(7, "day"),
            ]
          : [dayjs(), dayjs().add(7, "day")]
      }
      ranges={{
        Today: [dayjs(), dayjs()],
        Yesterday: [dayjs().subtract(1, "d"), dayjs()],
        "Last Week": [dayjs().subtract(7, "d"), dayjs()],
        "This Month": [dayjs().startOf("month"), dayjs().endOf("month")],
        "Last Month": [
          dayjs().subtract(1, "month").startOf("month"),
          dayjs().subtract(1, "month").endOf("month"),
        ],
        "This Year": [dayjs().startOf("year"), dayjs().endOf("year")],
      }}
    />
  </div>
);

DateRangePickerWithPresetRanges.storyName =
  "DateRangePicker with preset ranges";

DateRangePickerWithPresetRanges.parameters = {
  docs: {
    source: {
      code: `
<DatePicker
  label="Date range"
  type="range"
  defaultValue={[dayjs(), dayjs().add(7, "day")]}
  ranges={{
    Today: [dayjs(), dayjs()],
    Yesterday: [dayjs().subtract(1, "d"), dayjs()],
    "Last Week": [dayjs().subtract(7, "d"), dayjs()],
    "This Month": [dayjs().startOf("month"), dayjs().endOf("month")],
    "Last Month": [
      dayjs().subtract(1, "month").startOf("month"),
      dayjs().subtract(1, "month").endOf("month"),
    ],
    "This Year": [dayjs().startOf("year"), dayjs().endOf("year")],
  }}
/>`,
    },
  },
};

const ShowTime = args => (
  <DatePicker {...args} showTime label="Date" picker="date" type="date" />
);
ShowTime.storyName = "Show time";

export {
  DateInput,
  DatePickerWithRef,
  DatePickerInModal,
  DatePickerInPane,
  DatePickerWithDefaultValue,
  DateRangePicker,
  DateRangePickerWithPresetRanges,
  ShowTime,
};

export default metadata;
