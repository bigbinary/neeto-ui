import React, { useState, useEffect } from "react";
import {
  Header,
  SubHeader,
  Container,
  Scrollable,
  MenuBar,
} from "../../../lib/components/layouts";
import {
  Button,
  PageLoader,
  Pagination,
  Checkbox,
  Dropdown,
} from "../../../lib/components";
import { MenuHorizontal, Settings, RightArrow, LeftArrow, Plus, Search, UserCircle } from "@bigbinary/neeto-icons";

const Layouts = () => {
  const [searchString, setSearchString] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex">
      <MenuBar
        showMenu={showMenu}
        title={
          <div className="flex justify-between">
            <h2>Contacts</h2>
            <Button style="icon" icon={() => <Settings size={24} />} />
          </div>
        }
      >
        <MenuBar.Search />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: () => <Settings size={20} />,
            },
            {
              icon: () => <Plus size={20} />,
            },
            {
              icon: () => <Search size={20} />,
            },
          ]}
        >
          Subtitle
        </MenuBar.SubTitle>
        <MenuBar.Item label="Item" count={200} />
        <MenuBar.Item label="Item 1" count={13} />
        <MenuBar.Item label="Item 2" count={56} />
        <MenuBar.Block label="All" count={13} active />
        <MenuBar.Block label="Users" count={2} icon={<UserCircle />} />
        <MenuBar.Block label="Leads" count={7} />
        <MenuBar.Block label="Visitors" count={4} />
      </MenuBar>
      <Container>
        <Header
          title={
            <div className="flex items-center">
              <Button style="icon" icon={() => showMenu ? <LeftArrow size={24} /> : <RightArrow size={24} />} onClick={() => setShowMenu(!showMenu)} />
              <h3>Layouts</h3>
            </div>
          }
          actionBlock={<Button label="Primary Action" />}
          breadcrumbs={[{ text: "Home", link: "/" }]}
        />
        <SubHeader
          searchProps={{
            value: searchString,
            onChange: (e) => setSearchString(e.target.value),
          }}
          deleteButtonProps={{
            count: 0,
            selectedIDs: [],
            onClick: () => {},
          }}
          disableButtonProps={{
            count: 0,
            selectedIDs: [],
            onClick: () => {},
          }}
        />
        <Scrollable className="w-full">
          {isLoading ? (
            <PageLoader />
          ) : (
            <table
              className={`v2-nui-table v2-nui-table--checkbox v2-nui-table--actions`}
            >
              <thead>
                <tr>
                  <th>
                    <Checkbox name="header" />
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>Phone No</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {Array(50)
                  .fill()
                  .map((_, index) => (
                    <React.Fragment key={index}>
                      <tr>
                        <td>
                          <Checkbox name="1" />
                        </td>
                        <td>Goutham Subramanyam</td>
                        <td>goutham.subramanyam@bigbinary.com</td>
                        <td>BigBinary</td>
                        <td>+91 9633123456</td>
                        <td>
                          <div className="flex flex-row items-center justify-end space-x-3">
                            <Dropdown
                              icon={MenuHorizontal}
                              buttonStyle="icon"
                              autoWidth
                            >
                              <li>Edit</li>
                              <li>Delete</li>
                            </Dropdown>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Checkbox name="2" />
                        </td>
                        <td>Edwin Babu</td>
                        <td>edwin.babu@bigbinary.com</td>
                        <td>BigBinary</td>
                        <td>+91 8281331983</td>
                        <td>
                          <div className="flex flex-row items-center justify-end space-x-3">
                            <Dropdown
                              icon={MenuHorizontal}
                              buttonStyle="icon"
                              autoWidth
                            >
                              <li>Edit</li>
                              <li>Delete</li>
                            </Dropdown>
                          </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
              </tbody>
            </table>
          )}
        </Scrollable>
        <div className="flex flex-row justify-end items-center w-full mt-6 mb-8">
          <Pagination
            count={300}
            pageNo={1}
            pageSize={25}
            navigate={() => {}}
          />
        </div>
      </Container>
    </div>
  );
};

export default Layouts;
