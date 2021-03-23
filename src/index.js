import * as dayjs from "dayjs";
import { isEmpty } from "ramda";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Form, Formik } from "formik";
import {
  ActionBlock,
  Input as FormikInput,
  Radio as FormikRadio,
  Select as FormikSelect,
} from "../lib/components/formik";
import {
  Avatar,
  Button,
  Callout,
  Card,
  DateInput,
  DateRangeInput,
  Dropdown,
  IconPicker,
  Input,
  Label,
  Pagination,
  PageLoader,
  Pane,
  Select,
  Slider,
  Tab,
  Checkbox,
  ColorPalette,
  ColorPicker,
  Accordion,
  ActionDropdown,
  TimeInput,
  Alert,
} from "../lib";

const App = () => {
  const [icon, setIcon] = useState(null);
  const [name, setName] = useState("");

  const [startDate, setStartDate] = useState(
    dayjs("04-12-2020", "DD-MM-YYYY").toDate()
  );
  const [endDate, setEndDate] = useState(
    dayjs("04-12-2020", "DD-MM-YYYY").toDate()
  );
  const [time, setTime] = useState(dayjs().toDate());
  const [pageNo, setPageNo] = useState(1);
  const [sliderCount, setSliderCount] = useState(0);
  const PAGE_SIZE = 5;

  const selectOptions = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ];
  const [selectedAnswer, setSelectedAnswer] = useState({});

  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const formikRadioOptions = [
    {
      label: "Everyone",
      value: true,
      id: "Everyone",
    },
    {
      label: "Logged in users only",
      value: false,
      id: "Logged in users only",
    },
  ];

  const formikSelectOptions = [
    {
      label: "Option 1",
      value: "fselect-opt1",
    },
    {
      label: "Option 2",
      value: "fselect-opt2",
    },
  ];

  return (
    <div className="flex flex-col p-5 m-5">
      Hello
      <IconPicker value={icon} onChange={setIcon} />
      <Card rows={1} className="mt-6">
        <Card.Title>My Card Title</Card.Title>
        <p>Card Item 1</p>
        <p>Card Item 2</p>
      </Card>
      <Dropdown buttonStyle="icon" icon="ri-more-2-fill" className="mb-4">
        <li>Download Transcript</li>
        <li>End Chat</li>
      </Dropdown>
      <Dropdown
        label="Dropdown with Action Button"
        style="secondary"
        actionButtonProps={{
          style: "link",
          icon: "ri-add-line ri-lg",
          label: "Action Button",
          className: "hover:bg-gray-50",
        }}
        className="mb-4"
        position="bottom"
      >
        <li>Click Me</li>
        <li>Hover Me</li>
      </Dropdown>
      <div className="flex">
        <ActionDropdown
          style="primary"
          buttonProps={{
            label: "Save Draft",
          }}
          dropdownProps={{
            autoWidth: true,
          }}
        >
          <li>Publish</li>
        </ActionDropdown>
      </div>
      <Callout icon={false} style="info">
        <span className="leading-relaxed">
          Press
          <span className="font-semibold"> Shift + ?</span> on your keyboard at
          any point.
        </span>
      </Callout>
      <Label
        required
        infoText="Help Text"
        className="mb-1"
        data-cy="cypress-attrs"
      >
        My Label
      </Label>
      <Avatar status="online" contact={{ name: "Oliver Smith" }} />
      <DateInput
        label="Date Input"
        startDateId="start_date_id"
        value={startDate}
        onChange={(startDate) => {
          setStartDate(startDate);
        }}
      />
      <DateRangeInput
        label="Date Range Input"
        startDateId="start_date_id"
        endDateId="end_date_id"
        value={[startDate, endDate]}
        onChange={([startDate, endDate]) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        minDate={dayjs("2019-01-01").toDate()}
        maxDate={dayjs().toDate()}
      />
      <Pagination
        count={17}
        pageNo={pageNo}
        pageSize={PAGE_SIZE}
        navigate={(index) => setPageNo(index)}
      />
      <PageLoader />
      <Select
        data-test-id="select-component-test-id"
        className="mt-4"
        label="Try out the select component"
        required
        placeholder="Select an answer..."
        value={selectedAnswer}
        options={selectOptions}
        onChange={(e) => setSelectedAnswer(e)}
        isSearchable
      />
      <Slider
        min={0}
        max={10}
        label="Slider Label"
        required
        infoText="Slider Help Text"
        stepSize={1}
        labelStepSize={10}
        value={sliderCount}
        onChange={(value) => {
          setSliderCount(value);
        }}
      />
      <Tab className="w-full px-6 border-bottom">
        <Tab.Item icon="ri-brush-line" onClick={() => {}} active={true}>
          Design
        </Tab.Item>
        <Tab.Item
          icon="ri-chat-settings-line"
          onClick={() => {}}
          active={false}
        >
          Settings
        </Tab.Item>
      </Tab>
      <Button
        data-test-id="open-pane"
        label="Open Pane"
        icon="ri-add-line ri-lg"
        onClick={() => setIsPaneOpen(true)}
      />
      <Pane
        title="Open Pane"
        isOpen={isPaneOpen}
        onClose={() => setIsPaneOpen(false)}
      >
        <p>Pane Content</p>
      </Pane>
      <Input
        type="text"
        label="Name"
        data-test-id="name-input"
        placeholder="Enter your name"
        error={isEmpty(name) && "Your name required*"}
        onChange={(e) => setName(e.target.value)}
        value={name}
        required={true}
        maxLength={35}
      />
      <Checkbox id="uniqueId" name="checkbox" required label="Checkbox" />
      <ColorPalette
        color={{ from: "purple-1000", to: "purple-1050" }}
        onChange={() => {}}
      />
      <ColorPicker
        onChange={(value) => {}}
        color="#fefefe"
        colorPaletteProps={{
          color: "#fefefe",
          onChange: () => {},
        }}
      />
      <Accordion className="mt-2" defaultActiveKey={0}>
        <Accordion.Item title="Opened Heading">
          <h1>This one is already open</h1>
        </Accordion.Item>
        <Accordion.Item title="Closed Heading">
          <h1>Yay! I have opened the accordion</h1>
        </Accordion.Item>
      </Accordion>
      <Formik
        initialValues={{ allow_anyone_to_submit_ticket: "", fselect: "" }}
        onSubmit={() => {}}
      >
        <Form className="w-full px-10 py-8 bg-white border rounded-lg shadow-sm">
          <ActionBlock
            cancelButtonProps={{
              "data-test-id": "test-id-1",
            }}
          />
          <FormikInput
            name="inputField"
            type="text"
            label="Name"
            data-test-id="formik-input"
            placeholder="Enter your name"
            error="Custom error message"
          />
          <FormikRadio
            name="allow_anyone_to_submit_ticket"
            label="Who can submit a ticket?"
            stacked
            options={formikRadioOptions}
          />
          <FormikSelect
            name="fselect"
            isMulti
            data-test-id="formik-select-test-id"
            label="Formik Select Component"
            options={formikSelectOptions}
          />
        </Form>
      </Formik>
      <TimeInput
        label="Time"
        required
        value={time}
        onChange={(value) => setTime(value)}
      />
      <div className="p-4">
        <Button
          style="primary"
          label="Click here to open Alert Component"
          onClick={() => setShowAlert(true)}
        />
        <Alert
          style="info"
          isOpen={showAlert}
          onClose={() => setShowAlert(false)}
          title="Alert Title"
          message="This is an alert message"
          icon="ri-information-line text-blue-500"
          cancelButtonProps={{
            onClick: () => setShowAlert(false),
          }}
          submitButtonProps={{
            style: "primary",
            onClick: () => setShowAlert(false),
          }}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
