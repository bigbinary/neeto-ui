import React, { useState } from "react";
import {
  MainLayout,
  Header,
  SubHeader,
  Container,
  Scrollable,
  MenuBar,
  FilterBar
} from "../../lib/layouts";

const LABELS = ["Misc", "Random", "Urgent"];

const Layouts = () => {
  const [currentLabel, setCurrentLabel] = useState(null);
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
            <SubHeader toggleFilter={toggleFilter}/>
            <div className="flex flex-row items-start justify-start w-full">
              <Scrollable className="w-full p-4">
                <div className="flex-grow h-full bg-gray-100 rounded">
                </div>
              </Scrollable>
              <FilterBar showFilter={showFilter}/>
            </div>
          </Container>
        </>
      )}
    </MainLayout>
  )
}

export default Layouts;
