import React, { useState } from "react";
import {
  MainLayout,
  Header,
  SubHeader,
  Container,
  Scrollable,
  MenuBar,
  FilterBar,
} from "../../lib/layouts";

import { Button, Tooltip } from "../../lib";

const noop = () => {};
const LABELS = ["Misc", "Random", "Urgent"];
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
  const [currentLabel, setCurrentLabel] = useState(null);
  const [searchString, setSearchString] = useState("");
  return (
    <MainLayout>
      {(showMenu, toggleMenu, showFilter, toggleFilter) => (
        <>
          <MenuBar title="Menubar" showMenu={showMenu}>
            <div className="mb-6">
              <MenuBar.SubTitle>Tags</MenuBar.SubTitle>
              {LABELS.map((label, index) => (
                <MenuBar.Item
                  key={index}
                  count={5}
                  label={label}
                  active={currentLabel === label}
                  onClick={() => setCurrentLabel(label)}
                />
              ))}
            </div>
          </MenuBar>
          <Container>
            <Header title="Layouts" toggleMenu={toggleMenu} />
            <SubHeader
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
            />
            <div className="flex flex-row items-start justify-start w-full">
              <Scrollable className="w-full p-4">
                <table className="nui-table nui-table--actions">
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
                          <Tooltip content="Edit" position="bottom">
                            <Button icon="ri-pencil-line" style="icon" />
                          </Tooltip>
                          <Tooltip
                            content="Deactivate"
                            position="bottom"
                            theme="light"
                          >
                            <Button icon="ri-lock-line" style="icon" />
                          </Tooltip>
                          <Tooltip content="Delete" position="bottom" minimal>
                            <Button icon="ri-delete-bin-line" style="icon" />
                          </Tooltip>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Scrollable>
              <FilterBar showFilter={showFilter} />
            </div>
          </Container>
        </>
      )}
    </MainLayout>
  );
};

export default Layouts;
