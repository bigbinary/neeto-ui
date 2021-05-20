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
                <div className="flex-grow h-full bg-gray-100 rounded"></div>
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
