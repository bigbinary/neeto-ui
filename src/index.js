import moment from "moment";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Avatar, Button, Callout, Card, DateRangeInput, Dropdown, IconPicker, Label, Pagination, PageLoader, Select } from "../lib";

const App = () => {
  const [icon, setIcon] = useState(null)

  const [startDate, setStartDate] = useState(moment("04-12-2020", "DD-MM-YYYY").toDate());
  const [endDate, setEndDate] = useState(moment("04-12-2020", "DD-MM-YYYY").toDate());
  const [pageNo, setPageNo] = useState(1);
  const PAGE_SIZE = 5;

  const selectOptions = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
  ];
  const [selectedAnswer, setSelectedAnswer] = useState({});


  return (
    <>
      Hello
      <IconPicker value={icon} onChange={setIcon} />

      <Card
        rows={1}
        className="mt-6"
      >
        <Card.Title>My Card Title</Card.Title>
        <p>Card Item 1</p>
        <p>Card Item 2</p>
      </Card>

      <Dropdown buttonStyle="icon" icon="ri-more-2-fill">
        <li>Download Transcript</li>
        <li>End Chat</li>
      </Dropdown>

      <Callout icon={false} style="info">
        <span className="leading-relaxed">
          Press
          <span className="font-semibold"> Shift + ?</span> on your
          keyboard at any point.
        </span>
      </Callout>

      <Label
        required
        helpText="Help Text"
        className="mb-1"
        data-cy="cypress-attrs"
      >
        My Label
      </Label>

      <Avatar
        status="online"
        contact={{ name: "Oliver Smith" }}
      />

      <Button
        dataTestId="add-new-ticket"
        label="Add Ticket"
        icon="ri-add-line ri-lg"
      />

      <DateRangeInput
        label="Time period"
        startDateId="start_date_id"
        endDateId="end_date_id"
        value={[startDate, endDate]}
        onChange={([startDate, endDate]) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        minDate={moment("2019-01-01").toDate()}
        maxDate={moment().toDate()}
      />

      <Pagination
        count={17}
        pageNo={pageNo}
        pageSize={PAGE_SIZE}
        navigate={index => setPageNo(index)}
      />

      <PageLoader />

      <Select
        className="mt-4"
        label="Try out the select component"
        required
        placeholder="Select an answer..."
        value={selectedAnswer}
        options={selectOptions}
        onChange={e => setSelectedAnswer(e)}
        isSearchable
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
