import React, { useState } from "react";
import { Container, Scrollable } from "../../../lib/v2/layouts";
import Header from "../Header";

import { Button } from "../../../lib/v2";
const noop = () => {};
const COLUMNFILTERS = {
  email: { show: false, label: "Email" },
  display_role: { show: true, label: "Role" },
  groups: { show: false, label: "Groups" },
  active_assigned_tickets_count: {
    show: true,
    label: "Assigned Tickets",
  },
  available_for_desk: {
    show: true,
    label: "Availability for Desk",
  },
};

const Layouts = () => {
  const [searchString, setSearchString] = useState("");
  return (
    <Container>
      <Header title="Layouts" />
      {/* <SubHeader
        toggleFilter={toggleFilter}
        searchProps={{
          value: searchString,
          onChange: (e) => setSearchString(e.target.value),
          clear: () => setSearchString(""),
          "data-testid": "search-input",
        }}
        sortProps={{
          options: [],
          onClick: noop,
        }}
        columnFilterProps={{
          columnFilters: COLUMNFILTERS,
          handleColumnFiltering: noop,
        }}
      /> */}
      <div className="flex flex-row items-start justify-start w-full">
        <Scrollable className="w-full p-4">
          <table className={`v2-nui-table v2-nui-table--actions`}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Phone No</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Goutham Subramanyam</td>
                <td>goutham.subramanyam@bigbinary.com</td>
                <td>BigBinary</td>
                <td>+91 9633123456</td>
                <td>
                  <div className="flex flex-row items-center justify-end space-x-3">
                    {/* <Tooltip content="Edit" position="bottom"> */}
                    <Button icon="ri-pencil-line" style="icon" />
                    {/* </Tooltip> */}
                    {/* <Tooltip
                      content="Deactivate"
                      position="bottom"
                      theme="light"
                    > */}
                    <Button icon="ri-lock-line" style="icon" />
                    {/* </Tooltip> */}
                    {/* <Tooltip content="Delete" position="bottom" minimal> */}
                    <Button icon="ri-delete-bin-line" style="icon" />
                    {/* </Tooltip> */}
                  </div>
                </td>
              </tr>
              <tr>
                <td>Edwin Babu</td>
                <td>edwin.babu@bigbinary.com</td>
                <td>BigBinary</td>
                <td>+91 8281331983</td>
                <td>
                  <div className="flex flex-row items-center justify-end space-x-3">
                    {/* <Tooltip content="Edit" position="bottom"> */}
                    <Button icon="ri-pencil-line" style="icon" />
                    {/* </Tooltip> */}
                    {/* <Tooltip
                      content="Deactivate"
                      position="bottom"
                      theme="light"
                    > */}
                    <Button icon="ri-lock-line" style="icon" />
                    {/* </Tooltip> */}
                    {/* <Tooltip content="Delete" position="bottom" minimal> */}
                    <Button icon="ri-delete-bin-line" style="icon" />
                    {/* </Tooltip> */}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Scrollable>
      </div>
    </Container>
  );
};

export default Layouts;
