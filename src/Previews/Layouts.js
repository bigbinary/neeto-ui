import React from "react";
import {
  MainLayout,
  Header,
  SubHeader,
  Container,
  Scrollable,
  MenuBar,
  FilterBar
} from "../../lib/layouts";

const Layouts = () => {
  return (
    <MainLayout>
      {(showMenu, toggleMenu, showFilter, toggleFilter) => (
        <>
          <MenuBar title="Menubar" showMenu={showMenu}/>
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
