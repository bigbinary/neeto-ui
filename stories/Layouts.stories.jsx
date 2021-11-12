import React, { useState, useEffect } from "react";
import { MenuHorizontal, Settings, Plus, Search } from "@bigbinary/neeto-icons";

import {
  Header,
  SubHeader,
  Container,
  Scrollable,
  MenuBar,
} from "../lib/components/layouts";
import {
  Button,
  PageLoader,
  Pagination,
  Checkbox,
  Dropdown,
  Typography,
} from "../lib/components";

export default {
  title: "Layouts/Page",
};

const SidebarHandleIcon = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path stroke={color} strokeWidth="1.5" d="M3 7.25L21 7.25"></path>
      <path stroke={color} strokeWidth="1.5" d="M3 11.25L15 11.25"></path>
      <path stroke={color} strokeWidth="1.5" d="M3 15.25L11 15.25"></path>
    </svg>
  );
};

export const Page = () => {
  const [searchString, setSearchString] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex">
      <MenuBar showMenu={showMenu} title="Contacts">
        <MenuBar.Block label="All" count={13} active />
        <MenuBar.Block label="Users" count={2} />
        <MenuBar.Block label="Leads" count={7} />
        <MenuBar.Block label="Visitors" count={4} />

        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        <MenuBar.Block label="Europe" count={80} />
        <MenuBar.Block label="Middle-East" count={60} />
        <MenuBar.Block label="Asia" count={60} />
        <MenuBar.AddNew label="Add New Segments" />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Settings,
            },
            {
              icon: Plus,
            },
            {
              icon: Search,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Block label="Europe" count={80} />
        <MenuBar.Block label="Middle-East" count={60} />
        <MenuBar.Block label="Asia" count={60} />
        <MenuBar.AddNew label="Add New Tag" />

        <MenuBar.Item
          label="General"
          description="Welcome Message, KB and Labels "
        />
        <MenuBar.Item
          label="Styling"
          active
          description="Brand Color, Logo and Widget Position"
        />
        <MenuBar.Item
          label="Widget Icon"
          description="Position, Icon and Label"
        />
      </MenuBar>
      <Container>
        <Header
          title="Layouts"
          actionBlock={<Button label="Primary Action" />}
          menuBarHandle={
            <Button
              style="text"
              className="mr-2"
              icon={() => <SidebarHandleIcon size={20} color={"#68737D"} />}
              onClick={() => setShowMenu(!showMenu)}
            />
          }
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
              className={"neeto-ui-table neeto-ui-table--checkbox neeto-ui-table--actions"}
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
        <div className="flex flex-row items-center justify-end w-full mt-6 mb-8">
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
